import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../../context/ItemContext';

function Navbar() {

  const { searchParam, setSearchParam,handleSubmit } = useContext(GlobalContext);
  return (
    <>
      <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
        <h2 className="text-2xl font-semibold">
          <NavLink to={"/"}>FoodRecipe</NavLink>
        </h2>
        

        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            value={searchParam}
            onChange={(e) => {
              setSearchParam(e.target.value)
            }}
            placeholder="Enter Items..."
            className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100  "
          />
        </form>
        <ul className="flex gap-5">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `text-black hover:text-gray-700 duration-300 ${
                  isActive ? "text-red-400" : "text-black"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/favorites"}
              className={({ isActive }) =>
                `text-black hover:text-gray-700 duration-300 ${
                  isActive ? "text-red-400" : "text-black"
                }`
              }
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar
