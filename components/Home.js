import React from "react";
import { View,Text,ScrollView,StyleSheet } from "react-native";
const Home =()=>{
    return (
        <ScrollView style={Styles.main}>
            <View style={Styles.b1}>
             <Text>Workspace</Text>
             <Text>Workspace</Text>
             <Text>Workspace</Text>
             <Text>Workspace</Text>

            </View>
            <View style ={Styles.b2}>
              <Text>Post</Text>
            </View>
            <View>
           
            </View>
        </ScrollView>
    );
}
const Styles=StyleSheet.create({
    main:{
         flex:1,
     
    },
    b1:{
       marginTop:10, 
       flexDirection:'row',
       backgroundColor:'red',
       justifyContent:'space-between',
       padding:10,
    },
    b2:{
    marginTop:20,
    height:600,
    backgroundColor:'blue',
    }
})
export default Home;