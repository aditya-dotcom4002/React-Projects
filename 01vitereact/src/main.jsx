import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
        <h1> Custom App </h1>
    </div>
  )
}


// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'> Visit Google </a>
) 
 


const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target:'_blank' },
    'click me to visit googly'
)

createRoot(document.getElementById('root')).render(
  
  //  reactElement //This is how we call any element without giving any brackets .Just by simply writing the name of the element
  
  <App/>
)

