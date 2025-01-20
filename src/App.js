import { useState } from 'react'; // importando o useState do react, para que eu possa usar o estado no componente
import './app.css'; // importando o css, para que ele seja renderisado na tela

// isso é um componente e precisar ser esportado, então é usado o export default, e é importado no index.js
export default function App() { 
  const [peso, setPeso] = useState(''); 
  const [altura, setAltura] = useState(''); 

  const [mensagem, setMensagem] = useState('');

  function calcularIMC() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.6) {
      setMensagem('Você esta abaixo do peso! Seu IMC: ' + imc.toFixed(2))
    } else if (imc >= 18.6 && imc < 24.9) {
      setMensagem('Você esta no peso ideal! Seu IMC: ' + imc.toFixed(2))
    } else if (imc >= 25 && imc < 29.9) {
      setMensagem(' Vocé esta levemente acima do peso! Seu IMC: ' + imc.toFixed(2))
    } else if (imc > 34.9) {
      setMensagem('Cuidado obesidade! Seu IMC: ' + imc.toFixed(2))
    }
  }
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
        <button onClick={calcularIMC}>
          Calcular
        </button>
      </div>
      <h2>{mensagem}</h2>
    </div>
  )
}