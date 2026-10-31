# Mayur Simha M — Portfolio

A high-performance single-page developer portfolio showcasing Python full-stack applications, cloud engineering labs, and technical leadership.

**Live site:** [https://YOUR-SITE-URL/](https://YOUR-SITE-URL/)

## Tech Stack

- **Frontend & Core:** React 19, Vite
- **Styling:** Tailwind CSS 4
- **Animations & Effects:** Framer Motion, AOS, WebGL fluid SplashCursor
- **Communications:** EmailJS (@emailjs/browser)

## Run Locally

Clone the repository and install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Environment Variables

Create a `.env.local` file in the project root to configure EmailJS form delivery:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

*(Note: If these variables are not provided, the contact form automatically falls back to an interactive direct email mailto client).*

## Training Attribution

Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training).
