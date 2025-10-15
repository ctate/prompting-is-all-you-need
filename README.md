<div align="center">

# 🎮 Prompting Is All You Need

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

*An interactive pixel-based Pong game featuring dynamic text collision and audio feedback*

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Now-green?style=for-the-badge)](https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D)
[![Open in v0](https://img.shields.io/badge/Open_in_v0-Import_Project-orange?style=for-the-badge)](https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D)

</div>

---

## ✨ Overview

**Prompting Is All You Need** is a mesmerizing interactive experience that combines classic Pong gameplay with pixel art text rendering. Watch as a ball bounces around the screen, colliding with pixelated text that spells "PROMPTING IS ALL YOU NEED" and four intelligent paddles that automatically track the ball's movement.

### 🎯 Key Highlights

- **Self-Playing Animation**: Fully automated gameplay with intelligent paddle AI
- **Pixel Art Text**: Custom pixel font rendering with collision detection
- **Audio Feedback**: Dynamic sound effects for different collision types
- **Responsive Design**: Adapts seamlessly to any screen size
- **Smooth Performance**: 60fps animations using Canvas API and requestAnimationFrame

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd prompting-is-all-you-need
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

---

## 🎮 How It Works

### Game Mechanics

- **Automatic Play**: The game runs continuously without user input
- **Smart Paddles**: Four paddles (top, bottom, left, right) automatically track the ball
- **Text Collision**: Ball bounces off pixel text, changing pixel colors on impact
- **Wall Bouncing**: Ball reflects off screen boundaries with audio feedback
- **Responsive Scaling**: Game elements scale proportionally to screen size

### Visual Features

- **Pixel Font**: Custom 5x5 pixel grid font for each letter
- **Color Changes**: Hit pixels change from white to dark gray
- **Smooth Animation**: Fluid 60fps movement using requestAnimationFrame
- **Minimalist Design**: Clean black background with white elements

---

## 🛠️ Technology Stack

### Core Technologies
- **[Next.js 15.2.4](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://reactjs.org/)** - UI library with hooks
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS 3.4.17](https://tailwindcss.com/)** - Utility-first CSS framework

### Key Dependencies
- **Canvas API** - High-performance 2D rendering
- **Web Audio API** - Dynamic sound generation
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **Framer Motion** - Animation utilities

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

---

## 🎨 Features

### 🎯 Core Gameplay
- **Self-Playing Pong**: Automated gameplay with intelligent paddle movement
- **Pixel Text Rendering**: Custom font system with collision detection
- **Dynamic Audio**: Procedural sound effects for different collision types
- **Responsive Scaling**: Adapts to any screen size automatically

### 🎵 Audio System
- **Wall Bounces**: Triangle wave sounds (220Hz)
- **Paddle Hits**: Square wave sounds (330Hz) 
- **Pixel Collisions**: Sine wave sounds (440Hz)
- **Web Audio API**: Real-time sound generation

### 🎨 Visual Design
- **Pixel Art Aesthetic**: 5x5 grid-based font system
- **Color Feedback**: Visual collision indicators
- **Smooth Animations**: 60fps performance
- **Minimalist UI**: Clean black and white design

### 📱 Responsive Features
- **Viewport Adaptation**: Scales to any screen size
- **Touch Friendly**: Works on mobile devices
- **Performance Optimized**: Efficient rendering pipeline

---

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # UI component library
│   └── theme-provider.tsx # Theme context
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
├── prompting.tsx         # Main game component
└── styles/               # Additional styles
```

---

## 🎮 Game Controls

| Action | Description |
|--------|-------------|
| **Automatic** | Game runs automatically - no input required |
| **Resize** | Window resize triggers responsive recalculation |
| **Audio** | Sound effects play on collisions |

---

## 🌐 Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Chris Tate** - [@ctatedev](https://x.com/ctatedev)

---

<div align="center">

**Built with ❤️ using Next.js, React, and Canvas API**

[⬆ Back to Top](#-prompting-is-all-you-need)

</div>
