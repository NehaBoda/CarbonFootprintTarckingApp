import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import welcomelogo from '../../assets/icon.jpg'

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}> 
      <View style={styles.container1}>
        <Image style={styles.logo} source={welcomelogo}></Image>
        <Text style={styles.button1} onPress={()=>navigation.navigate('Login')}> Login </Text>
        <Text style={styles.button1} onPress={()=>navigation.navigate('Signup')}> Signup </Text>          
      </View>
    
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FFFFFF",
        width:'100%',
        height:'100%',
        zIndex:-1,
        display:"flex",
    },
    head:{
        color:'black',
        fontSize:30,
    },
    container1:{
        justifyContent:"center",
        display:"flex",
        alignItems:"center",
        height:"100%",
        width:"100%",


    },
    logo:{
        height:200,
        width:200,

    },
    button1:{
        backgroundColor:"#f2f2f2",
        borderRadius:10,
        fontSize:20,
        color:"#008000",
        minWidth:150,
        minHeight:30,
        margin:5,
        textAlign:"center"



        
    }
})