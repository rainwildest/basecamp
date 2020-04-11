import React from 'react'
import { useRouter } from 'next/router'

import BgLayout from '../components/bg-layout'
const affairsDetails = () => {
  const router = useRouter()

  return (
    <BgLayout multipage={router.query.multipage}>
      jdflksjfkl
    </BgLayout>
  )
}

export default affairsDetails
