import React from 'react'
import { IProps } from './Icons.types'

import {
  // IconHome,
  IconSearch,
  IconCategories,
  IconFavorite,
  IconLike,
  IconNew,
  IconViewed,
  IconCatalog,
  IconAccount,
  IconSetting,
  IconRating,
  IconMicrophone
} from './list'

function Icon({ name, ...props }: IProps) {
  switch (name) {
    case 'Search':
      return <IconSearch {...props} />
    case 'Categories':
      return <IconCategories {...props} />
    case 'Catalog':
      return <IconCatalog {...props} />
    case 'NewMovie':
      return <IconNew {...props} />
    case 'TopMovie':
      return <IconLike {...props} />
    case 'Viewed':
      return <IconViewed {...props} />
    case 'Favorites':
      return <IconFavorite {...props} />
    case 'Rating':
      return <IconRating {...props} />
    case 'Microphone':
      return <IconMicrophone {...props} />
    default:
      return null
  }
}

export default Icon
