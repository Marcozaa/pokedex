import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Category from '../components/Category'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-200 ">
      <Head>
        <title>Pokedex</title>
        <link 
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" 
        rel="stylesheet"/>
        <link rel="icon" href="https://i.pinimg.com/originals/1b/41/20/1b412053a7b59ab47149a3eb59e5804d.png" />
      </Head>

      <main 
      className="flex w-full flex-1 flex-col items-center 
      rounded-b-[200px] bg-white text-start
      justify-center px-20 text-center">
        <h1 className="lg:text-4xl font-bold md:text-2xl sm:text-2xl">
          What{' '}
          <a className="text-blue-600">
            Pokemon{' '}
          </a>
          Are you looking for?
        </h1>

        


        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <Category 
          name={'Pokedex'} 
          color={true}/>
          <Category 
          name={'Moves'}
          color ={false} />

          
        </div>
      </main>

    </div>
  )
}

export default Home
