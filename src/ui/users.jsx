import { useEffect } from 'react'
import { useUsersStore } from '../store/useUsersStore'

export const Users = () => {
  const { users, isPending, isError, getData } = useUsersStore(store => store)

  useEffect(() => getData(), [])

  return (
    <ul className="w-[250px] flex flex-col items-center text-white gap-y-2">
      <span className="block w-full text-center rounded-[5px] py-1 mb-2 bg-[#09f]">
        Usuarios ⭐
      </span>
      {isPending ? (
        <span>cargando...</span>
      ) : isError ? (
        <span>error</span>
      ) : users.length === 0 ? (
        <span>no hay usuarios</span>
      ) : (
        users.map(({ id, name }) => <li key={id}>{name}</li>)
      )}
    </ul>
  )
}
