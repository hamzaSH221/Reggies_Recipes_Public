# Reggie's Recipes 🍳

A recipe library with an **AI kitchen assistant**. Browse fifteen curated recipes with search and diet filters — or type in whatever is in your fridge and have an AI chef invent a brand-new recipe on the spot, complete with quantities and a step-by-step method.

**Live site:** https://reggiesrecipes-cd4a1.web.app/

## What it does

- **Recipe library** — 15 mains and desserts with full methods, searchable and filterable by category (Mains / Desserts) and diet (Vegan, Halal, Pescatarian, Vegetarian). Click any card for the full recipe in a modal.
- **AI Kitchen** — free-text ingredient input plus optional diet and cuisine choices. The request goes to a Cloudflare Worker, which calls the OpenAI API and returns a structured JSON recipe rendered as a recipe card. Generated recipes can be saved to the browser with localStorage — no account required.
- **Responsive design** — a custom Tailwind theme (deep pine green, saffron accent, warm paper background) that works on mobile, tablet and desktop, with keyboard-accessible controls and reduced-motion support.

## Architecture

```
Browser (React SPA, Firebase Hosting)
        │  POST { ingredients, diet, cuisine }
        ▼
Cloudflare Worker  ──  keeps the OpenAI API key server-side
        │  prompt requesting strict JSON
        ▼
OpenAI API  ──  returns { title, description, time, serves, ingredients[], steps[] }
```

The API key never touches the browser — the Worker acts as a small serverless backend and adds CORS headers, input validation and length limits.

## Tech stack

| Layer | Choice |
|---|---|
| Front end | React 18 (functional components + hooks), React Router 6 |
| Styling | Tailwind CSS with a custom design-token theme |
| AI backend | Cloudflare Worker → OpenAI Chat Completions |
| Persistence | localStorage for saved AI recipes |
| Hosting | Firebase Hosting |

## Run it locally

```bash
git clone https://github.com/hamzaSH221/Reggies_Recipes_Public.git
cd Reggies_Recipes_Public
npm install
npm start
```

The site runs at `http://localhost:3000`. The AI Kitchen calls the deployed Worker, so it works locally with no extra setup.

## Deploying the Worker

The Worker source lives in [`worker/worker.js`](worker/worker.js). To deploy or update it:

1. Open [dash.cloudflare.com](https://dash.cloudflare.com) → Workers & Pages → your `reggies-generate` Worker.
2. Paste in the contents of `worker/worker.js` and deploy.
3. Under **Settings → Variables**, add a secret named `OPENAI_API_KEY` with your OpenAI key.

## Project structure

```
src/
  data/recipes.js        # single source of truth for all recipes
  components/            # Nav, Footer, RecipeCard, RecipeModal
  pages/                 # Home, Recipes, AiKitchen
worker/
  worker.js              # Cloudflare Worker (serverless AI backend)
```

## What I learned building this

- Keeping secrets out of the client by putting a serverless Worker between the browser and the OpenAI API.
- Prompting a model to return **strict JSON** and defensively parsing the response, with a graceful fallback to plain text.
- Designing a small component system (card + modal reused across pages) and a custom Tailwind theme instead of default utility colours.
- Handling real-world UI states: loading skeletons, empty search results, network errors and disabled buttons.

---

Built by **Hamza Hussain**.
