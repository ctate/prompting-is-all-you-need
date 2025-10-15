<a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
  <img alt="Prompting Is All You Need" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prompting.jpg-wiD8pePizmHSTO1VERzYJixbI9WIX3.jpeg">
  <h1 align="center">Prompting Is All You Need</h1>
</a>

<p align="center">
  An interactive pixel-based pong game built with React, Canvas API, and Next.js.
</p>

<p align="center">
  <a href="https://v0.dev/community/prompting-is-all-you-need-tokU2y8gQ4D">
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/open-in-v0-button-ZKuXSWof756tbZD6vq9OV8Xq5pZS66.svg" alt="Open in v0" width="120" />
  </a>
</p>

<p align="center">
  <a href="#about"><strong>About</strong></a> ·
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#getting-started"><strong>Getting Started</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#how-to-use"><strong>How to Use</strong></a> ·
  <a href="#author"><strong>Author</strong></a>
</p>
<br/>

## About

Prompting Is All You Need is an interactive pixel-based pong game that features a self-playing animation where a ball bounces around the screen, hitting pixel text and paddles. Built entirely through AI-assisted development, this project demonstrates the power of modern prompting techniques in creating engaging, visually dynamic web experiences.

The game showcases smooth canvas-based animations, realistic physics, and responsive design—all wrapped in a minimalist black and white aesthetic.

## Features

- **Self-Playing Animation** - Watch as the ball autonomously bounces around the screen
- **Interactive Pixel Text** - Text rendered as pixels that react to ball collisions with color changes
- **Smart Paddle AI** - Paddles automatically track and follow the ball movement
- **Smooth Physics** - Realistic collision detection and ball movement
- **Responsive Design** - Adapts seamlessly to different screen sizes and viewports
- **Canvas-Based Rendering** - High-performance animations using HTML5 Canvas API
- **Minimalist Aesthetic** - Clean black and white design with dynamic visual feedback

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm package manager

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

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm run start
```

## Tech Stack

### Core Technologies
- **[Next.js 15.2.4](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first styling

### UI Components & Libraries
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Tailwind Animate](https://github.com/jamiebuilds/tailwindcss-animate)** - Animation utilities
- **[class-variance-authority](https://cva.style/)** - Component variant management

### Animation & Graphics
- **HTML5 Canvas API** - High-performance 2D rendering
- **requestAnimationFrame** - Smooth 60fps animations
- **Custom collision detection** - Physics-based ball and paddle interactions

## How to Use

The game runs automatically when you load the page:

1. **Watch the Animation** - The ball will begin bouncing around the screen immediately
2. **Observe the Physics** - Notice how the ball interacts with paddles and pixel text
3. **See Color Changes** - Pixels change color when struck by the ball
4. **Responsive Viewing** - Resize your browser to see the canvas adapt to different dimensions

No user interaction is required—just sit back and enjoy the mesmerizing pixel pong animation!

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main game component
│   └── layout.tsx         # Root layout
├── components/            # React components
│   └── ui/               # Reusable UI components
├── lib/                  # Utility functions
├── public/               # Static assets
└── package.json          # Project dependencies
```

## Development

This project was built using [v0.dev](https://v0.dev/), an AI-powered interface design and development tool. It demonstrates how modern AI prompting can accelerate the development of interactive web applications.

## Author

Created by **Chris Tate** ([@ctatedev](https://x.com/ctatedev))

## License

This project is open source and available under the MIT License.

---

<p align="center">
  Built with v0 by Vercel
</p>
