import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactPage from 'contact/ContactPage';
import EditContactPage from 'editContact/EditContactPage';
import { Colors } from 'common/styles';
import { verticalScale } from 'common/styles/scales';
import { Dimensions, Platform, StyleSheet } from 'react-native';

const { height: SCREEN_HEIGHT} = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: Colors.lightGrey,
    elevation: 0,
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1,
    height: HEADER_HEIGHT,
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
