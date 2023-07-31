import { useEffect, useState } from 'react';
import { getMovices } from '../services'
import { Actor } from '../components/Actor';
import { Review } from '../components/Star';

interface movieDTO {
  id: number;
  name: string;
  description: string;
  actor: string;
  star: number;
}

export const Home = () => {
  const [ movies , setMovies ] = useState<movieDTO[]>([])
  const [ textMovies, setTextMovies ] = useState<any>('')


   const handleText = (text: string) => {
    setTextMovies(text)
    getMoviesFunction()
   }

   const clean = () => {
    setTextMovies('');   
  }

  const getMoviesFunction = async () => {
    const movies = await getMovices(textMovies);
    setMovies(movies)
  }

  useEffect(() => {
    getMoviesFunction();
  }, [])
   
  return (
    <div className="flex flex-col flex-1 bg-slate-100">

 
      <div className='p-8'>

       <div className='flex flex-col items-center'>
              <div className="w-full flex justify-center ">
                    <p className="font-bold	text-[30px]">WireFrame NTT</p>
              </div>
              <div className="w-full flex justify-center">
                    <p className="font-normal	text-[15x]">Veja lista de filmes e suas sinopses</p>
              </div>
              <div className='flex items-center justify-start p-6 w-[1200px]'>
                 <div className="w-full">
                   <input onChange={(e) => handleText(e.target.value)} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pesquisa" required />
                 </div>
                 <div className="w-[100px] flex justify-center  mx-4">
                   <button className="rounded-full bg-primary px-8 py-2 text-white">Search</button>
                 </div>
                 <div className="w-[100px] flex justify-center mx-4">
                   <button onClick={() => clean()} className="rounded-full  bg-primary px-8 py-2 text-white">Reset</button>
                 </div>
              </div>
        </div>    

        <div className='flex flex-col  items-center'>

          {
            movies.length > 0 &&
            movies.map((item: movieDTO) => {
                return (
                  <div key={item.id} className="flex w-[1200px] justify-start  my-4">
                    <div className="w-[70%]">
                      <p className="font-bold	text-[30px]">{item.name}</p>
                      <p className="font-normal	text-[15x]  my-4 text-justify pr-4">
                      {item.description}
                      </p>
                      <Actor actor={String(item.actor)}/>
                      <Review review={item.star}/>
                      <button className="rounded-full bg-primary px-8 py-2 text-white">Favorite</button>
                    </div>
                    <div className="w-[30%]">
                      <img width={'90%'} src="https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/1737352/2467906/api1hb56r__32054.1625667051.jpg?c=2" />
                    </div>
                </div>  
                )
            })
          }

        </div>

      </div>
    </div>
  )
}