import './css/build.css'
import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {
  const [nutri, setNutri] = useState([])

  let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setNutri(response.data)
      }).catch (error => console.log(error))
  }, [])

  return (
    <div className="App">
      <header>
        <h1 className='font-bold text-center text-white w-screen text-2xl bg-blue-400 h-16 flex justify-center items-center'>React Nutri</h1>
      </header>

      {nutri.length > 0 && 
        nutri.map(n => {
          return (
            <article className='mx-auto w-2/3 grid place-items-center border-b border-gray-400 my-2' key={n.id}>
              <h3 className='font-bold my-2'>{n.titulo}</h3>
              <img src={n.capa} alt={n.titulo} className='rounded border-white'/>
              <p className='text-xs mt-1'>{n.subtitulo}</p>
              <div className="grid place-items-center mb-5">
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded cursor-pointer mt-2 transition duration-500'>Acessar</button>
              </div>
            </article>
          )
        })}
    </div>
  );
}

export default App;

// https://sujeitoprogramador.com/rn-api/?api=posts
