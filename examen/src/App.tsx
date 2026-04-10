import {Card, Search} from './components'
import {useDigimon} from './hooks'
import './App.css'

function App() {
  const {digimon, setFiltro} = useDigimon();

  return (
    <>
      <Search 
      alEscribir ={(valor) => setFiltro(valor)}/>
    {
      digimon.map((p)=> (
        <Card
        nombre = {p.nombre}
        imagen = {p.imagen}
        nivel = {p.nivel}
        />
      ))
    }
    </>
  )
}

export default App
