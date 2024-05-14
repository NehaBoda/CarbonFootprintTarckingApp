import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import backimage from '../../assets/back.png';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const Education = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.back} source={backimage}/>
     <View style={styles.ss}>
        <FontAwesomeIcon name="bars" size={25} color="green"  onPress={()=>navigation.navigate('Menu')}/>
        <Text style={styles.welcome}>Welcome!</Text>
        <FontAwesomeIcon name="user-circle" size={25} color="green" />
        </View>
        <View style={styles.s2}>
        <EntypoIcon name="notification" size={20} color="#3333cc" />
        <Text style={styles.title}>notification!!!</Text>
        
        </View>
    </View>
  )
}

export default Education

const styles = StyleSheet.create({
    container:{

        height:"100%",
        width:"100%",
     },
    
    back :{
        height:'100%',
        width:'100%',
        position:'absolute',
        top:0,
       },
       ss:{ 
        padding:40,
        flexDirection: 'row', 
       justifyContent: 'space-between',
       height:"15%",
        width:"100%",
       },
       welcome:{
        fontSize:30,
       },
       s2:{
        display:'flex',
        padding:20,
        backgroundColor:"#FFFFFF",
        height:'85%',
        width:'100%',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
       },
       title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color:"#0033cc"
      }, 
      Topic:{
        fontSize:18,
        backgroundColor:"#d8f0f0",
        color:"#2e2bbd",
        borderRadius:20,
        padding:10,
        margin:10
      },
})