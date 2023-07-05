import React from 'react'


function Card({name, species, birth_year}) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg pb-10">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{name}</div>
      <p className="text-gray-700 text-base">
        {species}
      </p>
      <p className="text-gray-700 text-base">
        {birth_year}
      </p>
      <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-20 py-1 text-sm font-semibold text-gray-700">Details</span>
  </div>
    </div>
    </div>
  )
}

export default Card