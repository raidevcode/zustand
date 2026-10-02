import { useEffect } from 'react'
import { useUsersStore } from '../store/useUsersStore'

export default function Users() {
  const { users, isPending, isError, getData } = useUsersStore()

  useEffect(() => getData(), [getData])

  return (
    <ul className="w-62.5 flex flex-col items-center text-white gap-y-2">
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
