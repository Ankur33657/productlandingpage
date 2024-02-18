import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Comment from "./Comment";
import Navigation from "./Navigation";

;
const Stack =()=>{
    const Stack = createNativeStackNavigator();
    return(
     <NavigationContainer>
         <Stack.Navigator initialRouteName='Navigation'
        >
           <Stack.Screen name="Instagram" component={Navigation}  /> 
           <Stack.Screen name="Comment" component={Comment} />
    
      </Stack.Navigator>
     </NavigationContainer>
    );
}
export default Stack;