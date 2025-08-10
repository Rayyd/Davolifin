# Davolifin — One‑page Site (React + Tailwind + Vite)

## Dev
```bash
npm i
npm run dev
```

## Build
```bash
npm run build
```

## Deploy to Vercel (free)
1) Push this folder to a new GitHub repo.
2) Go to https://vercel.com/new and import the repo.
3) Framework: **Vite**. Build command: `npm run build`. Output dir: `dist`.
4) Click **Deploy**.

## Deploy to Netlify (free)
- Import the GitHub repo on app.netlify.com, or use CLI:
```bash
npm i -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

## Contact form
Replace the Formspree endpoint in `src/DavolifinLanding.jsx` with your own (free plan).
