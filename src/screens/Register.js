import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';

export default class Register extends React.Component{

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                {/* <Image source ={require('../images/image.jpg')}
                    style={{width:"100%",height:"43%"}}
                /> */}
                <Text
                    style={{
                    fontSize:30,
                    fontFamily:"SemiBold",
                    alignSelf:"center",
                    paddingVertical:100
                 }}
                >Sign Up</Text>

                <Text
                    style={{
                    fontFamily:"SemiBold",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >First create your account</Text>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    // borderWidth:2,
                    borderBottomWidth:1,
                    marginTop:30,
                    paddingHorizontal:10,
                    borderColor:"black",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                  
                    <TextInput 
                        placeholder="Full Name"
                        placeholderTextColor="black"
                        style={{paddingHorizontal:10}}
                    />                 
                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    // borderWidth:2,
                    borderBottomWidth:1,
                    marginTop:15,
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
                <View 
                    style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    // borderWidth:2,
                    borderBottomWidth:1,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"black",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                   
                   <TextInput 
                        secureTextEntry
                        placeholder="Password"
                        placeholderTextColor="black"
                        style={{paddingHorizontal:10}}
                    />   
                {/* <Feather 
                    name="eye-off"
                    size={15}
                /> */}
                </View>
                <View 
                    style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    // borderWidth:2,
                    borderBottomWidth:1,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"black",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                   
                   <TextInput 
                        secureTextEntry
                        placeholder="Confirm Password"
                        placeholderTextColor="black"
                        style={{paddingHorizontal:10}}
                    />
                {/* <Feather 
                    name="eye-off"
                    size={15}
                /> */}
                </View>

                <View 
                    style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"black",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text 
                        onPress={()=>navigate('Login')}style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}>Sign Up</Text>
                </View>     

                <Text
                    style={{
                    alignSelf:"center",
                    color:"black",
                    fontFamily:"SemiBold",
                    paddingVertical:30,
                }}>Already have an account? 

                <Text 
                    onPress={()=>navigate('Login')}
                    style={{
                    alignSelf:"center",
                    color:"red",
                    fontFamily:"SemiBold",
                    paddingVertical:0,
            }}>  Login</Text>    
            </Text>                          
            </View>
        )
    }
}
