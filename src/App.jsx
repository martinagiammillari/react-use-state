// Dato un array di oggetti contenente i linguaggi del web e le loro descrizioni:

// Crea una lista di bottoni, uno per  linguaggio.
// Inserisci sotto una card che mostri il titolo e la descrizione del primo linguaggio nell’array.
// Fare in modo che, cliccando uno dei bottoni, la card in basso visualizzi il linguaggio corrispondente e la relativa descrizione




import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import languages from "./assets/languages"


export default function TextChanger() {



  return (
    <>
      <header>
        <div className="container mt-5">
          <h1>Learn web development</h1>
        </div>
      </header>


      <main>
        <button className="btn btn-warning mx-4">Warning</button>
        <button className="btn btn-primary">Primary</button>


        <div className="card my-4">
          <div className="card-body">
            This is some text within a card body.
          </div>
        </div>
      </main>


    </>
    )
}

export default App
