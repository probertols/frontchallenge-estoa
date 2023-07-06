import React from 'react'
import Link from 'next/link'

async function Card({name, species, birth_year, id}) {
  const dataspc = await Promise.all(species.map(async (url) => fetch(url)
    .then((results) => results.json())
    .then(({name}) => name)
  ));

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg pb-10 mb-10">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{name}</div>
      <p className="text-gray-700 text-base">
        Specie:{dataspc} 
      </p>
      <p className="text-gray-700 text-base">
      Birth: {birth_year}
      </p>
      {/* <Button type="primary">Primary Button</Button> */}
      <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-20 py-1 text-sm font-semibold text-gray-700">Details</span>
    <Link href={`/${id}`}>Details</Link>
  </div>
    </div>
    </div>
  )
}

export default Card
