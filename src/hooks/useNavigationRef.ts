import { useContext } from 'react'
import NavigationContext from '~/context/navigation'

function useNavigationRef() {
  return useContext(NavigationContext)
}

export { useNavigationRef }
