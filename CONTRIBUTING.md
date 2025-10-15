# Contributing to Prompting Is All You Need

Thank you for your interest in contributing to this project! We welcome contributions from the community.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)

## Code of Conduct

This project and everyone participating in it is expected to uphold a respectful and collaborative environment. Please be kind and constructive in all interactions.

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/prompting-is-all-you-need.git
   cd prompting-is-all-you-need
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## How to Contribute

There are many ways to contribute to this project:

- **Bug Reports**: Submit detailed bug reports with reproduction steps
- **Feature Requests**: Suggest new features or improvements
- **Code Contributions**: Fix bugs, add features, or improve documentation
- **Documentation**: Improve README, add code comments, or write guides
- **Testing**: Add or improve test coverage
- **Design**: Suggest UI/UX improvements or visual enhancements

## Development Workflow

1. **Start the development server**:
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000)

2. **Make your changes**: Edit the code in your preferred editor

3. **Test your changes**: Ensure the application works as expected

4. **Lint your code**:
   ```bash
   npm run lint
   ```

5. **Build the project**:
   ```bash
   npm run build
   ```

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Provide proper type annotations
- Avoid using `any` types when possible
- Use interfaces for object shapes

### React

- Use functional components with hooks
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks
- Use proper prop typing

### Styling

- Use Tailwind CSS utility classes
- Follow the existing styling patterns
- Ensure responsive design works on all screen sizes
- Maintain the minimalist aesthetic

### File Organization

- Place React components in the `components/` directory
- Use the `app/` directory for Next.js pages and layouts
- Keep utility functions in the `lib/` directory
- Name files using kebab-case (e.g., `my-component.tsx`)

## Commit Guidelines

Write clear, descriptive commit messages following these conventions:

### Format

```
<type>: <subject>

<body (optional)>
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring without changing functionality
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks, dependency updates

### Examples

```
feat: add sound effects to ball collisions

fix: correct paddle collision detection on mobile devices

docs: update installation instructions in README

refactor: extract canvas rendering logic into separate module
```

## Pull Request Process

1. **Update your branch** with the latest changes from main:
   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. **Push your changes** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create a Pull Request** from your fork to the main repository

4. **Fill out the PR template** with:
   - Clear description of the changes
   - Motivation and context
   - Screenshots or videos (for UI changes)
   - Testing steps
   - Related issues

5. **Wait for review**: Maintainers will review your PR and may request changes

6. **Address feedback**: Make requested changes and push updates

7. **Merge**: Once approved, your PR will be merged

### PR Checklist

Before submitting a pull request, ensure:

- [ ] Code follows the project's coding standards
- [ ] All tests pass (if applicable)
- [ ] Lint checks pass (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] Documentation is updated (if needed)
- [ ] Commit messages follow the guidelines
- [ ] PR description clearly explains the changes

## Reporting Bugs

When reporting bugs, please include:

1. **Description**: Clear description of the bug
2. **Steps to Reproduce**: Detailed steps to reproduce the issue
3. **Expected Behavior**: What you expected to happen
4. **Actual Behavior**: What actually happened
5. **Screenshots/Videos**: Visual evidence (if applicable)
6. **Environment**:
   - Browser and version
   - Operating system
   - Node.js version
   - Screen resolution (for UI bugs)

## Suggesting Enhancements

When suggesting features or improvements:

1. **Use Case**: Describe the problem you're trying to solve
2. **Proposed Solution**: Your suggested approach
3. **Alternatives**: Other solutions you've considered
4. **Additional Context**: Screenshots, mockups, or examples

## Questions?

If you have questions about contributing, feel free to:

- Open an issue with your question
- Reach out to the maintainer: [@ctatedev](https://x.com/ctatedev)

## License

By contributing, you agree that your contributions will be licensed under the same MIT License that covers the project.

---

Thank you for contributing to Prompting Is All You Need!
