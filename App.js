import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as Font from 'expo-font'
import Signup from './Screens/Signup'
import SignIn from './Screens/Signin'
import QuickOrder from './Screens/QuickOrder'
import DetailedOrder from './Screens/DetailedOrder'
import BottomNavigation from './Navigation/BottomNavigation'
import ManageAddress from './Screens/ManageAddress'

const Stack = createNativeStackNavigator()

export default function App() {
  const [fontLoad] = Font.useFonts({
    'custom-font': require('./assets/Fonts/BoxedRound.ttf'),
  })

  if (!fontLoad) {
    return undefined
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Signin' component={SignIn} />
        <Stack.Screen name='Home' component={BottomNavigation} />
        <Stack.Screen name='QuickOrder' component={QuickOrder} />
        <Stack.Screen name='DetailedOrder' component={DetailedOrder} />
        <Stack.Screen name='ManageAddress' component={ManageAddress} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}
