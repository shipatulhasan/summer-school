export const setClassToDB = async (newClasses) => {
  const res = await fetch(`${import.meta.env.VITE_APP_api}/classes`, {
    method: 'post',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('music-school-token')}`
    },
    body: JSON.stringify(newClasses)
  })
  const data = res.json()
  return data
}

export const setReportedProduct = async (product) => {
  const res = await fetch(
    `${import.meta.env.VITE_APP_api}/product/${product?._id}`,
    {
      method: 'put',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('music-school-token')}`
      },
      body: JSON.stringify(product)
    }
  )
  const data = res.json()
  return data
}
