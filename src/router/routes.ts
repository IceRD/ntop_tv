import { Routes } from './routes.types'

import {
  CatalogScreen,
  NewMovieScreen,
  TopMovieScreen,
  // ViewedScreen,
  // FavoritesScreen,
  VideoPlayerScreen,
  // AuthenticationScreen,
  // SettingsScreen,
  SearchScreen,
  CardScreen
} from '~/screens'

const defaultRoute = Routes.newmovie

const ROUTE_COMPONENTS = {
  search: {
    name: Routes.search,
    component: SearchScreen
  },
  newmovie: {
    name: Routes.newmovie,
    component: NewMovieScreen
  },
  topmovie: {
    name: Routes.topmovie,
    component: TopMovieScreen
  },
  catalog: {
    name: Routes.catalog,
    component: CatalogScreen
  },
  card: {
    name: Routes.card,
    component: CardScreen
  },
  videoplayer: {
    name: Routes.videoplayer,
    component: VideoPlayerScreen
  }
}

export { Routes, defaultRoute, ROUTE_COMPONENTS }
