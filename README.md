<div align="center">

# Prompting Is All You Need

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

*An interactive pixel-based Pong game with dynamic text collision and audio feedback*

[![Live Demo](https://img.shields.io/badge/Live_Demo-Play_Now-green?style=for-the-badge&logo=vercel)](https://prompting-is-all-you-need.vercel.app)
[![Open in v0](https://img.shields.io/badge/Open_in_v0-View_Code-purple?style=for-the-badge)](https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D)

</div>

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Quick Start](#quick-start)
- [Tech Stack](#tech-stack)
- [How It Works](#how-it-works)
- [Demo](#demo)
- [Development](#development)
- [License](#license)
- [Author](#author)

---

## About

**Prompting Is All You Need** is an innovative interactive experience that combines the classic Pong game with dynamic pixel art text rendering. Watch as a ball bounces around the screen, colliding with pixelated text that changes color on impact, while AI-controlled paddles track the ball's movement in real-time.

This project demonstrates advanced Canvas API techniques, real-time collision detection, procedural audio generation, and responsive design principles. It's built as a showcase of modern web development capabilities using React, Next.js, and TypeScript.

## Features

### Core Gameplay
- **Self-Playing Animation**: Fully automated Pong gameplay with intelligent paddle AI
- **Dynamic Text Collision**: Pixel text that reacts to ball impacts with visual feedback
- **Real-Time Audio**: Procedural sound effects generated using Web Audio API
- **Responsive Design**: Adapts seamlessly to any screen size or device

### Visual Experience
- **Pixel Art Rendering**: Custom pixel-based text rendering system
- **Smooth Animations**: 60fps animations using `requestAnimationFrame`
- **Minimalist Aesthetic**: Clean black and white design with subtle color changes
- **Fullscreen Canvas**: Immersive full-viewport gaming experience

### Technical Features
- **TypeScript**: Fully typed codebase for better development experience
- **Canvas API**: High-performance 2D rendering
- **Collision Detection**: Precise pixel-perfect collision system
- **Audio Synthesis**: Real-time audio generation without external files
- **Responsive Scaling**: Dynamic scaling based on viewport dimensions

## Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/prompting-is-all-you-need.git
   cd prompting-is-all-you-need
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## Tech Stack

### Core Framework
- **[Next.js 15.2.4](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://reactjs.org/)** - UI library with latest features
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & UI
- **[Tailwind CSS 3.4.17](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - CSS vendor prefixing

### Key Dependencies
- **Canvas API** - 2D graphics rendering
- **Web Audio API** - Real-time audio synthesis
- **React Hooks** - State management and lifecycle
- **Class Variance Authority** - Component variant management

## How It Works

### Game Engine
The game uses a custom game loop built on `requestAnimationFrame` for smooth 60fps animations:

1. **Initialization**: Sets up canvas, pixel text, ball, and paddles
2. **Update Loop**: Handles physics, collision detection, and AI paddle movement
3. **Render Loop**: Draws all game elements to the canvas
4. **Audio System**: Generates procedural sound effects for collisions

### Pixel Text System
- **Character Mapping**: Each letter is defined as a 2D pixel array
- **Dynamic Rendering**: Text is rendered pixel-by-pixel on the canvas
- **Collision Detection**: Individual pixels can be hit and change color
- **Responsive Scaling**: Text scales based on viewport size

### AI Paddle System
- **Predictive Movement**: Paddles predict ball trajectory
- **Smooth Following**: Gradual movement interpolation for natural motion
- **Boundary Constraints**: Paddles stay within screen bounds
- **Multi-Directional**: Supports both vertical and horizontal paddles

## Demo

### Live Demo
**[Play the game live](https://prompting-is-all-you-need.vercel.app)**

### Screenshots
*The game features a minimalist design with pixel text that reacts to ball collisions*

## Development

### Project Structure
```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   └── ui/               # Reusable UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── prompting.tsx         # Main game component
```

### Available Scripts
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Chris Tate** - [@ctatedev](https://x.com/ctatedev)

---

<div align="center">

**Star this repository if you found it helpful!**

[![GitHub stars](https://img.shields.io/github/stars/your-username/prompting-is-all-you-need?style=social)](https://github.com/your-username/prompting-is-all-you-need)
[![GitHub forks](https://img.shields.io/github/forks/your-username/prompting-is-all-you-need?style=social)](https://github.com/your-username/prompting-is-all-you-need/fork)

</div>
