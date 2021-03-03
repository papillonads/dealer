import { AsyncListCarPage, ListCarPage } from '../pattern/page/ListCarPage'
import { AsyncBestCarPage, BestCarPage } from '../pattern/page/BestCarPage'
import { AsyncNotFoundPage, NotFoundPage } from '../pattern/page/NotFoundPage'
import { appRootPath, listCarPagePath, bestCarPagePath } from './path'

export const appRootRoute = {
  path: appRootPath,
  exact: true,
}

export const listCarPageRoute = {
  path: listCarPagePath,
  exact: true,
  clientComponent: AsyncListCarPage,
  serverComponent: ListCarPage,
}

export const bestCarPageRoute = {
  path: bestCarPagePath,
  exact: true,
  clientComponent: AsyncBestCarPage,
  serverComponent: BestCarPage,
}

export const notFoundPageRoute = {
  clientComponent: AsyncNotFoundPage,
  serverComponent: NotFoundPage,
}
