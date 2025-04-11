# STAR Narratives

A personal reference site for managing and reviewing STAR (Situation, Task,
Action, Result) narratives for job interviews. Built with SvelteKit and Tailwind
CSS.

## Features

- 📝 Browse and filter STAR narratives by tags
- 🔍 Quick summary view for rapid review
- 📄 Detailed view for comprehensive narrative information
- 📱 Responsive design for all devices
- ⚡ Static site generation for optimal performance

## Development

First, install the dependencies:

```bash
npm install
```

Then, start the development server:

```bash
npm run dev
```

The site will be available at http://localhost:5173.

## Adding New Narratives

Create new narrative files in `src/lib/narratives` using the following format:

```yaml
---
title: 'Your Narrative Title'
tags: ['Tag1', 'Tag2', 'Tag3']
situation: 'Full situation description...'
task: 'Full task description...'
action: 'Full action description...'
result: 'Full result description...'
short_summary_situation: 'Brief situation...'
short_summary_task: 'Brief task...'
short_summary_action: 'Brief action...'
short_summary_result: 'Brief result...'
published: true
date: YYYY-MM-DD
---
```

## Building for Production

To create a production build:

```bash
npm run build
```

The static site will be generated in the `build` directory, ready for deployment
to any static hosting service.

## Technology Stack

- [SvelteKit](https://kit.svelte.dev/) - Web framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [adapter-static](https://kit.svelte.dev/docs/adapter-static) - Static site
  generation

## License

The MIT License

Copyright 2025 Travis Horn

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the “Software”), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
