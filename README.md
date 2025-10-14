<div align="center">

# 🎮 Prompting Is All You Need

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

*An interactive pixel-based Pong game with dynamic text collision and Web Audio API sound effects*

[![Live Demo](https://img.shields.io/badge/Live_Demo-Open_in_Browser-green?style=for-the-badge)](https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D)
[![v0.dev](https://img.shields.io/badge/Open_in_v0.dev-000000?style=for-the-badge&logo=vercel)](https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D)

</div>

---

## 🎯 Overview

**Prompting Is All You Need** is a mesmerizing interactive experience that combines classic Pong gameplay with pixel art text rendering. Watch as a ball bounces around the screen, colliding with pixelated text that changes color on impact, while AI-controlled paddles dynamically track the ball's movement. The experience features procedural sound generation using the Web Audio API, creating an immersive audiovisual spectacle.

### ✨ Key Highlights

- 🎨 **Pixel Art Text Rendering** - Custom pixel font system for "PROMPTING IS ALL YOU NEED"
- 🎵 **Procedural Audio** - Real-time sound generation with Web Audio API
- 🤖 **AI Paddle Movement** - Intelligent paddle tracking and collision detection
- 📱 **Responsive Design** - Adapts seamlessly to any screen size
- ⚡ **60 FPS Animation** - Smooth canvas-based rendering with requestAnimationFrame
- 🎮 **Interactive Physics** - Realistic ball physics with wall and paddle collisions

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

## 🎮 How It Works

The experience is completely **self-playing** - no user interaction required! Here's what happens:

1. **Automatic Start** - The game begins immediately when the page loads
2. **Ball Physics** - A white ball bounces around the screen with realistic physics
3. **AI Paddles** - Four paddles (top, bottom, left, right) intelligently track the ball
4. **Pixel Collision** - When the ball hits pixel text, it changes color and plays a sound
5. **Audio Feedback** - Different sounds for wall bounces, paddle hits, and pixel collisions
6. **Responsive Scaling** - Everything scales perfectly to your screen size

## 🛠️ Technical Stack

### Core Technologies
- **Next.js 15.2.4** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development
- **Tailwind CSS 3.4.17** - Utility-first styling

### Key Dependencies
- **Canvas API** - High-performance 2D rendering
- **Web Audio API** - Procedural sound generation
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Smooth animations

### Audio System
- **Oscillator-based sounds** - Triangle, square, and sine waves
- **Dynamic frequency** - Different pitches for different collision types
- **Gain control** - Smooth audio envelope for natural sound decay

## 🎨 Features

### Visual Features
- **Custom Pixel Font** - Hand-crafted 5x5 pixel characters
- **Dynamic Color Changes** - Pixels change from white to gray when hit
- **Smooth Animations** - 60 FPS canvas rendering
- **Responsive Layout** - Adapts to any screen size
- **Minimalist Design** - Clean black and white aesthetic

### Interactive Features
- **Collision Detection** - Precise ball-to-pixel and ball-to-paddle detection
- **AI Paddle Movement** - Smooth tracking with momentum
- **Wall Bouncing** - Realistic physics with sound feedback
- **Pixel Destruction** - One-time collision per pixel

### Audio Features
- **Procedural Generation** - No audio files, all generated in real-time
- **Contextual Sounds** - Different sounds for different collision types
- **Volume Control** - Automatic gain management
- **Cross-browser Support** - Works on all modern browsers

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   └── ui/               # Radix UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── prompting.tsx         # Main game component
└── public/              # Static assets
```

## 🎯 Development

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

### Key Components

- **`PromptingIsAllYouNeed`** - Main game component with canvas rendering
- **Pixel Map System** - Hand-crafted 5x5 pixel font definitions
- **Audio Context** - Web Audio API integration for procedural sounds
- **Physics Engine** - Custom collision detection and ball movement

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Maintain the minimalist aesthetic
- Test on multiple screen sizes
- Ensure audio works across browsers
- Keep performance optimized for 60 FPS

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Chris Tate** - [@ctatedev](https://x.com/ctatedev)

---

<div align="center">

**Built with ❤️ using Next.js, React, and Canvas API**

[⭐ Star this repo](https://github.com/your-username/prompting-is-all-you-need) if you found it helpful!

</div>
