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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const language = languages[selectedIndex];

  return (
    <>
      <header>
        <div className="container mt-5">
          <h1>Learn web development</h1>
        </div>
      </header>

      <main>
        {languages.map((lang, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={index === selectedIndex ? "btn btn-warning mx-4" : "btn btn-primary mx-4"}
          >
            {lang.title}
          </button>
        ))}

        <div className="card my-4">
          <div className="card-body">
            <h5 className="card-title">{language.title}</h5>
            <p className="card-text">{language.description}</p>
          </div>
        </div>
      </main>
    </>
  );
}



