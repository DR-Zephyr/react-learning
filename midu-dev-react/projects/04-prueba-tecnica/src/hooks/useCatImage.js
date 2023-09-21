import { useState, useEffect } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/'

export function useCatImage({ fact }) {
  //
  const [imageUrl, setImageUrl] = useState()
  //
  useEffect(() => {
    if (!fact) return

    const THREE_FISRT_WORDS = fact.split(' ', 3).join(' ')
    const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${THREE_FISRT_WORDS}?json=true`

    fetch(CAT_ENDPOINT_IMAGE_URL)
      .then((response) => response.json())
      .then((data) => {
        const { url } = data
        setImageUrl(CAT_PREFIX_IMAGE_URL + url)
      })
  }, [fact])

  return { imageUrl }
}
