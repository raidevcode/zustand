import { useEffect } from 'react'
import { useCountStore } from '../store/useCountStore'
import Button from './button'

const inc5 = () => useCountStore.setState(state => ({ count: state.count + 5 }))

const dec5 = () => useCountStore.setState(state => ({ count: state.count - 5 }))

const logCount = () => console.log(useCountStore.getState().count)

export default function Count() {
  const { count, inc, dec, reset } = useCountStore()

  useEffect(() => logCount(), [])

  return (
    <div>
      <h1 className="text-xl text-white text-center mb-2">
        Count: <span className="font-bold">{count}</span>
      </h1>
      <div className="flex items-center gap-x-2">
        <Button
          width={80}
          title="+ 5"
          color="#fff"
          backgroundColor="#09f"
          onClick={inc5}
        />
        <Button
          width={80}
          title="+"
          color="#fff"
          backgroundColor="#09f"
          onClick={inc}
        />
        <Button
          width={80}
          title="0"
          color="#fff"
          backgroundColor="#09f"
          onClick={reset}
        />
        <Button
          width={80}
          title="-"
          color="#fff"
          backgroundColor="#09f"
          onClick={dec}
        />
        <Button
          width={80}
          title="- 5"
          color="#fff"
          backgroundColor="#09f"
          onClick={dec5}
        />
      </div>
    </div>
  )
}
