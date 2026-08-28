import { useEffect } from 'react'
import { useCountStore } from '../store/useCountStore'
import { Button } from './__shared/button'

const decrement5 = () =>
  useCountStore.setState(({ count }) => ({ count: count - 5 }))

const logCount = () => console.log(useCountStore.getState().count)

export const Count = () => {
  const { count, increment, decrement, reset } = useCountStore(store => store)

  useEffect(() => logCount(), [])

  return (
    <div>
      <h1 className="text-xl text-white text-center mb-2">
        Count: <span className="font-bold">{count}</span>
      </h1>
      <div className="flex items-center gap-x-2">
        <Button
          width={80}
          title="+"
          color="#fff"
          backgroundColor="#09f"
          onPress={increment}
        />
        <Button
          width={80}
          title="0"
          color="#fff"
          backgroundColor="#09f"
          onPress={reset}
        />
        <Button
          width={80}
          title="-"
          color="#fff"
          backgroundColor="#09f"
          onPress={decrement}
        />
        <Button
          width={80}
          title="- 5"
          color="#fff"
          backgroundColor="#09f"
          onPress={decrement5}
        />
      </div>
    </div>
  )
}
