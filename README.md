# Portfolio - Shaik Sadiya Parvin

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Showcasing projects, skills, experience, and certifications.

## 🌐 Live Demo

[Visit Portfolio](https://portfolio-7xtm6110d-sksadiya22s-projects.vercel.app/)

## 📋 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion for elegant transitions
- **Dark Theme**: Professional dark mode styling
- **Sections**:
  - Hero section with name and role cycling
  - About me with stats
  - Skills showcase with tech icons
  - Experience timeline
  - Project portfolio with filtering
  - Certifications display
  - Contact form with Formspree integration
- **Fast Performance**: Built with Vite for optimal build time
- **SEO Ready**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1
- **Build Tool**: Vite 7.3.1
- **Styling**: Tailwind CSS 4.2.1
- **Animation**: Framer Motion 12.34.3
- **Icons**: Lucide React, React Icons
- **Form Backend**: Formspree
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sksadiya22/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5174](http://localhost:5174) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.jsx           # Landing section
│   │   ├── About.jsx          # About me section
│   │   ├── Skills.jsx         # Tech skills
│   │   ├── Experience.jsx     # Work experience
│   │   ├── Projects.jsx       # Portfolio projects
│   │   ├── Certifications.jsx # Credentials
│   │   ├── Contact.jsx        # Contact form
│   │   └── Navbar.jsx         # Navigation bar
│   ├── context/
│   │   └── ThemeContext.jsx   # Theme management (dark/light)
│   ├── App.jsx                # Root component
│   ├── main.js                # Entry point
│   └── index.css              # Global styles
├── public/
│   └── photo5.png             # Profile photo
├── index.html                 # HTML entry
├── package.json               # Dependencies
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
└── README.md                  # This file
```

## 🎨 Customization

### Update Personal Info
- Modify content in `src/components/Hero.jsx` for greeting and bio
- Update social links in the component arrays
- Replace `/photo5.png` with your own photo

### Add Projects
Edit `src/components/Projects.jsx` and add to the `projects` array:
```jsx
{
  id: 'project-name',
  title: 'Project Title',
  description: 'Brief description',
  tech: ['React', 'Node.js'],
  github: 'https://github.com/...',
  live: 'https://project-demo.com',
  hasLiveDemo: true
}
```

### Add Experience
Update `src/components/Experience.jsx` `experiences` array with your work history.

### Add Skills
Modify `src/components/Skills.jsx` to include your tech stack with corresponding icons.

## 📧 Contact Form

The contact form uses [Formspree](https://formspree.io/) for email handling. Update the endpoint in `src/components/Contact.jsx`:
```jsx
href="https://formspree.io/f/YOUR_FORM_ID"
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Vercel auto-detects Vite and deploys
4. Get your live URL instantly

### Render
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Create new Static Site
3. Connect GitHub repository
4. Set build command: `npm install && npm run build`
5. Set publish directory: `dist`
6. Deploy

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔗 Links

- **GitHub**: [sksadiya22/portfolio](https://github.com/sksadiya22/portfolio)
- **Portfolio**: [Live Demo](https://portfolio-7xtm6110d-sksadiya22s-projects.vercel.app/)
- **LinkedIn**: [sadiya22](https://linkedin.com/in/sadiya22)
- **Email**: [parvin_shaik@srmap.edu.in](mailto:parvin_shaik@srmap.edu.in)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio!

---

**Built with ❤️ by Shaik Sadiya Parvin**
