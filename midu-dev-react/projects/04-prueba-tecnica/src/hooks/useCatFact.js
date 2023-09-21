import { useState, useEffect } from 'react'
import { getCatFact } from '../Services/facts'

export function useCatFact() {
  const [fact, setFact] = useState()
  const refreshFact = async () => {
    //puedo hacerlo asi
    getCatFact().then(setFact)
    //Asi
    // handleClick()
    //O asi
    // const newFact = await getCatFact()
    // setFact(newFact)
  }

  useEffect(() => {
    refreshFact()
  }, [])

  return { fact, refreshFact }
}
