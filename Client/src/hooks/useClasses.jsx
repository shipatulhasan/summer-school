import { useEffect, useState } from 'react'

export const useClasses = () => {
  const [classes, setclasses] = useState([])
  const [catLoading, setCatLoading] = useState(false)

  useEffect(() => {
    setCatLoading(true)
    fetch(`${import.meta.env.VITE_APP_api}/approved-classes`)
      .then((res) => res.json())
      .then((data) => {
        setclasses(data)
        setCatLoading(false)
      })
  }, [])

  return [classes, catLoading]
}
