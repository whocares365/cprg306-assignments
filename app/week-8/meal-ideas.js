"use client";

import { useState, useEffect } from "react";

// Fetch a list of meals using an ingredient (for preview)
async function fetchMealIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data;
}

// Fetch full details for a selected meal
async function fetchMealDetails(mealId) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data = await response.json();
    return data.meals[0];
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null);
    const [showInstructions, setShowInstructions] = useState(false);


    const handleMealClick = async (meal) => {
        const fullMeal = await fetchMealDetails(meal.idMeal);
        setSelectedMeal(fullMeal);
        setShowInstructions(false);
    };

    const handleCollapse = () => {
        setSelectedMeal(null);
        setShowInstructions(false);
    };

    function getIngredientsList(meal) {
        let ingredients = [];
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient && ingredient.trim() !== "") {
                ingredients.push(`${measure} ${ingredient}`);
            }
        }
        return ingredients;
    }

    async function loadMealIdeas() {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
        setSelectedMeal(null); // Clear previously selected meal when ingredient changes
    }

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
        <div className="m-6 border-3 border-cyan-400 bg-slate-900 rounded text-center w-85">
            <h1 className="text-xl font-bold mb-2">Meal Ideas</h1>
            <h2 className="mb-4">Here are some meal ideas using {ingredient}:</h2>

            {meals && meals.meals === null && (
                <p>No recipes found for {ingredient}.</p>
            )}

            {meals && meals.meals && meals.meals.map((rec) => (
                <div key={rec.idMeal} className="my-2 cursor-pointer">
                    <p
                        onClick={() => handleMealClick(rec)}
                        className="hover:bg-slate-700 rounded"
                    >
                        {rec.strMeal}
                    </p>

                    {selectedMeal && selectedMeal.idMeal === rec.idMeal && (
                        <div className="mt-4 text-left border-y-2 border-gray-400 pt-4 bg-slate-700 p-4 rounded-md">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-lg font-bold">{selectedMeal.strMeal}</h3>
                                <button 
                                    onClick={handleCollapse}
                                    className="text-white px-2 rounded bg-slate-500 hover:bg-gray-400"
                                >
                                    retract
                                </button>
                            </div>

                            <img
                                src={selectedMeal.strMealThumb}
                                alt={selectedMeal.strMeal}
                                className="w-60 rounded-md mb-2"
                            />

                            <h4 className="font-semibold">Ingredients:</h4>
                            <ul className="list-disc pl-5 mb-4">
                                {getIngredientsList(selectedMeal).map((ing, index) => (
                                    <li key={index}>{ing}</li>
                                ))}
                            </ul>

                            <button 
                                onClick={() => setShowInstructions(!showInstructions)} 
                                className="text-white px-2 py-1 rounded bg-slate-500 hover:bg-gray-400"
                            >
                                {showInstructions ? "Hide Instructions" : "Show Instructions"}
                            </button>

                            {showInstructions && (
                                <div className="mt-4">
                                    <h4 className="font-semibold">Instructions:</h4>
                                    <p>{selectedMeal.strInstructions}</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}