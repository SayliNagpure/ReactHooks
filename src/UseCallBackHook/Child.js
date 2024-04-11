import React, { memo } from 'react'

const Child = ({data}) => {
    console.log('child call')
  return (
    <div>Child</div>
  )
}

export default memo(Child)