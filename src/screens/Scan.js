import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
//import Icon from '@expo/vector-icons/AntDesign';

export default class Scan extends React.Component{

    render(){
        
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Text
                    style={{
                    fontSize:30,
                    fontFamily:"SemiBold",
                    alignSelf:"center",
                    paddingVertical:50
                 }}
                >Scan QR Code of the item that you want!</Text>               

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"black",
                    borderRadius:23,
                    paddingVertical:2
                }}>
            
                    <TextInput 
                        placeholder="Email"
                        placeholderTextColor="black"
                        style={{paddingHorizontal:10}}
                    />

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"black",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    
                    <TextInput 
                        placeholder="Password"
                        placeholderTextColor="black"
                        style={{paddingHorizontal:10}}
                    />
                </View>

                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"black",
                    paddingVertical:10,
                    borderRadius:23
                }}>

                 <Text 
                    onPress={()=>navigate('Scan')}
                    style={{
                    color:"white",
                    fontFamily:"SemiBold"
                    }}>Scan</Text>
                </View>
            </View>
        )
    }
}