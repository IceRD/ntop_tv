import { Routes } from './routes'

enum MenuTitle {
  search = 'Поиск',
  catalog = 'Каталог фильмов',
  topmovie = 'Топ недели',
  newmovie = 'Новинки',
  viewed = 'Просмотренные',
  favorites = 'Избранное'
}

const MENU = [
  {
    title: MenuTitle.search,
    link: Routes.search
  },
  {
    title: MenuTitle.newmovie,
    link: Routes.newmovie
  },
  {
    title: MenuTitle.topmovie,
    link: Routes.topmovie
  },
  {
    title: MenuTitle.catalog,
    link: Routes.catalog
  }
]

export { MenuTitle, MENU }
