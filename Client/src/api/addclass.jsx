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
