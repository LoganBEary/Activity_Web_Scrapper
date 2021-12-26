import React from 'react'
import { Component, Suspense } from 'react/cjs/react.production.min'
const Out = React.lazy(() => import('../Components/Output'))
class Loading extends Component {
  render () {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Out sites={import('../data/data.json')} />
      </Suspense>
    )
  }
}
export default Loading
