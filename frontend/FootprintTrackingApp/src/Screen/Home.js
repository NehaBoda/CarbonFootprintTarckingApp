import { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import backimage from '../../assets/back.png'
import welcomelogo from '../../assets/icon.jpg'



const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.bground} source={backimage}/>
        <View style={styles.ss}>
        <FontAwesomeIcon name="bars" size={25} color="green" onPress={()=>navigation.navigate('Menu')} />
        <Text style={styles.welcome}>Welcome!</Text>
        <FontAwesomeIcon name="user-circle" size={25} color="green" />
        </View>
        <View style={styles.s2}>
        <Image style={styles.logo} source={welcomelogo}></Image>
        <View>
          <Text style={styles.l1}>Record Your Activity </Text>
          <Text style={styles.l2}>to count CarbonFootprint </Text>
          <Text style={styles.button1} onPress={()=>navigation.navigate('Activity')}>Click here</Text>
        </View>
        </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
     },
    bground :{
        height:'100%',
        width:'100%',
        position:'absolute',
        top:0,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
       },
       ss:{
        padding:40,
        flexDirection: 'row', 
       justifyContent: 'space-between',
       backgroundColor:"#FFFFFF",
       borderBottomLeftRadius:10,
       borderBottomRightRadius:10,
       borderBottomWidth:1,
       
       height:"15%",
        width:"100%",
        
       },
       welcome:{
        fontSize:20,
        color:"green",
       },
       s2:{
        justifyContent:"center",
        display:"flex",
        alignItems:"center",
        height:"85%",
        width:"100%",
        marginVertical:10,
        
       },
       logo:{
        height:200,
        width:200,
        borderRadius:50,
        margin:10,
       },
      
       container1:{
        justifyContent: 'center',
       alignItems: 'center',
      width:20,
      height:20,
       resizeMode:'contain'
    },
      l1:{ 
       fontSize:30, 
       color:"#ff0000",
       },
       l2:{
       fontSize:15,
       marginLeft:35
       },
       button1:{
        backgroundColor:"#008000",
        borderRadius:10,
        fontSize:20,
        color:"#f2f2f2",
        height:"20%",
        textAlign:"center",
        margin:10,
        padding:10
      },
      welcome:{
        fontSize:30,
      },
      
})