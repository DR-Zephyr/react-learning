import { Otro } from './components/Otro'
import { useCatImage, useCatFact } from './hooks/index'

export const App = () => {
  //Constantes internas
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })
  //cuerpo del componente

  const handleClick = async () => {
    refreshFact()
  }

  //retorno del componente
  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      <button onClick={handleClick}>Generate another fact</button>
      {imageUrl && (
        <img
          src={imageUrl}
          alt='Image extracted from the cat fact'
        />
      )}
      <Otro />
    </main>
  )
}
