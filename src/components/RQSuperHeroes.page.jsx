import { useQuery } from '../hooks/index'
import axios from 'axios'
import { useEffect } from 'react'

export const RQSuperHeroesPage = () => {
  const { isLoading, data } = useQuery(
    'hero',
    () => axios.get('http://localhost:4000/superheroes'),
    { refetchOnWindowFocus: true, retry: 3 }
  )

  useEffect(()=>{
  console.log("🚀 ~ file: RQSuperHeroes.page.jsx ~ line 13 ~ useEffect ~ useEffect", data)
    
  },[data])
  // console.log("🚀 ~ file: RQSuperHeroes.page.js ~ line 6 ~ RQSuperHeroesPage ~ data", data)

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      {data?.data.map((hero) => {
        return <div>{hero.name}</div>
      })}
    </>
  )
}
