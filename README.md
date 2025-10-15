<div align="center">
  <img alt="Prompting Is All You Need" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prompting.jpg-wiD8pePizmHSTO1VERzYJixbI9WIX3.jpeg" width="600">
  
  # Prompting Is All You Need
  
  *An interactive pixel-based pong game with dynamic text collision and audio feedback*
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
  
  [![Open in v0](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-in-v0-button-ZKuXSWof756tbZD6vq9OV8Xq5pZS66.svg)](https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D)
  
  ---
</div>

## 🎮 About

**Prompting Is All You Need** is an innovative interactive experience that combines classic Pong gameplay with dynamic pixel art text rendering. Watch as a ball bounces around the screen, colliding with pixelated text that spells "PROMPTING IS ALL YOU NEED" and four AI-controlled paddles that track the ball's movement.

### Key Highlights

- **Self-Playing Animation**: The game runs automatically with AI-controlled paddles that intelligently track the ball
- **Pixel Art Text**: Custom pixel font rendering that changes color when hit by the ball
- **Audio Feedback**: Dynamic sound effects for different collision types (walls, paddles, text)
- **Theme Support**: Dark/light mode with automatic theme detection
- **Responsive Design**: Scales beautifully across all screen sizes
- **Canvas-Based Rendering**: Smooth 60fps animations using HTML5 Canvas API

## 🎯 How to Use

The game starts automatically when you load the page. Here's what you'll experience:

1. **Automatic Play**: The ball begins bouncing around the screen immediately
2. **AI Paddle Tracking**: Four paddles (top, bottom, left, right) automatically track and follow the ball
3. **Text Collision**: Watch as the ball hits the pixel text, changing the color of individual pixels
4. **Audio Feedback**: Different sounds play for wall bounces, paddle hits, and text collisions
5. **Theme Toggle**: Use the theme toggle button to switch between dark and light modes
6. **Mute Control**: Toggle audio on/off with the mute button

### Controls
- **Theme Toggle**: Click the sun/moon icon to switch themes
- **Mute Toggle**: Click the speaker icon to toggle audio
- **Responsive**: The game automatically adapts to your screen size

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

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

3. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the game in action!

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🛠️ Technology Stack

### Core Framework
- **[Next.js 15.2.4](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://reactjs.org/)** - UI library with hooks
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety and development experience

### Styling & UI
- **[Tailwind CSS 3.4.17](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme switching

### Game Engine & Audio
- **HTML5 Canvas API** - High-performance 2D rendering
- **Web Audio API** - Dynamic sound generation
- **requestAnimationFrame** - Smooth 60fps animations

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Key Dependencies
- `class-variance-authority` - Component variant management
- `clsx` & `tailwind-merge` - Conditional styling utilities
- `react-hook-form` & `zod` - Form handling and validation
- `sonner` - Toast notifications
- `vaul` - Drawer component
- `recharts` - Data visualization

## ✨ Features

### 🎮 Game Mechanics
- **Self-Playing Pong**: AI-controlled paddles that intelligently track the ball
- **Pixel Text Collision**: Custom pixel font that changes color when hit
- **Dynamic Ball Physics**: Realistic bouncing with collision detection
- **Four-Way Paddles**: Paddles on all four screen edges for maximum coverage

### 🎨 Visual Experience
- **Pixel Art Rendering**: Custom 5x5 pixel font for "PROMPTING IS ALL YOU NEED"
- **Theme Support**: Seamless dark/light mode switching
- **Responsive Design**: Scales perfectly across all screen sizes
- **Smooth Animations**: 60fps Canvas-based rendering
- **Visual Feedback**: Pixels change color when hit by the ball

### 🔊 Audio System
- **Dynamic Sound Generation**: Web Audio API creates sounds in real-time
- **Collision-Specific Sounds**: Different tones for walls, paddles, and text
- **Mute Control**: Easy audio toggle functionality
- **No External Audio Files**: All sounds generated programmatically

### 🛠️ Technical Features
- **Canvas-Based Rendering**: High-performance 2D graphics
- **Responsive Scaling**: Uniform scaling maintains game proportions
- **Memory Efficient**: No external assets, everything generated in code
- **TypeScript**: Full type safety throughout the codebase
- **Modern React**: Uses latest React 19 features and hooks

## 🎯 How It Works

The game uses a sophisticated collision detection system that:

1. **Ball Physics**: Tracks ball position and velocity with realistic bouncing
2. **Paddle AI**: Each paddle calculates optimal position to intercept the ball
3. **Pixel Collision**: Individual pixel collision detection with the ball
4. **Audio Synthesis**: Generates different frequencies for different collision types
5. **Theme Integration**: Automatically adapts colors based on current theme

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and test thoroughly
4. **Commit your changes**: `git commit -m 'Add amazing feature'`
5. **Push to the branch**: `git push origin feature/amazing-feature`
6. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style and patterns
- Add TypeScript types for new features
- Test your changes across different screen sizes
- Ensure theme switching works correctly
- Test audio functionality

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Chris Tate** - [@ctatedev](https://x.com/ctatedev)

---

<div align="center">
  <p>Built with ❤️ using Next.js, React, and Canvas API</p>
  <p>
    <a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">View on v0.dev</a> •
    <a href="#-quick-start">Get Started</a> •
    <a href="#-features">Features</a>
  </p>
</div>
