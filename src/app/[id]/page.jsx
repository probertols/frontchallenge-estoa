/* export const getStaticPath =  async (url, page) => {
  const res = await fetch(`https://swapi.dev/api/${url}${page ? `?page=${page}` : ''}`, {cache: 'force-cache'})
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()

  const path = data.results.map((people, id) =>{
    return {
      params: {id: (id +1).toString() },
    }
  })

  return {
    path,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch(`https://swapi.dev/api/people/${id}`)

  const data = await res.json()
  return {
    props: { people: data },
  }
}

export default function Person ({ person }){
  return <p>{people.name}</p>
} */