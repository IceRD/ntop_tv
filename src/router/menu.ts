import { Routes } from './routes'

enum MenuTitle {
  search = 'Поиск',
  catalog = 'Каталог фильмов',
  categories = 'Категории',
  topmovie = 'Топ недели',
  newmovie = 'Новинки'
  // viewed = 'Просмотренные',
  // favorites = 'Избранное'
}

const MENU = [
  {
    title: MenuTitle.search,
    link: Routes.search
  },
  {
    title: MenuTitle.categories,
    link: Routes.categories
  },
  {
    title: MenuTitle.catalog,
    link: Routes.catalog
  },
  {
    title: MenuTitle.newmovie,
    link: Routes.newmovie
  },
  {
    title: MenuTitle.topmovie,
    link: Routes.topmovie
  }
]

export { MenuTitle, MENU }
