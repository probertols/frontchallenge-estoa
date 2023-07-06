import React from 'react'
import Link from 'next/link'

async function Card({ name, species, birth_year, id }) {
  const dataspc = await Promise.all(species.map(async (url) => fetch(url)
    .then((results) => results.json())
    .then(({ name }) => name)
  ));

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg pb-10 mb-10">
      <div className="px-10 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          Specie:{dataspc}
        </p>
        <p className="text-gray-700 text-base">
          Birth: {birth_year}
        </p>
        {/* <Button type="primary">Primary Button</Button> */}
        <div className="flex justify-center mt-10">
          <Link href={`/${id}`}>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
