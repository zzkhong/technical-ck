import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactPage from 'contact/ContactPage';
import EditContactPage from 'editContact/EditContactPage';
import { Colors } from 'common/styles';
import { verticalScale } from 'common/styles/scales';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: Colors.lightGrey,
    elevation: 0,
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1,
    height: verticalScale(50),
  },
});

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.headerStyle,
        headerTitleAlign: 'center',
      }}
    >
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
