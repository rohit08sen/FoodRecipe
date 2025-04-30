import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GlobalContext } from '../../context/ItemContext'
import Favorites from '../favorites/Favorites';

function Details() {
  const { id} = useParams()//it will give everything here we need the id of each item
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleAddToFav,
    favoriteList,
  } = useContext(GlobalContext);
 
  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();
      console.log(data)
      if (data.data) {
        setRecipeDetailsData(data.data)
      }
    }
    getRecipeDetails()
  },[id])
  return (
    <>
      <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="row-start-2 lg:row-start-auto">
          <div className="h-96 overflow-hidden rounded-2xl group">
            <img
              src={recipeDetailsData?.recipe.image_url}
              alt=""
              className="w-full h-full object-cover block group-hover:scale-105 duration-200"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-cyan-700">
            {recipeDetailsData?.recipe?.publisher}
          </span>
          <h3 className="font-bold text-2xl truncate text-black-400">
            {recipeDetailsData?.recipe?.title}
          </h3>
          <div>
            <button
              onClick={() => handleAddToFav(recipeDetailsData?.recipe)}
              className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block bg-black text-white"
            >
              Save as favorites
            </button>
          </div>
          <div>
            <span className="text-2xl font-semibold text-black">
              Ingredients:
            </span>
            <ul>
              {recipeDetailsData?.recipe?.ingredients.map((ingredient) => (
                <li>
                  <span className="text-2xl font-semibold text-black">
                    {ingredient.quantity} {ingredient.unit}
                  </span>
                  <span className="text-2xl font-semibold text-black">
                    {ingredient.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details
