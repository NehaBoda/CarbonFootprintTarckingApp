import { StyleSheet, Text, View,Image,TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import backimage from '../../assets/back.png'

const Signup = ({navigation}) => {
  const[fdata,setFdata]=useState({
    name:'',
    email:'',
    password:'',
    cpassword:'',
    dob:'',
  

  })
  const[errormsg,setErrormsg]=useState(null);
  const sendtobackend=()=>{
   //console.log(fdata);
   if(fdata.name==''||
   fdata.email==''||
   fdata.dob==''||
   fdata.password==''||
   fdata.cpassword=='')
   {
        setErrormsg('All fields are required');
        return;
   }
   else{
    if(fdata.password!==fdata.cpassword){
       setErrormsg("Password and Confirm password must be same ");
       return;
    }
  else{
    fetch('http://192.168.1.38:8000/verify',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(fdata)
    })
    .then(res=>res.json()).then(
      data=>{
        
       if(data.error==='Invalid credentials'){
        setErrormsg('Invalid credentials')
       }
       else if (data.message==="Verification Code Send to your Email"){
        console.log(data.vdata);
        alert(data.message);
        navigation.navigate('Verification',{client:data.vdata});
       }
      }
    )
  }
  }
   }
    

return (
    <View  style={styles.container} >
      <Image style={styles.bground} source={backimage}/>
      <View style={styles.S1}>
       </View>
       <View style={styles.S2}>
       <Text style={styles.line1}>Create a New Account</Text>
          <Text style={styles.line2}>Already Registered? <Text style={styles.link1}  onPress={()=>navigation.navigate('Login')}> Login here</Text></Text>
          {
            errormsg?<Text style={styles.error}>{errormsg}</Text>:null
          }
         
          <View style={styles.formgrp1}>
          <Text style={styles.lable1}>Name</Text>
            <TextInput style={styles.input} placeholder='Enter your name'
            onPressIn={()=>setErrormsg(null)}
            onChangeText={(text)=>setFdata({...fdata,name: text})}/>
            <Text style={styles.lable1}>Email</Text>
            <TextInput style={styles.input} placeholder='Enter your email'
            onPressIn={()=>setErrormsg(null)}
            onChangeText={(text)=>setFdata({...fdata,email: text})}/>
            <Text style={styles.lable1}>DOB</Text>
            <TextInput style={styles.input} placeholder='Enter you date of birth'
            onPressIn={()=>setErrormsg(null)}
            keyboardType="numeric"
            onChangeText={(text)=>setFdata({...fdata,dob: text})}/>
            <Text style={styles.lable1}>Password</Text>
            <TextInput style={styles.input} placeholder='Enter your password'
            onPressIn={()=>setErrormsg(null)}
            secureTextEntry={true}
           onChangeText={(text)=>setFdata({...fdata,password: text})}/>
            <Text style={styles.lable1}>Confirm Password</Text>
            <TextInput style={styles.input} placeholder='Confirm your password'
            onPressIn={()=>setErrormsg(null)}
            secureTextEntry={true}
            onChangeText={(text)=>setFdata({...fdata,cpassword: text})}/>
          </View>
         
          <TouchableOpacity
              onPress={()=>{sendtobackend();
            }}>
            <Text style ={styles.button1}>Signup</Text>
            </TouchableOpacity>
      </View>

    </View>
  )
}

export default Signup

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
     },
     S1:{ justifyContent:"center",
       display:"flex",
       alignItems:"center",
       height:"20%",
       width:"100%",
    },
    S2:{ 
      display:'flex',
      padding:20,
      alignItems:'center',
      backgroundColor:'#FFFFFF',
      height:'80%',
      width:'100%',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      },
      line1:{
        color:"#008000",
          fontSize:30,
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
       padding:20,
        display:'flex',
        flexDirection:'column',
        width:'100%',
        marginVertical:10,
      
      
     
    },
    lable1:{
      margin:3,
      padding:5
      
    },
    input:{
      backgroundColor:"#f2f2f2",
      borderRadius:30,
      padding:10,

    },
    button1:{
      backgroundColor:"#008000",
      borderRadius:10,
      fontSize:20,
      color:"#f2f2f2",
      minWidth:200,
      minHeight:30,
      margin:10,
      textAlign:"center"
     
      
    },
    link1:{
      color:"#008000",
      fontSize:15,
      marginLeft:200,
    },
   

})