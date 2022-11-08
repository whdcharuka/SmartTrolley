import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';

export default class Login extends React.Component{

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                {/* <Image source ={require('../images/download.jpg')}
                    style={{width:"10%",height:"10%",align:"center"}}
                /> */}
                <Text
                    style={{
                    fontSize:30,
                    fontFamily:"SemiBold",
                    alignSelf:"center",
                    paddingVertical:50
                 }}
                >Welcome Back</Text>

                <Text
                    style={{
                    fontFamily:"SemiBold",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                    Enter your email and password
                </Text>

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
                    }}>Login</Text>
                </View>
                <Text 
                    onPress={()=>navigate('ForgotPassword')}
                    style={{
                    alignSelf:"center",
                    color:"black",
                    fontFamily:"SemiBold",
                    paddingVertical:30
                }}>Forgot Password?</Text>

                <Text 
                    onPress={()=>navigate('Register')}
                    style={{
                    alignSelf:"center",
                    color:"black",
                    fontFamily:"SemiBold",
                    paddingVertical:1
                }}>New User</Text>
            </View>
        )
    }
}