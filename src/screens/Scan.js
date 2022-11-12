// import React from 'react';
// import {Text,View,Image, TextInput} from 'react-native';
// import { BarCodeScanner } from 'expo-barcode-scanner';
// //import Icon from '@expo/vector-icons/AntDesign';

// export default class Scan extends React.Component{

//     render(){
        
//         return(
//             <View style={{backgroundColor:"#FFF",height:"100%"}}>
//                 <Text
//                     style={{
//                     fontSize:30,
//                     fontFamily:"SemiBold",
//                     alignSelf:"center",
//                     paddingVertical:50
//                  }}
//                 >Scan QR Code of the item that you want!</Text>               

//                 <View style={{
//                     flexDirection:"row",
//                     alignItems:"center",
//                     marginHorizontal:55,
//                     borderWidth:2,
//                     marginTop:50,
//                     paddingHorizontal:10,
//                     borderColor:"black",
//                     borderRadius:23,
//                     paddingVertical:2
//                 }}>
            
//                     <TextInput 
//                         placeholder="Email"
//                         placeholderTextColor="black"
//                         style={{paddingHorizontal:10}}
//                     />

//                 </View>
//                 <View style={{
//                     flexDirection:"row",
//                     alignItems:"center",
//                     marginHorizontal:55,
//                     borderWidth:2,
//                     marginTop:15,
//                     paddingHorizontal:10,
//                     borderColor:"black",
//                     borderRadius:23,
//                     paddingVertical:2
//                 }}>
                    
//                     <TextInput 
//                         placeholder="Password"
//                         placeholderTextColor="black"
//                         style={{paddingHorizontal:10}}
//                     />
//                 </View>

//                 <View style={{
//                     marginHorizontal:55,
//                     alignItems:"center",
//                     justifyContent:"center",
//                     marginTop:30,
//                     backgroundColor:"black",
//                     paddingVertical:10,
//                     borderRadius:23
//                 }}>

//                  <Text 
//                     onPress={()=>navigate('Scan')}
//                     style={{
//                     color:"white",
//                     fontFamily:"SemiBold"
//                     }}>Scan</Text>
//                 </View>
//             </View>
//         )
//     }
// }

import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned')

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data)
    console.log('Type: ' + type + '\nData: ' + data)
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  // Return the View
  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }} />
      </View>
      <Text style={styles.maintext}>{text}</Text>

      {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  }
});