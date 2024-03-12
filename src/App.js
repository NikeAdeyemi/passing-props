// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Projects from './pages/Projects'
// import Testimonials from './pages/Testimonials'

// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/about' element={<About/>}/>
//         <Route path='/projects' element={<Projects/>}/>
//         <Route path='/testimonials' element={<Testimonials/>}/>
//         <Route path='/contact' element={<Contact/>}/>
//       </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App

import React from 'react'
import Props from './components/Props'
import Nike from './components/Nike'
import Card from './components/Card'

const App = () => {
  const image1 = 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/19/042576/1.jpg?2247'
  const image2 = 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/82/432869/1.jpg?6409'
  const image3 = 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/73/8082552/1.jpg?0658'
  const image4 = 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/9033601/1.jpg?1693'
  const image5 = 'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/42/8097752/1.jpg?3184'
  return (
    <div>
      {/* <Props name='Adenike' job='web developer' worth='Billionaire' />
      <Props name='Ryan' job='Attorney' worth='Millionaire' />
      <Props name='Ashley' job='Registered Nurse' worth='Millionare' />
      <Props name='Nas' job='Chef' worth='Billionaire' />
      <Props name='Wyatt' job='Musician' worth='Billionaire' /> */}
      {/* <Nike name='Sunflower' job='Programmer' salary='500k' />
      <Nike name='Suki' job='Teacher' salary='150k' />
      <Nike name='Brian' job='Dancer' salary='300k' />
      <Nike name='Nicky' job='Designer' salary='500k' />
      <Nike name='Marie' job='actor' salary='75k' /> */}
      <div className='d-flex flex-wrap gap-4'>

      <Card image={image1} name="Brown ankle length footwear" description="Good for everyday use" price={30} />
      <Card image={image2} name="multicolor running footwear" description="Good for both indoor and outdoor run" price={100} />
      <Card image={image5} name="Crocs" description="A very comfortable and durable multipurpose footwear" price={15} />
      <Card image={image4} name="White and black sneakers" description="A very comfortable and durable multipurpose footwear" price={70} />
      <Card image={image3} name="Fashion footwear" description="Good for everyday use Good for everyday use" price={150} />
      </div>
    </div>
  )
}

export default App