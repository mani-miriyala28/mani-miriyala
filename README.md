# Mani Miriyala's Portfolio

A modern, responsive portfolio website built with React and CSS (converted from SCSS).

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Project Showcase**: Display of work projects and personal projects
- **About Section**: Personal information and technical skills
- **Contact Form**: Get in touch functionality
- **GitHub Integration**: GitHub contribution calendar display

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: CSS (converted from SCSS)
- **Animations**: Framer Motion
- **Icons**: React Feather, Lucide React
- **Routing**: React Router DOM
- **Notifications**: React Toastify
- **Email Service**: EmailJS
- **GitHub**: GitHub Contribution Calendar

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mani-miriyala-1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── About/          # About section components
│   ├── ContactTab/     # Contact form components
│   ├── Footer/         # Footer component
│   ├── Modals/         # Modal components
│   ├── ProfileCard/    # Profile card component
│   ├── Project/        # Project detail components
│   ├── TopBar/         # Navigation bar
│   ├── TopProjects/    # Projects showcase
│   └── WIP/            # Work in progress component
├── context/            # React context for state management
├── pages/              # Page components
│   ├── Blog/           # Blog page
│   ├── Contact/        # Contact page
│   ├── Overview/       # Overview/Home page
│   ├── ProjectDetails/ # Project details page
│   └── Projects/       # Projects listing page
├── assets/             # Images and static files
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── style.css           # Global styles
```

## Customization

1. **Personal Information**: Update the profile information in `components/ProfileCard/ProfileCard.jsx`
2. **Projects**: Modify the projects data in `components/SharedData.js`
3. **Experience**: Update work experience in `components/About/experiences.js`
4. **Styling**: Customize the CSS variables in `src/style.css` for colors and themes
5. **GitHub**: Update the GitHub username in `components/Main.jsx`

## Deployment

The project is configured for easy deployment to Vercel, Netlify, or similar platforms.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Environment Variables

Create a `.env` file in the root directory for any environment variables:

```env
VITE_API_GITHUB_ACCESS_TOKEN=your_github_token
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Mani Miriyala - [GitHub](https://github.com/mani-miriyala) - [Email](mailto:mani.miriyala@gmail.com)