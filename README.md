<a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
  <img alt="Prompting Is All You Need" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prompting.jpg-wiD8pePizmHSTO1VERzYJixbI9WIX3.jpeg">
  <h1 align="center">Prompting Is All You Need</h1>
</a>

<p align="center">
  <strong>A mesmerizing self-playing pong game featuring interactive pixel art text and dynamic sound effects</strong>
</p>

<p align="center">
  <a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-in-v0-button-ZKuXSWof756tbZD6vq9OV8Xq5pZS66.svg" alt="Open in v0" width="120" />
  </a>
</p>

<p align="center">
  <a href="#-about"><strong>About</strong></a> ·
  <a href="#-features"><strong>Features</strong></a> ·
  <a href="#-getting-started"><strong>Getting Started</strong></a> ·
  <a href="#-tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#-how-it-works"><strong>How It Works</strong></a> ·
  <a href="#-author"><strong>Author</strong></a>
</p>
<br/>

## 🎮 About

**Prompting Is All You Need** is an interactive pixel-based pong game that showcases the power of creative coding and dynamic animations. Watch as a ball bounces around the screen, interacting with custom pixel-rendered text and intelligent AI paddles that track its every move. The game features retro-style sound effects and a minimalist black-and-white aesthetic that creates a captivating visual experience.

This project demonstrates advanced Canvas API techniques, real-time collision detection, and responsive design principles—all wrapped in a modern React + Next.js application.

## ✨ Features

### 🎨 Visual Design
- **Custom Pixel Font Rendering** - Text rendered from scratch using pixel matrices for authentic retro look
- **Dynamic Color Changes** - Pixels change color when struck by the ball, creating visual feedback
- **Responsive Scaling** - Automatically adapts to any screen size while maintaining proportions
- **Minimalist Aesthetic** - Clean black and white design inspired by classic arcade games

### 🎵 Audio Experience
- **Procedural Sound Effects** - Real-time audio generation using Web Audio API
- **Context-Aware Sounds** - Different sounds for wall bounces, paddle hits, and pixel collisions
- **Oscillator-Based Synthesis** - Pure sine, triangle, and square waves create distinct tones

### 🤖 Intelligent Gameplay
- **Self-Playing Mode** - Four AI paddles automatically track and respond to the ball
- **Smooth Paddle Movement** - Easing functions create natural, fluid motion
- **Advanced Collision Detection** - Precise pixel-level collision with physics-based bounce direction
- **Multi-Directional Paddles** - Both vertical and horizontal paddles create complex ball trajectories

### 🔧 Technical Excellence
- **Performance Optimized** - 60 FPS animation using `requestAnimationFrame`
- **TypeScript Support** - Fully typed for better developer experience
- **React Hooks** - Modern React patterns with `useRef` and `useEffect`
- **Client-Side Rendering** - Optimized for browser performance

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- pnpm package manager (or npm/yarn)

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
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the game in action!

### Building for Production

```bash
pnpm build
pnpm start
```

## 🛠️ Tech Stack

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library with modern hooks
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)** - 2D graphics rendering
- **[Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)** - Real-time audio synthesis
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautifully designed components

## 🎯 How It Works

### Pixel Text Rendering

The text "PROMPTING IS ALL YOU NEED" is rendered using custom pixel matrices defined for each letter. The system:
- Maps each character to a 2D array representing its pixel structure
- Scales pixels based on viewport size for responsiveness
- Calculates precise positioning for centered, visually balanced text
- Tracks collision state for each individual pixel

### Collision Detection

The game implements precise collision detection:
- **Ball-Wall Collisions** - Reverses velocity when hitting screen edges
- **Ball-Paddle Collisions** - Bounces ball based on paddle orientation
- **Ball-Pixel Collisions** - Determines bounce direction based on impact angle
- **Sound Triggers** - Each collision type triggers a unique sound effect

### Paddle AI

The four paddles use a simple but effective AI algorithm:
- Calculate target position based on ball's current location
- Apply smooth easing (10% interpolation) for natural movement
- Clamp position to prevent moving off-screen
- Update independently each frame for responsive tracking

### Performance Optimization

- Uses `useRef` to store game state without triggering re-renders
- Single `useEffect` hook manages entire game lifecycle
- Canvas operations batched in single animation frame
- Audio context created once and reused for all sound effects

## 📝 Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── ui/                  # shadcn/ui components
│   └── theme-provider.tsx   # Theme configuration
├── prompting.tsx            # Main game component
├── package.json             # Dependencies
└── README.md               # This file
```

## 👨‍💻 Author

**Chris Tate**
- Twitter/X: [@ctatedev](https://x.com/ctatedev)

## 📄 License

This project is open source and available for educational and personal use.

---

<p align="center">
  Made with ❤️ using React, Canvas API, and Next.js
</p>
