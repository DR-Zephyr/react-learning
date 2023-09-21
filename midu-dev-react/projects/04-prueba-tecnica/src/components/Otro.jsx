//
import { useCatImage, useCatFact } from '../hooks'

export const Otro = () => {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  return (
    <>
      {imageUrl && (
        <img
          src={imageUrl}
          alt='Image extracted from the cat fact'
        />
      )}
    </>
  )
}
