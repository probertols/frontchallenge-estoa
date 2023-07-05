import Card from '@/components/Card'
import Image from 'next/image'
import axios from 'axios'
import Loading from '@/components/Loading';

async function getData() {
  const res = await fetch('https://swapi.dev/api/people/')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
  

export default async function Home() {
  const data = await getData()
  const people = data.results;

  console.log(data);

/*   const result = await axios.get('https://swapi.dev/api/people/'); */

  return (
    <main className="flex flex-col items-center justify-between p-20">
       <h1>Front Challenge</h1>
       <div>
        { people.map(({ name, species, birth_year }) => (
            <Card key={name} name={name} species={species} birth_year={birth_year} /> 
        ))}
      </div>
        
       
    </main>
  )
}
