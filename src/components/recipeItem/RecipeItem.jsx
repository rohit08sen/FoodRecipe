import React from 'react'
import { Link } from 'react-router-dom'
function RecipeItem({item}) {
  return (
    <>
      <div className='flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-none'>
        <div className='h-40 flex justify-center overflow-hidden items-center rounded-xl'>
          <img src={item.image_url} alt="recipe item" className='block w-full' />
        </div>
        <div>
          <span className='text-sm text-cyan-700'>{item.publisher}</span>
          <h3 className='font-bold text-2xl truncate text-black-400'>{item.title}</h3>
          <Link to={`/recipe-item/${item.id}`} className='text-sm p-3 rounded-lg text-white bg-amber-950 mt-5 px-8 tracking-wider inline-block shadow-md'>Recipe Details</Link>
        </div>
      </div>
    </>
  )
}

export default RecipeItem

