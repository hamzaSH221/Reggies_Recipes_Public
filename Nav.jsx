import React, { useEffect } from "react";

// Full-recipe pop-up. The parent controls which recipe is open;
// this component just renders it and reports when the user closes it.
export default function RecipeModal({ recipe, onClose }) {
  // Close when the user presses Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!recipe) return null;

  return (
    // Dark backdrop — clicking it closes the modal
    <div
      className="fixed inset-0 z-50 bg-ink/60 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={recipe.name}
    >
      {/* stopPropagation so clicks inside the card don't close it */}
      <div
        className="bg-paper rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img src={recipe.img} alt={recipe.name} className="w-full h-52 object-cover rounded-t-2xl" />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-paper text-pine rounded-full w-9 h-9 flex items-center
                       justify-center shadow hover:bg-leaf focus:outline-none focus:ring-2 focus:ring-basil"
            aria-label="Close recipe"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-ink/60 mb-2">
            <span className="bg-leaf text-pine px-2.5 py-1 rounded-full">{recipe.diet}</span>
            <span>⏱ {recipe.time}</span>
            <span>serves {recipe.serves}</span>
          </div>
          <h2 className="font-display text-2xl text-pine">{recipe.name}</h2>
          <p className="text-ink/70 mt-2">{recipe.description}</p>

          <h3 className="font-mono text-xs uppercase tracking-widest text-saffron mt-6 mb-3">
            Method
          </h3>
          <ol className="space-y-3">
            {recipe.steps.map((step, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="font-mono text-sm text-basil shrink-0">{idx + 1}.</span>
                <span className="text-ink/90">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
