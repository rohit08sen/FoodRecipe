import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState('')
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoriteList,setFavoriteList]=useState([])

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await response.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false)
        setSearchParam('')
      }
      // console.log(data)
    } catch (e) {
       setLoading(false);
       setSearchParam("");
    }

  }

  function handleAddToFav(getCurrItem) {
    let cpyFavList = [...favoriteList]
    const idx = cpyFavList.findIndex(item => item.id === getCurrItem.id)
    
    if (idx === -1) {
      cpyFavList.push(getCurrItem)
    } else {
      cpyFavList.splice(idx);
    }
    setFavoriteList(cpyFavList);
  }

  
  // console.log(loading,recipeList)
  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        recipeList,
        recipeDetailsData,
        setRecipeDetailsData,
        favoriteList,
        setFavoriteList,
        handleAddToFav,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

