import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GuestScreen, AddMenuScreen, EditMenuScreen } from '../screens';

const Tab = createBottomTabNavigator();

const AppNavigator = ({ menuData, setMenuData }) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: '#000' },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#aaa',
        }}
      >
        <Tab.Screen name="Guest">
          {() => <GuestScreen menuData={menuData} />}
        </Tab.Screen>
        <Tab.Screen name="Add Menu Items">
          {() => <AddMenuScreen setMenuData={setMenuData} />}
        </Tab.Screen>
        <Tab.Screen name="Edit Menu">
          {() => <EditMenuScreen menuData={menuData} setMenuData={setMenuData} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

