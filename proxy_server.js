const http = require('http');
const net = require('net');

// Ports to check for backend dev server
const BACKEND_PORTS = [3000, 3001];
const PROXY_PORT = 8642;

const loadingPageHTML = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Starting Development Server</title>\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    body {\n      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;\n      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n      color: #fff;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      min-height: 100vh;\n      line-height: 1.6;\n    }\n    .container {\n      max-width: 500px;\n      padding: 3rem;\n      background: rgba(255, 255, 255, 0.1);\n      backdrop-filter: blur(10px);\n      border-radius: 16px;\n      border: 1px solid rgba(255, 255, 255, 0.2);\n      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n    }\n    h1 {\n      font-size: 1.5rem;\n      font-weight: 600;\n      margin-bottom: 0.75rem;\n      letter-spacing: -0.02em;\n    }\n    p {\n      font-size: 1rem;\n      color: rgba(255, 255, 255, 0.9);\n      margin-bottom: 1.5rem;\n    }\n    .spinner {\n      width: 40px;\n      height: 40px;\n      border: 4px solid rgba(255, 255, 255, 0.3);\n      border-top-color: #fff;\n      border-radius: 50%;\n      animation: spin 0.8s linear infinite;\n      margin: 0 auto 2rem;\n    }\n    .info {\n      margin-top: 2rem;\n      padding: 1.5rem;\n      background: rgba(0, 0, 0, 0.2);\n      border-radius: 8px;\n      border: 1px solid rgba(255, 255, 255, 0.1);\n    }\n    .info p {\n      margin: 0 0 0.75rem 0;\n      font-size: 0.875rem;\n      color: rgba(255, 255, 255, 0.8);\n    }\n    .info p:last-child {\n      margin-bottom: 0;\n    }\n    .info strong {\n      color: #fff;\n      font-weight: 600;\n    }\n    @keyframes spin {\n      to { transform: rotate(360deg); }\n    }\n  </style>\n  <script>\n    // Auto-refresh every 3 seconds to check if dev server is ready\n    setTimeout(() => location.reload(), 3000);\n  </script>\n</head>\n<body>\n  <div class=\"container\">\n    <div class=\"spinner\"></div>\n    <h1>Starting Development Server</h1>\n    <p>Please wait while your application starts up...</p>\n    <div class=\"info\">\n      <p><strong>What's happening?</strong></p>\n      <p>The development server is being prepared and will be available shortly.</p>\n      <p>This page will automatically refresh when ready.</p>\n    </div>\n  </div>\n</body>\n</html>";

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
