import React from 'react'
import { defaultProps, propTypes } from './BestCarPage.prop'

const LazyBestCarPage = React.lazy(() => import('./BestCarPage'))

export function AsyncBestCarPage() {
  return (
    <React.Suspense fallback={null}>
      <LazyBestCarPage />
    </React.Suspense>
  )
}

AsyncBestCarPage.defaultProps = defaultProps

AsyncBestCarPage.propTypes = propTypes
