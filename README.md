<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Canvas API](https://img.shields.io/badge/Canvas_API-FF6B35?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

<a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
  <img alt="Prompting Is All You Need" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prompting.jpg-wiD8pePizmHSTO1VERzYJixbI9WIX3.jpeg" width="600" style="border-radius: 10px;">
  <h1 align="center">Prompting Is All You Need</h1>
</a>

<p align="center">
  An interactive pixel-based Pong game where a ball bounces through the phrase "PROMPTING IS ALL YOU NEED", creating dynamic visual effects with sound and responsive design.
</p>

<p align="center">
  <a href="#demo">🎮 Live Demo</a> •
  <a href="#installation">📦 Installation</a> •
  <a href="#features">✨ Features</a> •
  <a href="#tech-stack">🛠️ Tech Stack</a>
</p>

<p align="center">
  <a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-in-v0-button-ZKuXSWof756tbZD6vq9OV8Xq5pZS66.svg" alt="Open in v0" width="120" />
  </a>
</p>

</div>

---

<p align="center">
  <a href="#about"><strong>About</strong></a> ·
  <a href="#demo"><strong>Demo</strong></a> ·
  <a href="#installation"><strong>Installation</strong></a> ·
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#implementation"><strong>Implementation</strong></a> ·
  <a href="#contributing"><strong>Contributing</strong></a>
</p>

## 📖 About

**Prompting Is All You Need** is an interactive pixel-based Pong game that transforms the famous phrase "PROMPTING IS ALL YOU NEED" into a dynamic, playable experience. The game features a self-playing animation where a ball bounces around the screen, colliding with pixelated text and responsive paddles.

Built with modern web technologies, this project demonstrates advanced Canvas API usage, real-time physics simulation, and responsive design principles. Each pixel collision creates visual feedback, while procedurally generated sound effects enhance the immersive experience.

## 🎮 Demo

Experience the interactive pixel Pong game live:

**[🚀 View Live Demo](https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D)**

### How to Use

1. **Load the page** - The animation starts automatically
2. **Watch the ball** bounce around the screen, hitting pixel text
3. **Observe the paddles** automatically track and follow the ball
4. **Notice color changes** - Pixels change color when hit by the ball
5. **Toggle features** - Use the theme and mute controls in the top-right corner
6. **Resize your browser** - The game adapts to different screen sizes

## 📦 Installation

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Setup

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

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the game in action.

### Build for Production

```bash
npm run build
npm run start
```

## ✨ Features

### 🎯 Core Gameplay
- **Self-playing Pong** - Watch as the ball bounces autonomously around the screen
- **Pixel Text Interaction** - Each letter pixel responds to ball collisions with visual feedback
- **Smart Paddles** - Four paddles (top, bottom, left, right) automatically track the ball
- **Physics Simulation** - Realistic collision detection and bounce mechanics

### 🎨 Visual Experience
- **Dynamic Pixel Rendering** - Custom pixel font system for crisp, retro aesthetics
- **Theme Support** - Toggle between dark and light modes
- **Responsive Design** - Adapts seamlessly to any screen size
- **Smooth Animations** - 60fps rendering with `requestAnimationFrame`

### 🔊 Audio Experience
- **Procedural Sound Effects** - Generated tones for collisions (walls, paddles, pixels)
- **Mute Control** - Toggle audio on/off with a single click
- **Contextual Audio** - Different sounds for different collision types

### ⚡ Performance
- **Optimized Rendering** - Efficient Canvas API usage
- **Memory Management** - Proper cleanup and resource management
- **Scalable Architecture** - Responsive to viewport changes

## 🛠️ Tech Stack

### Frontend Framework
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://reactjs.org/)** - UI library with modern features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide Icons](https://lucide.dev/)** - Beautiful icon library

### Game Engine
- **Canvas API** - Hardware-accelerated 2D graphics rendering
- **Web Audio API** - Procedural sound generation
- **requestAnimationFrame** - Smooth 60fps animations

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🔧 Implementation Details

### Pixel Text Rendering

The game uses a custom pixel font system where each letter is defined as a 2D array of pixels:

```typescript
// Example letter definition
const PIXEL_MAP = {
  P: [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
  ],
  // ... other letters
}
```

### Physics Simulation

- **Collision Detection**: Axis-aligned bounding box (AABB) collision
- **Bounce Mechanics**: Velocity inversion on collision
- **Paddle AI**: Smooth interpolation towards ball position
- **Responsive Scaling**: All elements scale with viewport size

### Audio Generation

Sound effects are procedurally generated using the Web Audio API:

```typescript
// Generate collision sound
const playSound = (frequency: number, duration: number, type: OscillatorType) => {
  const oscillator = audioContext.createOscillator()
  const gainNode = audioContext.createGain()

  oscillator.frequency.value = frequency
  oscillator.type = type
  // ... connect and play
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Guidelines

1. **Code Style** - Follow the existing TypeScript and React patterns
2. **Testing** - Test across different browsers and screen sizes
3. **Performance** - Ensure smooth 60fps performance on target devices
4. **Accessibility** - Maintain proper ARIA labels and keyboard navigation

### Running in Development

```bash
npm run dev
```

The development server supports hot reloading for quick iteration.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by classic Pong games and pixel art aesthetics
- Built with modern web technologies for optimal performance
- Special thanks to the Next.js and React communities

## 👨‍💻 Author

**Chris Tate** ([@ctatedev](https://x.com/ctatedev))

---

<div align="center">
  <p><em>Built with ❤️ using Next.js, React, and the Canvas API</em></p>
  <p>
    <a href="#">🔝 Back to Top</a>
  </p>
</div>
