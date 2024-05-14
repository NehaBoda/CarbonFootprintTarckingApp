import React, { useState } from 'react';
import { StyleSheet, Text, View,Image, ImageBackground, TextInput ,TouchableOpacity} from 'react-native'
import backimage from '../../assets/back.png'
import welcomelogo from '../../assets/icon.jpg'

const Login = ({navigation}) => {
  const[fdata,setFdata]=useState({
    email:'',
    password:'',
  })
  const[errormsg,setErrormsg]=useState(null);
  const sendtobackend=()=>{
    //console.log(fdata);
    if(fdata.email==''||
    fdata.password=='')
    {
         setErrormsg('All fields are required');
         return;
    }
    else{
      fetch('http://192.168.1.38:8000/signin',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(fdata)
      })
      .then(res=>res.json()).then(
        data=>{
          //console.log(data);
          if(data.error){
            setErrormsg(data.error);
          }
          else{
            alert('Login successfully');
            navigation.navigate('Home');
          }
        }
      )
    }
  }
  return (
    <View style={styles.container} >
       <Image style={styles.back} source={backimage}/>
       <View style={styles.S1}>
       <Image style={styles.logo} source={welcomelogo}></Image>
       <Text style={styles.line1}>Welcome!!! </Text>
       <Text style={styles.line2}>Let's count our carbonfootprint</Text>
       </View>
       <View style={styles.S2}>
       <Text style={styles.line3}>Login </Text>
       <Text style={styles.line4}>Sign In to Continoue </Text>
       {
            errormsg?<Text style={styles.error}>{errormsg}</Text>:null
          }
  
       <View style={styles.formgrp1}>
        <Text style={styles.lable1}> Email</Text>
        <TextInput style={styles.input} placeholder='Enter email'
        onPressIn={()=>setErrormsg(null)}
        onChangeText={(text)=>setFdata({...fdata,email: text})}/>
        <Text style={styles.lable1}> Password</Text>
        <TextInput style={styles.input} placeholder='Enter Password'
        onPressIn={()=>setErrormsg(null)}
         secureTextEntry={true}
        onChangeText={(text)=>setFdata({...fdata,password: text})}/>
        <Text style={styles.link}>forget Password? </Text>
        <TouchableOpacity
              onPress={()=>{sendtobackend();
            }}>
            <Text style ={styles.button2}>Log In</Text>
            </TouchableOpacity>
       
        <Text style={styles.link1}>don't have an account?<Text style={styles.link}
          onPress={()=>navigation.navigate('Signup')}>create new account</Text></Text>
       </View>
       
       </View>
    </View>
    
    
  )
}

export default Login

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
       S1:{ justifyContent:"center",
       display:"flex",
       alignItems:"center",
       height:"40%",
       width:"100%",
      },
      logo:{
        height:200,
        width:200,
        borderRadius:40,
    },
    line1:{
      
      fontSize:20,
    },
    S2:{ 
      display:'flex',
      padding:20,
      alignItems:'center',
      backgroundColor:'#FFFFFF',
      height:'60%',
      width:'100%',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      },
     line3:{
      color:"#008000",
        fontSize:40,
    },
   line4:{
        color:'#010208',
        fontSize:20,
    },
    error:{
      color:"red",
      backgroundColor:"#edcece",
      fontSize:15,
      padding:5,
     margin:5,
      borderRadius:20,
    }, 
      formgrp1:{
       
          display:'flex',
          flexDirection:'column',
          width:'100%',
          marginVertical:10,
      },
      lable1:{
        margin:10,
        
      },
      input:{
        backgroundColor:"#f2f2f2",
        borderRadius:30,
        padding:10,

      },
      button2:{
        backgroundColor:"#008000",
        borderRadius:10,
        fontSize:15,
        color:"#f2f2f2",
        height:"30%",
        padding:10,
        textAlign:"center",
        margin:10,
       
      },
      link:{
        color:"#008000",
        fontSize:15,
        marginLeft:200,
      
      },
      link1:{
        marginLeft:30,
      
      },

})