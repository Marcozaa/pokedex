import React from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import { RaceBy } from '@uiball/loaders'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ProgressBar from "@ramonak/react-progress-bar";
import { BiChevronLeft } from 'react-icons/bi'
import Link from 'next/link'

export default function Pokemon() {

  const router = useRouter()
  console.log(router.query)
  const [data, setData] = useState<any>(null)
  const [image, setImage] = useState<string>('')
  const [isLoading, setLoading] = useState<boolean>(false)

  useEffect(() => {

    if(!router.isReady) return;

    setLoading(true)
    async function getPokemonData(){
    fetch(`https://pokeapi.co/api/v2/pokemon/${router.query.Pokemon}`)
      .then((res) => res.json())
      .then((data) => {
          console.log(data)
        setData(data)
        setLoading(false)
      })
    }

  
    getPokemonData()

  }, [router.isReady])

  if (isLoading) 
  return (<div className='w-full h-[90vh] flex items-center justify-center'>
      <RaceBy/>
    </div>)
  if (!data) return <p>No pokemon data</p>
  
  return (
    <div className={`
    ${data?.types[0].type.name == 'fire' ? ' bg-red-400':''} 
        ${data?.types[0].type.name == 'water' ? ' bg-blue-400':''} 
        ${data?.types[0].type.name == 'grass' ? ' bg-green-400':''} 
        ${data?.types[0].type.name == 'bug' ? ' bg-orange-400':''} 
        ${data?.types[0].type.name == 'normal' ? ' bg-cyan-400':''} 
        ${data?.types[0].type.name == 'poison' ? ' bg-violet-400':''} 
        ${data?.types[0].type.name == 'ground' ? ' bg-stone-400':''} 
        ${data?.types[0].type.name == 'electric' ? ' bg-yellow-400':''} 
        ${data?.types[0].type.name == 'fairy' ? ' bg-pink-400':''}
        ${data?.types[0].type.name == 'fighting' ? ' bg-gray-400':''} 
       ${data?.types[0].type.name == 'ghost' ? ' bg-purple-400':''}
        ${data?.types[0].type.name == 'rock' ? ' bg-zinc-400':''} 
        ${data?.types[0].type.name == 'psychic' ? ' bg-amber-400':''} 
      pt-5 px-5
    `}>
      <Link href={'/Pokedex'}>
        <BiChevronLeft  className='w-10 h-10 cursor-pointer'/>
      </Link>
        <div className={`h-[60vh] relative
        ${data?.types[0].type.name == 'fire' ? ' bg-red-400':''} 
        ${data?.types[0].type.name == 'water' ? ' bg-blue-400':''} 
        ${data?.types[0].type.name == 'grass' ? ' bg-green-400':''} 
        ${data?.types[0].type.name == 'bug' ? ' bg-orange-400':''} 
        ${data?.types[0].type.name == 'normal' ? ' bg-cyan-400':''} 
        ${data?.types[0].type.name == 'poison' ? ' bg-violet-400':''} 
        ${data?.types[0].type.name == 'ground' ? ' bg-stone-400':''} 
        ${data?.types[0].type.name == 'electric' ? ' bg-yellow-400':''} 
        ${data?.types[0].type.name == 'fairy' ? ' bg-pink-400':''}
        ${data?.types[0].type.name == 'fighting' ? ' bg-gray-400':''} 
       ${data?.types[0].type.name == 'ghost' ? ' bg-purple-400':''}
        ${data?.types[0].type.name == 'rock' ? ' bg-zinc-400':''} 
        ${data?.types[0].type.name == 'psychic' ? ' bg-amber-400':''} 
  
        flex-wrap
        flex items-center justify-center`}>
            <svg id="Layer_1" 
                className={`       
                w-80 opacity-10 h-80 hidden
                absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`
                }
                data-name="Layer 1" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 859 858.94">
                    <title>1</title>
                    <path d="M1125,728.09c-22.82-11.92-47.94-14-72.71-16.74-84.93-9.42-170.26-11.81-255.62-13.15-5.36-.09-8-1.35-9.92-6.9-14.29-41-48.95-66-90.57-65.85-41.33.15-75.93,25.16-89.91,65.51-1.82,5.25-4,7.22-9.67,7.26q-96.89.76-193.54,7.64c-38,2.71-76.09,5.51-113.39,14.27a84.58,84.58,0,0,0-23.29,9.3c2-148.63,58.91-268.51,177.75-356.3C587,267.59,779.53,265.46,923.93,356.06,1077.85,452.62,1130.47,613.81,1125,728.09Z" transform="translate(-266.42 -290.87)"/><path d="M533.21,745.16c20.79,0,41.59.18,62.39-.12,5.61-.08,8.69.94,11,6.9,15.11,39.73,49.91,64,90.43,63.82,40.85-.19,73.77-24.14,89.2-65.16,1.54-4.1,3.49-5.71,8-5.56,43.75,1.55,87.53,2.5,131.26,4.41,39.37,1.72,78.73,4.11,117.91,8.56,23.39,2.66,46.77,5.29,69.43,12.32,7.31,2.27,9.43,5.9,8.39,13.5C1098.25,950.46,969.57,1094.3,805.89,1136c-229.83,58.53-459.29-73.73-524.13-302.16-5-17.6-8.25-35.58-11.41-53.59-1-5.59,2-7.22,5.93-8.73,13.39-5.18,27.48-7.57,41.57-9.6,35.64-5.11,71.49-8.17,107.45-10s71.92-3.69,107.88-5.53Zm534.1,63.39c-10.66-1.4-20.75-3-30.9-4-68.32-6.69-136.89-8.93-205.45-11.39-8-.28-12.59,2-17.3,8.77-58.2,83.65-179.81,82.34-236.3-2.41-3.15-4.72-6.29-6.57-11.93-6.36-76.6,2.88-153.26,4.4-229.42,14.52-9,1.2-10.44,3.5-8.14,11.83,15.89,57.44,42.31,109.4,82.63,153.34,94.88,103.36,212.71,145.16,351,123.29,95.38-15.09,173.32-63.17,233.79-138.69C1030.45,913.51,1054.16,863.88,1067.31,808.55Z" transform="translate(-266.42 -290.87)"/><path d="M763.45,720.79a67,67,0,1,1-133.92-.88c.2-36.61,30.49-66.4,67.38-66.26C733.56,653.78,763.53,684,763.45,720.79Z" transform="translate(-266.42 -290.87)"/>
            </svg>

            <div className='absolute opacity-5 text-[20rem] font-bold'>
              <h1>#001</h1>
            </div>

            <div className="info z-10">
                <div className="flex text-white">
                    {
                    data?.types?.map((type: any, i: string)=>(
                    <p 
                    key={i}
                    className={`
                    ${data?.types[0].type.name == 'fire' ? 'bg-red-300':''} 
                    ${data?.types[0].type.name == 'water' ? 'bg-blue-300 ':''} 
                    ${data?.types[0].type.name == 'grass' ? 'bg-green-300':''}
                    ${data?.types[0].type.name == 'bug' ? 'bg-orange-300 ':''} 
                    ${data?.types[0].type.name == 'normal' ? 'bg-cyan-300 ':''} 
                    ${data?.types[0].type.name == 'poison' ? 'bg-violet-300 ':''} 
                    ${data?.types[0].type.name == 'ground' ? 'bg-stone-300 ':''} 
                    ${data?.types[0].type.name == 'ground' ? ' bg-stone-300':''} 
                    ${data?.types[0].type.name == 'electric' ? ' bg-yellow-300':''} 
                    ${data?.types[0].type.name == 'fairy' ? ' bg-pink-300':''}
                    ${data?.types[0].type.name == 'fighting' ? ' bg-gray-300':''} 
                  ${data?.types[0].type.name == 'ghost' ? ' bg-purple-300':''}
                    ${data?.types[0].type.name == 'rock' ? ' bg-zinc-300':''} 
                    ${data?.types[0].type.name == 'psychic' ? ' bg-amber-300':''} 
                    rounded-full  
                    flex items-center w-fit px-2 m-1 justify-center capitalize
                    `}>{type.type.name}</p>
                ))
                    }
                </div>
                <motion.div className="measures"
                animate={{ x: [-200,0] }}
                transition={{ duration: 1 }}
                >
                <p className='capitalize text-8xl font-bold text-white'>{data?.name}</p>
                <p className='text-white text-xl flex justify-between'>
                <span>Weight:</span> 
                <span>{data?.weight} KG</span>
                </p>
                <p className='text-white text-xl flex justify-between'>
                    <span>Height:</span> 
                    <span>{data?.height}0 Cm</span>
                </p>
                </motion.div>
            </div>
            <motion.div
            animate={{ opacity: [0,1] }}
            transition={{ duration: 0.5 }}>
            <img 
            src={`https://monikode.github.io/pokedex/assets/pokemon/${router.query.Pokemon}.png`}
            className={'w-[250px] h-[250px] z-10 '}
            />
            </motion.div>
        </div>
        <div className=" flex-col  flex items-center justify-center text-white">
          <div>
            <h1>Stats</h1>
          </div>
          {
            data?.stats.map((stat:any)=>(
              <div 
              className='w-[80%] m-5 '
              key={stat.stat.name}> 
              <div className="flex items-center gap-3">
                <p className='capitalize font-bold'>{stat.stat.name}</p>
                <p className='text-xl'>{stat.base_stat}</p>
              </div>
              <ProgressBar 
              
              bgColor={`
                    ${data?.types[0].type.name == 'fire' ? 'red':''} 
                    ${data?.types[0].type.name == 'water' ? 'blue':''} 
                    ${data?.types[0].type.name == 'grass' ? 'green':''}
                    ${data?.types[0].type.name == 'bug' ? 'orange':''} 
                    ${data?.types[0].type.name == 'normal' ? 'cyan':''} 
                    ${data?.types[0].type.name == 'poison' ? 'violet':''} 
                    ${data?.types[0].type.name == 'ground' ? 'stone':''} 
                    ${data?.types[0].type.name == 'electric' ? 'yellow':''} 
                    ${data?.types[0].type.name == 'fairy' ? 'pink':''}
                    ${data?.types[0].type.name == 'fighting' ? 'gray':''} 
                  ${data?.types[0].type.name == 'ghost' ? 'purple':''}
                    ${data?.types[0].type.name == 'rock' ? 'zinc':''} 
                    ${data?.types[0].type.name == 'psychic' ? 'amber':''} 
                    `}
              animateOnRender 
              isLabelVisible={false}
              completed={stat.base_stat} />
              </div>
            ))
          }

        </div>
        <div className='w-full h-32 bg-slate-300 rounded-t-full'>

        </div>
    </div>
  )
}
