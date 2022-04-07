import React from 'react'
import { useSelector } from 'react-redux'

export function Increment() {
    const inc = useSelector()
    return (
    <h1>
        Increment is {}
    </h1>
  )
}

export default Increment