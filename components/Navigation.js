import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from "./Home";
import Category from "./Category";
import Reel from "./Reel";
import Account from "./Account";

const Navigation =()=>{
    const Tab = createBottomTabNavigator();
    return(
        
        <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Shopping"  component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="shoppingcart" color={color} size={size} />
            ),
          }} />
          <Tab.Screen name="Category" component={Category} 
           options={{
            tabBarIcon: ({ color, size }) => (
              <Icon1 name="category" color={color} size={size} />
            ),
          }} />
          <Tab.Screen name="Reel" component={Reel} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon1 name="live-tv" color={color} size={size} />
            ),
          }}/>
          <Tab.Screen name="Account" component={Account}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon2 name="account" color={color} size={size} />
            ),
          }}  />
    
          
        </Tab.Navigator>
        </NavigationContainer>
       
    );
}
export default Navigation;