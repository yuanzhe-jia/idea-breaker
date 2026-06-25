# Idea Breaker

Break through mental blocks and spark unlimited creativity with daily business insights.

## Tech Stack

- **Frontend Framework**: Vanilla JavaScript (ES6+)
- **Build Tool**: Vite 5.x
- **AI Provider**: Doubao API (ByteDance)
- **Fonts**: Plus Jakarta Sans (Google Fonts)
- **Icons**: Custom SVG icons

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
# Doubao API Configuration
# Get your API key from: https://console.volcengine.com/ark
VITE_DOUBAO_API_KEY=your_doubao_api_key_here
VITE_DOUBAO_MODEL=ep-202410xxxxx-xxxxx
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
├── .env.example        # Environment variables template
├── .gitignore
├── package.json
└── README.md
```
