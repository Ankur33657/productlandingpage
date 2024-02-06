import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./components/Home";
import Category from "./components/Category";
import Reel from "./components/Reel";
import Account from "./components/Account";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="Reel" component={Reel} />
      <Tab.Screen name="Account" component={Account} />

      
    </Tab.Navigator>
    </NavigationContainer>
  );
}

