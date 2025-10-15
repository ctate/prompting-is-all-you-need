<a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
  <img alt="Prompting Is All You Need" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prompting.jpg-wiD8pePizmHSTO1VERzYJixbI9WIX3.jpeg">
  <h1 align="center">Prompting Is All You Need</h1>
</a>

<p align="center">
  <strong>An interactive pixel-based pong game with AI-controlled paddles, dynamic animations, and a retro aesthetic</strong>
</p>

<p align="center">
  <a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-in-v0-button-ZKuXSWof756tbZD6vq9OV8Xq5pZS66.svg" alt="Open in v0" width="120" />
  </a>
</p>

---

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#getting-started"><strong>Getting Started</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#how-it-works"><strong>How It Works</strong></a> ·
  <a href="#controls"><strong>Controls</strong></a> ·
  <a href="#author"><strong>Author</strong></a>
</p>

---

## Features

- 🎮 **Self-Playing Game** - Watch as AI-controlled paddles automatically track and hit the ball
- 🎨 **Pixel Art Text** - The title "Prompting Is All You Need" rendered in retro pixel art that reacts to collisions
- 🌓 **Dark/Light Mode** - Seamless theme switching support with next-themes
- 🔊 **Sound Effects** - Dynamic audio feedback for collisions with different tones for walls, paddles, and pixels
- 📱 **Fully Responsive** - Scales beautifully to any screen size while maintaining aspect ratios
- ⚡ **Smooth Animations** - 60 FPS gameplay with requestAnimationFrame
- 🎯 **Collision Detection** - Realistic ball physics with collision detection for walls, paddles, and pixel objects
- 🔇 **Mute Toggle** - Sound control integrated with the UI

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (or npm/yarn)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd prompting-is-all-you-need
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000` to see the game in action

### Build for Production

```bash
pnpm build
pnpm start
```

## Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org) 15.2.4 + React 19
- **Canvas Rendering**: Native Canvas API with TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com) 3.4.17
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes) 0.4.4
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Language**: TypeScript 5
- **Package Manager**: pnpm

## How It Works

### Game Loop
The game runs a continuous animation loop that:
1. **Updates** - Moves the ball, calculates collisions, and updates paddle positions
2. **Detects** - Checks for collisions between the ball and all game objects (walls, paddles, pixels)
3. **Renders** - Redraws all elements on the canvas with theme-aware colors
4. **Sounds** - Plays appropriate sound effects based on collision type

### Canvas Rendering
- Pixel text is pre-rendered on initialization using a pixel map for each letter
- The ball is rendered as a circle with radius scaling
- Paddles are rendered as rectangles positioned on all four sides
- All elements scale responsively based on viewport size

### Responsive Design
When the window is resized:
- Canvas dimensions update to match the new viewport
- All game elements scale uniformly from the center
- Game state is preserved without interruption

### Theme Support
- Light mode: Black elements on white background
- Dark mode: White elements on black background
- Colors update automatically when theme changes

## Controls

- **Auto Play** - The game plays itself! Just load and watch
- **Mute** - Click the mute button in the UI to toggle sound effects
- **Theme Toggle** - Switch between light and dark mode
- **Responsive** - Resize your browser to see the game scale dynamically

## Project Structure

```
├── app/                    # Next.js app directory
├── components/             # React components
│   ├── mute-provider.tsx   # Audio mute state management
│   └── ...                 # Other UI components
├── prompting.tsx           # Main game component
├── styles/                 # Global CSS
├── lib/                    # Utility functions
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## Performance Considerations

- Uses `requestAnimationFrame` for smooth 60 FPS gameplay
- Collision detection optimized with early exit checks
- Canvas rendering performance scales based on viewport
- Audio context created once and reused throughout gameplay
- Refs used for real-time game state to avoid unnecessary re-renders

## Browser Support

Works on all modern browsers that support:
- Canvas API
- Web Audio API
- ES2020+ JavaScript

## Author

Created by [Chris Tate](https://x.com/ctatedev) ([@ctatedev](https://x.com/ctatedev))

---

<p align="center">
  Made with ❤️ using <strong>Next.js</strong> & <strong>Canvas API</strong>
</p>
