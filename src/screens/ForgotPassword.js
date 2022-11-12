import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';

export default class ForgotPassword extends React.Component{

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
                >Forgot Password</Text>

                <Text
                    style={{
                    fontFamily:"SemiBold",
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.4
                }}
                >
                    Please Enter Your Email Here!
                </Text>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    // borderWidth:2,
                    borderBottomWidth:1,
                    marginTop:40,
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
                    }}>Reset Password</Text>
                </View>
            </View>
        )
    }
}