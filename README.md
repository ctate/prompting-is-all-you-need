<div align="center">
  <a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
    <img alt="Prompting Is All You Need" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prompting.jpg-wiD8pePizmHSTO1VERzYJixbI9WIX3.jpeg" width="600">
  </a>
  
  <h1>🎮 Prompting Is All You Need</h1>
  
  <p>
    <strong>An interactive pixel-based Pong game with dynamic text collision and Web Audio API sound effects</strong>
  </p>
  
  <p>
    <a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
      <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-in-v0-button-ZKuXSWof756tbZD6vq9OV8Xq5pZS66.svg" alt="Open in v0" width="120" />
    </a>
  </p>
  
  <p>
    <a href="#-about">About</a> •
    <a href="#-demo">Demo</a> •
    <a href="#-features">Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-installation">Installation</a> •
    <a href="#-development">Development</a>
  </p>
</div>

---

## 📖 About

**Prompting Is All You Need** is an innovative interactive experience that combines classic Pong gameplay with modern web technologies. The game features a self-playing animation where a ball bounces around the screen, colliding with pixel-rendered text and intelligent paddles that automatically track the ball's movement.

The project showcases advanced Canvas API usage, real-time collision detection, Web Audio API integration for dynamic sound effects, and responsive design principles. It's built as a demonstration of how modern web technologies can create engaging, interactive experiences.

## 🎯 Demo

The game runs automatically when you load the page. Watch as:
- A white ball bounces around the screen with realistic physics
- Four paddles intelligently track and follow the ball's movement
- Pixel text "PROMPTING IS ALL YOU NEED" reacts to ball collisions
- Dynamic sound effects play on each collision using Web Audio API
- The entire experience adapts seamlessly to any screen size

## ✨ Features

### 🎮 Gameplay
- **Self-playing Pong game** with intelligent paddle AI
- **Real-time collision detection** between ball, paddles, and pixel text
- **Dynamic physics** with realistic ball movement and bouncing
- **Responsive design** that works on desktop, tablet, and mobile devices

### 🎨 Visual Design
- **Pixel-perfect text rendering** using custom pixel maps
- **Minimalist black and white aesthetic** with clean, modern design
- **Smooth animations** powered by `requestAnimationFrame`
- **Dynamic color changes** when pixels are hit by the ball

### 🔊 Audio Experience
- **Web Audio API integration** for real-time sound generation
- **Dynamic sound effects** that respond to different collision types:
  - Wall bounces (triangle wave, 220Hz)
  - Paddle hits (square wave, 330Hz)
  - Pixel collisions (sine wave, 440Hz)
- **Procedural audio** generated without external sound files

### 🛠️ Technical Features
- **Canvas API** for high-performance 2D rendering
- **TypeScript** for type safety and better development experience
- **React hooks** for state management and lifecycle handling
- **Responsive scaling** that maintains aspect ratios across devices
- **Memory efficient** with optimized rendering loops

## 🚀 Tech Stack

### Core Technologies
- **Next.js 15.2.4** - React framework with App Router
- **React 19** - UI library with latest features
- **TypeScript 5** - Type-safe JavaScript
- **Canvas API** - 2D graphics rendering

### UI & Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **next-themes** - Theme management

### Audio & Animation
- **Web Audio API** - Real-time audio synthesis
- **requestAnimationFrame** - Smooth 60fps animations
- **Custom physics engine** - Ball movement and collision detection

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Setup
```bash
# Clone the repository
git clone <repository-url>
cd my-v0-project

# Install dependencies
pnpm install
# or
npm install

# Start development server
pnpm dev
# or
npm run dev
```

### Build for Production
```bash
# Build the application
pnpm build
# or
npm run build

# Start production server
pnpm start
# or
npm start
```

## 🛠️ Development

### Project Structure
```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   └── ui/               # UI component library
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── prompting.tsx         # Main game component
└── public/               # Static assets
```

### Key Components
- **`PromptingIsAllYouNeed`** - Main game component with Canvas rendering
- **Pixel Map System** - Custom pixel font rendering for text
- **Physics Engine** - Ball movement and collision detection
- **Audio System** - Web Audio API integration for sound effects

### Customization
The game can be easily customized by modifying constants in `prompting.tsx`:
- Colors and visual styling
- Ball speed and physics parameters
- Sound frequencies and durations
- Pixel text content and layout

### Performance
- Optimized rendering loop with 60fps target
- Efficient collision detection algorithms
- Memory-conscious pixel management
- Responsive scaling without performance loss

---

<div align="center">
  <p>
    <strong>Built with ❤️ by <a href="https://x.com/ctatedev">Chris Tate</a></strong>
  </p>
  <p>
    <a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">View on v0.dev</a> •
    <a href="#-installation">Get Started</a>
  </p>
</div>
