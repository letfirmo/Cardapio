import hashtaurante from "./assets/hashtaurante.webp"
import './App.css'
import { Navegacao } from "./Navegacao.jsx"
import { ItemCardapio } from "./ItemCardapio.jsx"

export function App() {
  return <>
    <img src={hashtaurante} alt="varanda de um restaurante com mesas postas" className="capa"/>
    <Navegacao />
    <ItemCardapio />
    <ItemCardapio />
    <ItemCardapio />
    <ItemCardapio />
  </>
}