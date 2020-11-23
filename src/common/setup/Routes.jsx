import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactPage from 'contact/ContactPage';
import EditContactPage from 'editContact/EditContactPage';

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Contact"
        component={ContactPage}
      />
      <Stack.Screen
        name="EditContact"
        component={EditContactPage}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
