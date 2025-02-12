import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../../context/ItemContext';
import RecipeItem from '../../components/recipeItem/RecipeItem';
function Favorites() {
  const { favoriteList} = useContext(GlobalContext);


  return (
    <>
      <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {favoriteList && favoriteList.length > 0 ? (
          favoriteList.map((item) => <RecipeItem item={item} />)
        ) : (
          <div>
            <p className="lg:text-4xl text-xl text-center text-black font-bold">
              Nothing is added.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Favorites
