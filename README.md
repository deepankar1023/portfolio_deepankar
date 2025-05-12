# Deepankar Mishra - Portfolio Website

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and React. This portfolio showcases my education, experience, projects, and achievements with a clean, professional design.

![Portfolio Preview](preview.png)

## Features

- **Modern UI Design**: Clean, professional design with subtle animations and micro-interactions
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dark Mode**: Elegant dark theme optimized for readability
- **Smooth Scrolling**: Seamless section transitions
- **Interactive Elements**: Hover effects and animations for better user engagement
- **SEO Optimized**: Meta tags for better search engine visibility
- **Performance Optimized**: Fast loading times and optimized assets

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## Project Structure

\`\`\`
portfolio-website/
├── app/                    # Next.js app directory
│   ├── components/         # React components
│   │   └── Navbar.tsx      # Navigation component
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Home page component
│   └── globals.css         # Global styles
├── public/                 # Static assets
│   ├── profile.jpg         # Profile picture
│   └── resume.pdf          # Downloadable resume
├── README.md               # Project documentation
└── package.json            # Project dependencies and scripts
\`\`\`

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/deepankar1023/portfolio-website.git
   cd portfolio-website
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Personal Information

Edit the content in `app/page.tsx` to update your personal information, projects, skills, and experience.

### Profile Picture

Replace the profile picture in `public/profile.jpg` with your own image. Make sure to keep the same filename or update the references in the code.

### Resume

Replace the resume file in `public/resume.pdf` with your own resume. Make sure to keep the same filename or update the references in the code.

### Styling

Modify the colors and styling in `app/globals.css` and the Tailwind classes throughout the components to match your personal brand.

## Deployment

The easiest way to deploy this portfolio is using the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub repository.
2. Import the project to Vercel.
3. Vercel will detect that you're using Next.js and set up the build configuration for you.

## Adding New Projects

To add new projects to your portfolio:

1. Open `app/page.tsx`
2. Find the Projects section
3. Copy an existing project card and update the details:
   - Title
   - Technologies used
   - Description
   - Links to code and demo

## Contact Form Setup

The contact form in this template is set up for demonstration purposes. To make it functional:

1. Create an API route in `app/api/contact/route.ts`
2. Implement email sending functionality using a service like SendGrid, Nodemailer, or FormSpree
3. Update the form's action attribute to point to your API route

## License

This project is licensed under the MIT License - see the LICENSE file for details.
