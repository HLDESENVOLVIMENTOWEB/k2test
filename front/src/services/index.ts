interface movieDTO {
    id: number;
    name: string;
    description: string;
    actor: string;
    star: number;
  }


export const getMovices = async (textMovies = '') => {

  const  movies = await <movieDTO[]>[
    {
      id: 1,
      name: 'Takers',
      description: 'Um grupo de bandidos acostumado a executar assaltos a bancos sem deixar vestígios resolve se aposentar, mas para isso precisa realizar um último serviço que deve render uma bolada de 20 milhões de dólares. O único problema é que agora o detetive Jack Welles está disposto a encerrar a carreira deles e não vai medir esforços para colocá-los atrás das grades.',
      actor: 'Nome do actor',
      star: 4 
    },
    {
      id: 2,
      name: 'Takers 2',
      description: 'Um grupo de bandidos acostumado a executar assaltos a bancos sem deixar vestígios resolve se aposentar, mas para isso precisa realizar um último serviço que deve render uma bolada de 20 milhões de dólares. O único problema é que agora o detetive Jack Welles está disposto a encerrar a carreira deles e não vai medir esforços para colocá-los atrás das grades.',
      actor: 'Nome do actor',
      star: 4 
    },
    {
      id: 3,
      name: 'Takers 4',
      description: 'Um grupo de bandidos acostumado a executar assaltos a bancos sem deixar vestígios resolve se aposentar, mas para isso precisa realizar um último serviço que deve render uma bolada de 20 milhões de dólares. O único problema é que agora o detetive Jack Welles está disposto a encerrar a carreira deles e não vai medir esforços para colocá-los atrás das grades.',
      actor: 'Nome do actor',
      star: 4 
    }
  ]

  if(textMovies != '') {
    await movies.find((text) => text.name === textMovies)
  }
 
  return movies;
}
  