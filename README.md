<div align="center">
  <a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
    <img alt="Prompting Is All You Need" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prompting.jpg-wiD8pePizmHSTO1VERzYJixbI9WIX3.jpeg" width="600">
  </a>
  
  <h1>🎮 Prompting Is All You Need</h1>
  
  <p>
    <strong>An interactive pixel-based Pong game with dynamic text collision and Web Audio API</strong>
  </p>
  
  <p>
    <a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
      <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-in-v0-button-ZKuXSWof756tbZD6vq9OV8Xq5pZS66.svg" alt="Open in v0" width="120" />
    </a>
  </p>
  
  <p>
    <a href="#-about">About</a> •
    <a href="#-features">Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-installation">Installation</a> •
    <a href="#-usage">Usage</a> •
    <a href="#-development">Development</a>
  </p>
</div>

---

## 📖 About

**Prompting Is All You Need** is an innovative interactive experience that combines classic Pong gameplay with dynamic pixel text rendering. The game features a self-playing animation where a ball bounces around the screen, colliding with pixel-rendered text and intelligent paddles that automatically track the ball's movement.

### Key Highlights
- 🎯 **Self-playing Pong game** with intelligent paddle AI
- 🎨 **Pixel-perfect text rendering** with collision detection
- 🔊 **Web Audio API integration** for immersive sound effects
- 📱 **Fully responsive design** that adapts to any screen size
- ⚡ **High-performance Canvas rendering** with 60fps animations

## ✨ Features

### 🎮 Gameplay
- **Self-playing Pong mechanics** with intelligent paddle AI that tracks ball movement
- **Dynamic pixel text collision** - "PROMPTING IS ALL YOU NEED" text reacts to ball hits
- **Real-time collision detection** with precise physics calculations
- **Smooth 60fps animations** using `requestAnimationFrame`

### 🎨 Visual Design
- **Pixel-perfect text rendering** with custom font mapping
- **Minimalist black & white aesthetic** with clean visual hierarchy
- **Responsive scaling** that adapts to any screen size
- **Dynamic color changes** when pixels are hit by the ball

### 🔊 Audio Experience
- **Web Audio API integration** for immersive sound effects
- **Dynamic sound generation** with different tones for different collision types
- **Contextual audio feedback** for wall bounces, paddle hits, and pixel collisions

### 📱 Technical Excellence
- **Full-screen Canvas rendering** with optimal performance
- **Cross-browser compatibility** with modern web standards
- **Mobile-responsive design** that works on all devices
- **TypeScript implementation** for type safety and better development experience

## 🛠 Tech Stack

### Frontend Framework
- **Next.js 15.2.4** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development

### UI & Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **next-themes** - Theme management

### Game Engine & Graphics
- **HTML5 Canvas API** - High-performance 2D rendering
- **Web Audio API** - Dynamic sound generation
- **Custom pixel font system** - Hand-crafted character mapping

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **pnpm** - Fast package management

## 🚀 Installation

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd prompting-is-all-you-need
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Usage

The game starts automatically when you load the page. Here's what you'll experience:

1. **Automatic Gameplay** - The ball begins bouncing around the screen
2. **Intelligent Paddles** - Four paddles automatically track and follow the ball
3. **Text Interaction** - The ball collides with the pixel text, changing its color
4. **Audio Feedback** - Different sounds play for different types of collisions
5. **Responsive Design** - The game adapts to your screen size automatically

### Controls
- **No manual controls needed** - The game is fully automated
- **Responsive** - Resize your browser window to see adaptive scaling
- **Audio** - Sound effects play automatically (ensure your browser allows audio)

## 🛠 Development

### Project Structure
```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── theme-provider.tsx # Theme context
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── prompting.tsx         # Main game component
└── public/               # Static assets
```

### Key Components

- **`PromptingIsAllYouNeed`** - Main game component with Canvas rendering
- **Pixel mapping system** - Custom font character definitions
- **Audio context management** - Web Audio API integration
- **Responsive scaling** - Dynamic canvas sizing

### Development Scripts

```bash
# Development server
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

### Customization

The game is highly customizable through constants at the top of `prompting.tsx`:

- **Colors** - Background, text, ball, and paddle colors
- **Sizing** - Pixel sizes, spacing, and scaling factors
- **Audio** - Sound frequencies, durations, and wave types
- **Physics** - Ball speed, paddle tracking, and collision behavior

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes** and test thoroughly
4. **Commit your changes** (`git commit -m 'Add amazing feature'`)
5. **Push to the branch** (`git push origin feature/amazing-feature`)
6. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Maintain responsive design principles
- Test on multiple screen sizes
- Ensure audio works across browsers
- Keep the minimalist aesthetic

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Chris Tate** - [@ctatedev](https://x.com/ctatedev)

---

<div align="center">
  <p>Built with ❤️ using Next.js, React, and Canvas API</p>
  <p>
    <a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">View on v0.dev</a> •
    <a href="#-installation">Get Started</a> •
    <a href="#-development">Contribute</a>
  </p>
</div>
