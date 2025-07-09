<div align="center">
  <img src="/public/images/icon.png" alt="Crewters Logo" width="120" height="120">
  <h1>Crewters</h1>
  <p>
    <strong>Find Your Crew. Play Your Sport. Anywhere.</strong>
  </p>
  <p>
    A sports social network connecting athletes, teams, and sports venues worldwide.
  </p>
  
  [![Next.js](https://img.shields.io/badge/Next.js-13.4.7-000000?style=flat-square&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0.4-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-06B6D4?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
</div>

## 🌟 About Crewters

Crewters is a revolutionary sports social networking platform designed to connect athletes, teams, and sports venues around the world. Whether you're looking to join a local pickup game, organize team events, or discover new sports facilities, Crewters provides the tools you need to stay active and connected with your sports community.

## 🚀 Key Features

### 🗺️ Interactive Sports Map
- Discover sports venues and events near you
- Filter by sport type, skill level, and availability
- Real-time updates on game status and player counts

### 👥 Community Building
- Create and join sports crews
- Connect with like-minded athletes
- Share achievements and game highlights

### 🎯 Event Management
- Organize and schedule games
- Send invites and track RSVPs
- In-app messaging for team coordination

### 📱 Mobile-First Experience
- Native mobile app feel with PWA support
- Offline functionality for checking game details
- Push notifications for game updates

## 🛠️ Tech Stack

- **Frontend**: Next.js 13 with React 18
- **Styling**: Tailwind CSS with Radix UI components
- **Authentication**: NextAuth.js
- **Database**: Prisma with PlanetScale
- **Payments**: Stripe integration
- **Deployment**: Vercel
- **Analytics**: Built-in dashboard
- **Type Safety**: TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- pnpm 8.0.0 or later
- MySQL-compatible database (or use PlanetScale)
- Stripe account for payment processing

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/crewters.git
   cd crewters
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Update the variables in `.env.local` with your configuration.

4. Run database migrations:
   ```bash
   pnpm prisma migrate dev
   ```

5. Start the development server:
   ```bash
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Mobile App

Crewters is built with React Native for a seamless mobile experience:
- iOS and Android support
- Push notifications
- Offline capabilities
- Camera integration for sharing moments

## 🌍 Contributing

We welcome contributions from the community! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please read our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🤝 Support

Having trouble? Here's how to reach us:

- Email: [support@crewters.com](mailto:support@crewters.com)
- Twitter: [@crewtersapp](https://twitter.com/crewtersapp)
- Join our [Discord community](https://discord.gg/crewters)

## 🙏 Acknowledgments

- Built with ❤️ by the Crewters team
- Special thanks to all our beta testers and contributors
- Icons by [Font Awesome](https://fontawesome.com/)
- UI Components by [shadcn/ui](https://ui.shadcn.com/)

---

<div align="center">
  Made with ❤️ for sports enthusiasts everywhere
</div>
