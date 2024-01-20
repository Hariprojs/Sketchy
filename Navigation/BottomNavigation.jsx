import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home'
import ManageAddress from '../Screens/ManageAddress'
import Signin from '../Screens/Signin'
import { MaterialIcons } from '@expo/vector-icons'
import AddAddress from '../Screens/AddAddress'

const Tab = createBottomTabNavigator()

const BottomNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name='home' color={color} size={25} />
                    ),
                    tabBarActiveTintColor: '#008445',
                }}
                name='home'
                component={Home}
            />
            <Tab.Screen
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name='widgets' color={color} size={25} />
                    ),
                    tabBarActiveTintColor: '#008445',
                }}
                name='manageAddress'
                component={ManageAddress}
            />
            <Tab.Screen
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name='notifications' color={color} size={25} />
                    ),
                    tabBarActiveTintColor: '#008445',
                }}
                name='AddAddress'
                component={AddAddress}
            />
            <Tab.Screen
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name='person' color={color} size={25} />
                    ),
                    tabBarActiveTintColor: '#008445',
                }}
                name='signin'
                component={Signin}
            />
        </Tab.Navigator>
    )
}

export default BottomNavigation
