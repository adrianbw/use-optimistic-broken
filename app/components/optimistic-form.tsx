'use client'

import { experimental_useOptimistic as useOptimistic, useRef } from 'react'

export function OptimisticForm() {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic<string[], string>(
    [],
    (state, newMessage) => [...state, newMessage]
  )
  const formRef = useRef<HTMLFormElement>(null)

  const send = (message: string) => Promise.resolve(() => { console.log(message) });

  return (
    <div>
      {optimisticMessages.map((m) => (
        <div>
          {m}
        </div>
      ))}
      <form
        action={async (formData) => {
          const message = formData.get('message')
          formRef.current?.reset()
          if (!message) return
          addOptimisticMessage(message as string)
          await send(message as string)
        }}
        ref={formRef}
      >
        <input type="text" name="message" />
      </form>
    </div>
  )
}
