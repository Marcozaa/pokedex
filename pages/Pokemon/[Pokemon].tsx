import React from 'react'
import { useRouter } from 'next/router'

export default function Pokemon() {
  const router = useRouter()
  const { pid } = router.query // Pokemon ID
  return (
    <div>Pokemon</div>
  )
}
