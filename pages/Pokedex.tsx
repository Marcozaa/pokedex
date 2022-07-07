import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { GiBackwardTime } from 'react-icons/gi'
import PokeCard from '../components/PokeCard'
import {BiArrowBack} from 'react-icons/bi'
import Link from 'next/link'
export default function Pokedex({pokemons}: any) {
    const [data, setData] = useState<any>(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://pokeapi.co/api/v2/pokemon?limit=60')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>


  return (
    <div>
        <div className="m-10">
            <Link href={'/'}>
            <BiArrowBack className='cursor-pointer w-8 h-8'/>
            </Link>
        </div>
        <h1
        className='font-bold text-4xl m-6 my-10'
        >Pokedex</h1>
    <div className='flex flex-wrap justify-center'>
        {
        data?.results?.map((pokemon: any) =>(
            <PokeCard 
            url={pokemon.url}
            name={pokemon.name} 
            />
        ))
        }
    </div>
    </div>
  )
}

