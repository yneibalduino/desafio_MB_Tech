import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from '../screens/Home';
import { Payment } from '../screens/Payment';
import { EventDetails } from '../screens/EventDetails';
import { EventList } from '../screens/EventList';
import { Checkout } from '../screens/Checkout';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
  return(
    <Navigator screenOptions={{headerShown: false}}>
      <Screen 
        name='Home'
        component={Home}
      />
      <Screen 
        name='Payment'
        component={Payment}
      />
      <Screen 
        name='EventDetails'
        component={EventDetails}
      />
      <Screen 
        name='EventList'
        component={EventList}
      />
      <Screen 
        name='Checkout'
        component={Checkout}
      />
    </Navigator>
  )
}