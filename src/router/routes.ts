import { Routes } from './routes.types'

import {
  CatalogScreen,
  NewMovieScreen,
  TopMovieScreen,
  VideoPlayerScreen,
  SearchScreen,
  CardScreen,
  CategoriesScreen,
  ViewedScreen
  // FavoritesScreen,
  // AuthenticationScreen,
  // SettingsScreen,
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
  categories: {
    name: Routes.categories,
    component: CategoriesScreen
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
  },
  viewed: {
    name: Routes.viewed,
    component: ViewedScreen
  }
}

export { Routes, defaultRoute, ROUTE_COMPONENTS }
