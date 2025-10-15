<a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
  <img alt="Prompting Is All You Need" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prompting.jpg-wiD8pePizmHSTO1VERzYJixbI9WIX3.jpeg">
  <h1 align="center">Prompting Is All You Need</h1>
</a>

<p align="center">
  An interactive pixel-based pong game built with React, Canvas API, and Next.js
</p>

<p align="center">
  <a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-in-v0-button-ZKuXSWof756tbZD6vq9OV8Xq5pZS66.svg" alt="Open in v0" width="120" />
  </a>
</p>

<p align="center">
  <a href="#-about"><strong>About</strong></a> ·
  <a href="#-features"><strong>Features</strong></a> ·
  <a href="#%EF%B8%8F-getting-started"><strong>Getting Started</strong></a> ·
  <a href="#-tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#-author"><strong>Author</strong></a>
</p>

<br/>

## 📖 About

**Prompting Is All You Need** is a mesmerizing self-playing pong game that demonstrates the power of creative coding and animation. Watch as a ball bounces around the screen, interacting with pixel-rendered text and AI-controlled paddles in a hypnotic display of physics and motion.

This project showcases how simple prompts can create complex, engaging visual experiences through modern web technologies.

## ✨ Features

- **Self-Playing Animation** - Fully autonomous gameplay with no user input required
- **Pixel Text Rendering** - Custom pixel-based text that reacts to ball collisions
- **Intelligent Paddle AI** - Paddles automatically track and follow the ball's trajectory
- **Dynamic Color Effects** - Pixels change color when struck by the ball
- **Collision Detection** - Realistic physics with precise collision detection
- **Fully Responsive** - Adapts seamlessly to any screen size or viewport
- **Smooth Performance** - 60 FPS animations using requestAnimationFrame
- **Minimalist Design** - Clean black and white aesthetic

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd prompting-is-all-you-need
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## 🛠️ Tech Stack

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **Canvas API** - HTML5 canvas for rendering
- **requestAnimationFrame** - Smooth 60 FPS animations

### UI Components

- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable components built with Radix UI
- **[Lucide Icons](https://lucide.dev/)** - Icon library

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main game page
├── components/
│   ├── ui/              # Reusable UI components
│   └── theme-provider.tsx
├── lib/
│   └── utils.ts         # Utility functions
├── hooks/               # Custom React hooks
└── prompting.tsx        # Main game component
```

## 🎮 How It Works

The game uses the HTML5 Canvas API to render a pixel-based environment where:

1. A ball bounces around the canvas with realistic physics
2. Pixel text is rendered character-by-character from a custom pixel font
3. Paddles track the ball's Y position and move to intercept it
4. Collision detection changes pixel colors on impact
5. The entire scene scales responsively to fit any viewport

## 👤 Author

Created by **Chris Tate** ([@ctatedev](https://x.com/ctatedev))

## 📄 License

This project is open source and available under the MIT License.

---

<p align="center">
  Made with v0 by Vercel
</p>
