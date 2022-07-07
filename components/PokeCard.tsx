import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {RaceBy} from '@uiball/loaders'
import Image from 'next/image'
import Link from 'next/link'
type Props = {
    url: RequestInfo,
    name: String,
}
export default function PokeCard({url, name}: Props) {
    const [data, setData] = useState<any>(null)
  const [isLoading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) 
  return (<div className='m-5'>
      <RaceBy />
    </div>)
  if (!data) return <p>No pokemon data</p>

  return (
    <Link href={`/Pokemon/${data.id}`}>
    <div
    className={`p-2 w-48 h-40 m-5 text-white items-center flex relative justify-between
    overflow-hidden cursor-pointer
    rounded-lg shadow-2xl 
    ${data?.types[0].type.name == 'fire' ? 'shadow-red-400 bg-red-400':''} 
    ${data?.types[0].type.name == 'water' ? 'shadow-blue-400 bg-blue-400':''} 
    ${data?.types[0].type.name == 'grass' ? 'shadow-green-400 bg-green-400':''} 
    ${data?.types[0].type.name == 'bug' ? 'shadow-orange-400 bg-orange-400':''} 
    ${data?.types[0].type.name == 'normal' ? 'shadow-cyan-400 bg-cyan-400':''} 
    ${data?.types[0].type.name == 'poison' ? 'shadow-violet-400 bg-violet-400':''} 
    ${data?.types[0].type.name == 'ground' ? 'shadow-stone-400 bg-stone-400':''} 

    shadow-yellow-400 bg-yellow-400`}
    >
        <div className="pokemonInfos flex flex-col items-start justify-start">
            <p
            className='capitalize font-bold'
            >{name}</p>
            {
                data?.types?.map((type: any)=>(
                    <p className={`
                    ${data?.types[0].type.name == 'fire' ? 'bg-red-300':''} 
                    ${data?.types[0].type.name == 'water' ? 'bg-blue-300 ':''} 
                    ${data?.types[0].type.name == 'grass' ? 'bg-green-300':''}
                    ${data?.types[0].type.name == 'bug' ? 'bg-orange-300 ':''} 
                    ${data?.types[0].type.name == 'normal' ? 'bg-cyan-300 ':''} 
                    ${data?.types[0].type.name == 'poison' ? 'bg-violet-300 ':''} 
                    ${data?.types[0].type.name == 'ground' ? 'bg-stone-300 ':''} 
                    rounded-full bg-yellow-300 
                    flex items-center w-fit px-2 m-1 justify-center capitalize
                    `}>{type.type.name}</p>
                ))
            }
        </div>
        <div className="image">
            <Image 
            src={data?.sprites?.front_default || ''}
            width={120}
            height={120}
            className={'z-10'}
            />
        </div>
        <svg id="Layer_1" 
       className={`
       ${data?.types[0].type.name == 'fire' ? 'fill-red-300':''} 
       ${data?.types[0].type.name == 'water' ? 'fill-blue-300 ':''} 
       ${data?.types[0].type.name == 'grass' ? 'fill-green-300':''}
       ${data?.types[0].type.name == 'bug' ? 'fill-orange-300':''} 
       ${data?.types[0].type.name == 'normal' ? 'fill-cyan-300':''} 
       ${data?.types[0].type.name == 'poison' ? 'fill-violet-300':''} 
       ${data?.types[0].type.name == 'ground' ? 'fill-stone-300':''} 
       fill-yellow-300 w-28 h-28 absolute bottom-[-10px] right-[-10px]`
      }
       data-name="Layer 1" 
       xmlns="http://www.w3.org/2000/svg" 
       viewBox="0 0 859 858.94">
           <title>1</title>
        <path d="M1125,728.09c-22.82-11.92-47.94-14-72.71-16.74-84.93-9.42-170.26-11.81-255.62-13.15-5.36-.09-8-1.35-9.92-6.9-14.29-41-48.95-66-90.57-65.85-41.33.15-75.93,25.16-89.91,65.51-1.82,5.25-4,7.22-9.67,7.26q-96.89.76-193.54,7.64c-38,2.71-76.09,5.51-113.39,14.27a84.58,84.58,0,0,0-23.29,9.3c2-148.63,58.91-268.51,177.75-356.3C587,267.59,779.53,265.46,923.93,356.06,1077.85,452.62,1130.47,613.81,1125,728.09Z" transform="translate(-266.42 -290.87)"/><path d="M533.21,745.16c20.79,0,41.59.18,62.39-.12,5.61-.08,8.69.94,11,6.9,15.11,39.73,49.91,64,90.43,63.82,40.85-.19,73.77-24.14,89.2-65.16,1.54-4.1,3.49-5.71,8-5.56,43.75,1.55,87.53,2.5,131.26,4.41,39.37,1.72,78.73,4.11,117.91,8.56,23.39,2.66,46.77,5.29,69.43,12.32,7.31,2.27,9.43,5.9,8.39,13.5C1098.25,950.46,969.57,1094.3,805.89,1136c-229.83,58.53-459.29-73.73-524.13-302.16-5-17.6-8.25-35.58-11.41-53.59-1-5.59,2-7.22,5.93-8.73,13.39-5.18,27.48-7.57,41.57-9.6,35.64-5.11,71.49-8.17,107.45-10s71.92-3.69,107.88-5.53Zm534.1,63.39c-10.66-1.4-20.75-3-30.9-4-68.32-6.69-136.89-8.93-205.45-11.39-8-.28-12.59,2-17.3,8.77-58.2,83.65-179.81,82.34-236.3-2.41-3.15-4.72-6.29-6.57-11.93-6.36-76.6,2.88-153.26,4.4-229.42,14.52-9,1.2-10.44,3.5-8.14,11.83,15.89,57.44,42.31,109.4,82.63,153.34,94.88,103.36,212.71,145.16,351,123.29,95.38-15.09,173.32-63.17,233.79-138.69C1030.45,913.51,1054.16,863.88,1067.31,808.55Z" transform="translate(-266.42 -290.87)"/><path d="M763.45,720.79a67,67,0,1,1-133.92-.88c.2-36.61,30.49-66.4,67.38-66.26C733.56,653.78,763.53,684,763.45,720.79Z" transform="translate(-266.42 -290.87)"/>
        </svg>
    </div>
    </Link>
  )
}
