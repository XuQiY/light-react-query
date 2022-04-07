import React from 'react'
import Query from './query'

export const context = React.createContext({} as Query)

export function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const queryRef = React.useRef<Query>(new Query())
  return (
    <context.Provider value={queryRef.current}>{children}</context.Provider>
  )
}
