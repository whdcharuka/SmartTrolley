import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';

export default class Login extends React.Component{

    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                {/* <Image source ={require('../images/image.jpg')}
                    style={{width:"100%",height:"43%",align:"center"}}
                /> */}
                <Text
                    style={{
                    fontSize:30,
                    fontFamily:"SemiBold",
                    alignSelf:"center",
                    paddingVertical:100
                 }}
                >Sign In</Text>

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
                    // borderWidth:2,
                    borderBottomWidth:1,
                    marginTop:30,
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
                    // borderWidth:2,
                    borderBottomWidth:1,
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
                    }}>LOGIN</Text>
                </View>
                <Text 
                    onPress={()=>navigate('ForgotPassword')}
                    style={{
                    alignSelf:"center",
                    color:"red",
                    fontFamily:"SemiBold",
                    paddingVertical:30,
                }}>Forgot Password?</Text>

                {/* <Text 
                    onPress={()=>navigate('Register')}
                    style={{
                    alignSelf:"center",
                    color:"black",
                    fontFamily:"SemiBold",
                    paddingVertical:0
                }}>New User</Text> */}
            </View>
        )
    }
}