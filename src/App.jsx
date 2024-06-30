import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Container } from './components/Container'

function App() {

  const blogContent = [
    {
      id: 1,
      title: '17 de ago, 2024',
      subtitle: 'O que é linguagem de programação? Conheça as principais',
      content: 'Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.'
    },
    {
      id: 2,
      title: '24 de ago, 2024',
      subtitle: 'O que é linguagem de programação? Conheça as principais',
      content: 'Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.'
    },
    {
      id: 3,
      title: '21 de ago, 2024',
      subtitle: 'O que é linguagem de programação? Conheça as principais',
      content: 'Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.'
    },
    {
      id: 4,
      title: '31 de ago, 2024',
      subtitle: 'O que é linguagem de programação? Conheça as principais',
      content: 'Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.'
    },
  ]



  return (
   <>

<Header content={blogContent} />
<Container content={blogContent} />
   </>
  )
}

export default App
