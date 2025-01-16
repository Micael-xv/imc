export default function App() { // isso é um componente e precisar ser esportado, então é usado o export default, e é importado no index.js
  return ( // dentro do return eu coloco o que eu quero que seja renderisado!
    <div className="app">
      <h1>Calculadora de imc</h1>
      <span>Vamos calcular seu imc</span>

      <div className="area-input">
        <input 
          type="text" 
          placeholder="Peso em (kg) Ex: 75" 
        />
        <input 
          type="text" 
          placeholder="Altura em (cm) Ex: 185" 
        />
        <button>Calcular</button>
      </div>
    </div>
  )
}