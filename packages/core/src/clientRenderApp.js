/* eslint-disable import/no-import-module-exports */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { primer } from '@papillonads/components'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { checkAccessibilityIssues } from '@papillonads/library/a11y'
import { startPagePath } from './route/path'
import { appRootRoute, listCarPageRoute, bestCarPageRoute, notFoundPageRoute } from './route'
import { clientAppStore } from './store/client'

/* istanbul ignore next */
export function App() {
  const { ErrorBoundary } = primer

  return (
    <ErrorBoundary>
      <Provider store={clientAppStore}>
        <BrowserRouter>
          <Routes>
            <Route path={appRootRoute.path} element={<Navigate to={startPagePath} />} />
            <Route path={listCarPageRoute.path} element={listCarPageRoute.clientComponent()} />
            <Route path={bestCarPageRoute.path} element={bestCarPageRoute.clientComponent()} />
            <Route path="*" element={notFoundPageRoute.clientComponent()} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  )
}

/* istanbul ignore next */
function renderApp() {
  checkAccessibilityIssues(React, ReactDOM, 1000)

  ReactDOM.hydrateRoot(document.getElementById('app'), <App />)

  if (module.hot) {
    module.hot.accept()
  }
}

renderApp()
