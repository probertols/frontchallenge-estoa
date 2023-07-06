import Card from '@/components/Card'
import Loading from '@/components/Loading';
import Pagination from '@/components/Pagination';
// import { useEffect, useState } from 'react';

async function getData(url, page) {
  const res = await fetch(`https://swapi.dev/api/${url}${page ? `?page=${page}` : ''}`, {cache: 'force-cache'})
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home({ searchParams }) {
  // const [datappl, setDatappl] = useState({ results: [] });
  const datappl = await getData('people/', searchParams.page === 1 ? '' : searchParams.page)
  const people = datappl.results;
  // useEffect(() => {
  //   async function getDatas() {
  //     await getData('people/', searchParams.page === 1 ? '' : searchParams.page)
  //       .then(data => setDatappl(data))
  //       .catch(err => console.error(err))
  //   }
  //   getDatas();
  // }, []);
  return (
    <main className="flex flex-col items-center justify-between p-20">
      <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl mb-20">Front Challenge - StarWars </h1>
      <div className="mb-10">
        {/* {people.length ? <Pagination currentPage={+searchParams.page || 1} totalPages={Math.ceil(datappl.count / 10)} />
        : <Loading />} */}
        <Pagination people={people} currentPage={+searchParams.page} />
      </div>
      {/* { people.map(({ name, species, birth_year }, index) => (
            <Card key={name} name={name} species={species} birth_year={birth_year} id={index} /> 
        ))}  */}
      
    </main>
  )
}
