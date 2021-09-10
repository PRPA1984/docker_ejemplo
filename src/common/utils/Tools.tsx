import { useState } from "react"
import { RouteComponentProps } from "react-router-dom"

export function goHome(props: RouteComponentProps) {
  props.history.push("/")
}

export function goToPath(props: RouteComponentProps, path:string) {
  props.history.push(path)
}


export function useForceUpdate(): () => any {
  const setForceUpdate = useState(0)[1]

  return () => {
    setForceUpdate(Date.now)
  }
}
