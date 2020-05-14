import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import PlaceListScreen from '../screens/PlacesListScreen'
import PlaceDetailScreen from '../screens/PlaceDetailScreen'
import MapScreen from '../screens/MapScreen'
import NewPlaceScreen from '../screens/NewPlaceScreen'
import Colors from '../constants/Colors'

const PlacesNavigator = createStackNavigator({
    Places: {
        screen: PlaceListScreen
    },
    PlaceDetail: {
        screen: PlaceDetailScreen
    },
    NewPlace: {
        screen: NewPlaceScreen
    },
    Map: {
        screen: MapScreen
    }
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
})

export default createAppContainer(PlacesNavigator)