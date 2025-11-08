# 2025 Investment Calendar

A professional investment calendar application for tracking FOMC meetings, economic data releases, and major tech company earnings reports.

## Features

- 📅 Monthly calendar view with event categorization
- 💼 FOMC meetings tracking
- 📊 Economic data releases (CPI, PPI, Non-farm payrolls)
- 🏢 Tech company earnings dates (Apple, Microsoft, Tesla, NVIDIA)
- 📱 Responsive design for all devices
- 📥 Calendar export functionality (Google Calendar, Apple Calendar, Outlook)
- 🔍 Event search and filtering
- 🎯 Detailed event insights and analysis

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Routing**: Wouter
- **Deployment**: Cloudflare Pages

## Development

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/qstrux/2025_investment_calendar.git
cd 2025_investment_calendar

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### Cloudflare Pages

```bash
# Deploy to Cloudflare Pages
npm run deploy
```

Or connect your GitHub repository to Cloudflare Pages:

1. Log in to Cloudflare Dashboard
2. Go to Pages
3. Create a new project
4. Connect your GitHub repository
5. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: 18

## Environment Variables

Create a `.env` file based on `.env.example`:

```env
VITE_APP_TITLE=2025 Investment Calendar
VITE_APP_LOGO=/logo.png
VITE_ANALYTICS_ENDPOINT=
VITE_ANALYTICS_WEBSITE_ID=
```

## Project Structure

```
/
├── src/
│   ├── components/         # React components
│   │   └── ui/            # UI components (shadcn/ui)
│   ├── contexts/          # React contexts
│   ├── lib/               # Utility functions and data
│   ├── pages/             # Page components
│   ├── index.css          # Global styles
│   └── main.tsx           # Application entry point
├── public/                # Static assets
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── wrangler.toml          # Cloudflare Pages configuration
```

## License

MIT

## Author

Jenna Ryan, CFA
Alpha Wealth Capital
