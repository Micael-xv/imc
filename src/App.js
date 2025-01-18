import { useState } from 'react'; // importando o useState do react, para que eu possa usar o estado no componente
import './app.css'; // importando o css, para que ele seja renderisado na tela

export default function App() { // isso é um componente e precisar ser esportado, então é usado o export default, e é importado no index.js
  const [peso, setPeso] = useState(''); 
  const [altura, setAltura] = useState(''); 

  return ( // dentro do return eu coloco o que eu quero que seja renderisado!
    <div className="app">
      <h1>Calculadora de imc</h1>
      <span>Vamos calcular seu imc</span>

      <div className="area-input">
        <input 
          type="text" 
          placeholder="Peso em (kg) Ex: 75"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <input 
          type="text"
          placeholder="Altura em (cm) Ex: 185" 
          value={altura}
          onChange={(e) => setAltura(e.target.value)} // target propriedade do evento que representa o elemento que disparou o evento
        />
        <button>Calcular</button>
      </div>
      <h2>Seu imc foi 25, você esta abaixo do peso!</h2>
    </div>
  )
}