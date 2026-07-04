import React, { useState } from "react";
import { Link } from "react-router-dom";
import recipes from "../data/recipes";
import RecipeCard from "../components/RecipeCard";
import RecipeModal from "../components/RecipeModal";
import heroImg from "../images/food.png";

export default function Home() {
  // Which recipe (if any) is open in the pop-up
  const [openRecipe, setOpenRecipe] = useState(null);

  // Pick three recipes to feature on the home page
  const featured = [recipes[5], recipes[1], recipes[11]];

  return (
    <div>
      {/* ---------------- Hero ---------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-saffron mb-4">
            Recipes + AI, on one chopping board
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-pine leading-tight">
            Cook something you&rsquo;ve never cooked before.
          </h1>
          <p className="text-lg text-ink/70 mt-5 max-w-md">
            Browse a curated library of everyday recipes — or tell the AI Kitchen
            what&rsquo;s in your fridge and get a brand-new recipe invented on the spot.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link
              to="/ai-kitchen"
              className="px-6 py-3 bg-pine text-paper font-semibold rounded-full
                         hover:bg-basil transition-colors focus:outline-none focus:ring-2 focus:ring-basil"
            >
              Open the AI Kitchen →
            </Link>
            <Link
              to="/recipes"
              className="px-6 py-3 bg-leaf text-pine font-semibold rounded-full
                         hover:bg-saffron/20 transition-colors focus:outline-none focus:ring-2 focus:ring-basil"
            >
              Browse recipes
            </Link>
          </div>
        </div>
        <div>
          <img
            src={heroImg}
            alt="A table of freshly prepared dishes"
            className="w-full rounded-3xl shadow-xl border-4 border-white"
          />
        </div>
      </section>

      {/* ---------------- How it works ---------------- */}
      <section className="bg-leaf/60 border-y border-pine/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid sm:grid-cols-3 gap-8">
          <div>
            <p className="font-mono text-saffron text-sm mb-2">Browse</p>
            <h2 className="font-display text-xl text-pine mb-2">A curated library</h2>
            <p className="text-ink/70 text-sm">
              Fifteen tried-and-tested mains and desserts with step-by-step methods,
              searchable and filterable by diet.
            </p>
          </div>
          <div>
            <p className="font-mono text-saffron text-sm mb-2">Filter</p>
            <h2 className="font-display text-xl text-pine mb-2">Eat your way</h2>
            <p className="text-ink/70 text-sm">
              Vegan, Halal, Pescatarian or Vegetarian — one tap narrows the whole
              library to recipes that fit.
            </p>
          </div>
          <div>
            <p className="font-mono text-saffron text-sm mb-2">Generate</p>
            <h2 className="font-display text-xl text-pine mb-2">The AI Kitchen</h2>
            <p className="text-ink/70 text-sm">
              Type the ingredients you actually have, pick a cuisine, and an AI chef
              writes a complete new recipe — which you can save for later.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- Featured recipes ---------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-3xl text-pine">Tonight&rsquo;s favourites</h2>
          <Link to="/recipes" className="font-mono text-sm text-basil underline underline-offset-4 hover:text-pine">
            See all 15 →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} onOpen={setOpenRecipe} />
          ))}
        </div>
      </section>

      <RecipeModal recipe={openRecipe} onClose={() => setOpenRecipe(null)} />
    </div>
  );
}
