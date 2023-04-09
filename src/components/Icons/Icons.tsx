import React from 'react'
import { IProps } from './Icons.types'

import {
  // IconHome,
  IconSearch,
  IconCinema,
  IconFavorite,
  IconLike,
  IconNew,
  IconViewed,
  IconCatalog,
  IconAccount,
  IconSetting
} from './list'

function Icon({ name, ...props }: IProps) {
  switch (name) {
    case 'Search':
      return <IconSearch {...props} />
    case 'Catalog':
      return <IconCatalog {...props} />
    case 'Cinema':
      return <IconCinema {...props} />
    case 'NewMovie':
      return <IconNew {...props} />
    case 'TopMovie':
      return <IconLike {...props} />
    case 'Viewed':
      return <IconViewed {...props} />
    case 'Favorites':
      return <IconFavorite {...props} />
    default:
      return null
  }
}

export default Icon
