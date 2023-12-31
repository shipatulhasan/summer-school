import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthProvider'

export const useRole = (email) => {
  const { logOut } = useContext(AuthContext)
  const [role, setRole] = useState('')
  const [roleLoading, setRoleLoading] = useState(true)

  useEffect(() => {
    if (email) {
      fetch(`${import.meta.env.VITE_APP_api}/user/${email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('music-school-token')}`
        }
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            return logOut()
              .then(() => {})
              .catch((err) => console.error(err.message))
          }
          return res.json()
        })
        .then((data) => {
          setRole(data?.role)
          setRoleLoading(false)
        })
    }
  }, [email, logOut])
  return { role, roleLoading }
}
