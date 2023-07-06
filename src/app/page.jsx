import Card from '@/components/Card'
import Loading from '@/components/Loading';
import Pagination from '@/components/Pagination';


async function getData(url, page) {
  const res = await fetch(`https://swapi.dev/api/${url}${page ? `?page=${page}` : ''}`, {cache: 'force-cache'})
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Home({ searchParams }) {
 
  const datappl = await getData('people/', searchParams.page === 1 ? '' : searchParams.page)
  const people = datappl.results;

  return (
    <main className="flex flex-col items-center justify-between p-20">
      <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl mb-20">Front Challenge - StarWars </h1>
      <div className="mb-10">
        <Pagination people={people} currentPage={+searchParams.page} />
      </div>
     
      
    </main>
  )
}
