const http = require('http');
const net = require('net');

// Ports to check for backend dev server
const BACKEND_PORTS = [3000, 3001];
const PROXY_PORT = 8642;

const loadingPageHTML = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Starting</title>\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    body {\n      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\n      background: #000;\n      color: #fff;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      min-height: 100vh;\n      line-height: 1.5;\n      -webkit-font-smoothing: antialiased;\n    }\n    .container {\n      text-align: center;\n      max-width: 420px;\n      padding: 0 1.5rem;\n    }\n    .spinner {\n      width: 20px;\n      height: 20px;\n      border: 2px solid #333;\n      border-top-color: #fff;\n      border-radius: 50%;\n      animation: spin 0.6s linear infinite;\n      margin: 0 auto 2rem;\n    }\n    h1 {\n      font-size: 0.875rem;\n      font-weight: 500;\n      margin-bottom: 0.5rem;\n      letter-spacing: -0.01em;\n      color: #fff;\n    }\n    p {\n      font-size: 0.8125rem;\n      color: #666;\n      line-height: 1.6;\n    }\n    @keyframes spin {\n      to { transform: rotate(360deg); }\n    }\n  </style>\n  <script>\n    setTimeout(() => location.reload(), 3000);\n  </script>\n</head>\n<body>\n  <div class=\"container\">\n    <div class=\"spinner\"></div>\n    <h1>Starting</h1>\n    <p>Waiting for your development server to start.</p>\n  </div>\n</body>\n</html>";

/**
 * Check if a port is available/listening
 */
function checkPort(port) {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    socket.setTimeout(100);
    
    socket.on('connect', () => {
      socket.destroy();
      resolve(true);
    });
    
    socket.on('timeout', () => {
      socket.destroy();
      resolve(false);
    });
    
    socket.on('error', () => {
      resolve(false);
    });
    
    socket.connect(port, '127.0.0.1');
  });
}

/**
 * Find the first available backend port
 */
async function findBackendPort() {
  for (const port of BACKEND_PORTS) {
    if (await checkPort(port)) {
      return port;
    }
  }
  return null;
}

/**
 * Proxy a request to the backend server
 */
function proxyRequest(req, res, targetPort) {
  const options = {
    hostname: '127.0.0.1',
    port: targetPort,
    path: req.url,
    method: req.method,
    headers: req.headers,
  };
  
  const proxy = http.request(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res);
  });
  
  proxy.on('error', (err) => {
    console.error('Proxy request error:', err.message);
    res.writeHead(502, { 'Content-Type': 'text/plain' });
    res.end('Bad Gateway: Unable to connect to backend server');
  });
  
  req.pipe(proxy);
}

/**
 * Main HTTP server that proxies or serves loading page
 */
const server = http.createServer(async (req, res) => {
  try {
    const backendPort = await findBackendPort();
    
    if (backendPort) {
      console.log(`[PROXY] ${req.method} ${req.url} -> port ${backendPort}`);
      proxyRequest(req, res, backendPort);
    } else {
      console.log(`[PROXY] No backend found, serving loading page for ${req.url}`);
      res.writeHead(200, { 
        'Content-Type': 'text/html',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      });
      res.end(loadingPageHTML);
    }
  } catch (err) {
    console.error('Server error:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.on('error', (err) => {
  console.error('Server failed to start:', err.message);
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PROXY_PORT} is already in use!`);
  }
  process.exit(1);
});

server.listen(PROXY_PORT, '0.0.0.0', () => {
  console.log(`Proxy server running on port ${PROXY_PORT}`);
  console.log(`Checking backend ports: ${BACKEND_PORTS.join(', ')}`);
});
