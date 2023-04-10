import type {
  CompositeScreenProps,
  NavigatorScreenParams
} from '@react-navigation/native'

export type RootStackParamList = {
  NewMovie: undefined
  NotFound: undefined
}

export enum StackName {
  root = 'ScreenWithLayoutNavigation',
  videoplayer = 'VideoPlayerScreen'
}
