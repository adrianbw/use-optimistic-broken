import { experimental_useOptimistic as useOptimistic, useRef } from 'react'

export function OptimisticForm() {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic<string[], string>(
    [],
    (state, newMessage) => [...state, newMessage]
  )

  const send = (message: string) => Promise.resolve(() => { console.log(message) });

  return (
    <div>
      {optimisticMessages.map((m) => (
        <div key={m}>
          {m}
        </div>
      ))}
      <form
        action={async (formData) => {
          const message = formData.get('message')
          if (!message) return
          addOptimisticMessage(message as string)
          await send(message as string)
        }}
      >
        <input type="text" name="message" />
      </form>
    </div>
  )
}
