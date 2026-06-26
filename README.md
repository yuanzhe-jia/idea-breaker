# Idea Breaker

Break through mental blocks and spark unlimited creativity with daily business insights.

## Tech Stack

- **Frontend Framework**: Vanilla JavaScript (ES6+)
- **Build Tool**: Vite 5.x
- **AI Provider**: OpenAI API (gpt-4o-mini default)
- **Fonts**: Plus Jakarta Sans (Google Fonts)
- **Icons**: Custom SVG icons
- **Analytics**: Vercel Analytics (page views, web vitals)

## Quick Start

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Configuration

Create a `.env` file in the project root:

```env
# OpenAI API Configuration
# Get your API key from: https://platform.openai.com/api-keys
VITE_OPENAI_API_KEY=your_openai_api_key_here
VITE_OPENAI_MODEL=gpt-4o-mini
```

## Deployment

Deploy to Vercel to enable analytics and speed insights:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## Project Structure

```
idea-breaker/
├── index.html          # Main entry point
├── src/
│   ├── scripts/
│   │   └── app.js      # Application logic
│   └── styles/
│       └── main.css    # Styles
├── .env                # Environment variables (not in git)
├── .gitignore
├── package.json
└── README.md
```
