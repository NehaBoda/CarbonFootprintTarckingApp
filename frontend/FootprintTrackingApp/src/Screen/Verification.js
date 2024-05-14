import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Image ,TextInput,TouchableOpacity} from 'react-native'
import backimage from '../../assets/back.png'

const Verification = ({navigation,route}) => {
    const{client}=route.params;
    //console.log('from verification page', client[0]?.verificationCode);

    const[errormsg,setErrormsg]=useState(null);
    const[usercode,setUsercode]=useState('XXXXXX');
    const [actualcode,setActualcode]=useState(null);

    useEffect(()=>{
      setActualcode( client[0]?.verificationCode);
    },[])

    const sendtobackend=()=>{
        //console.log(usercode);
        if(usercode==''||usercode=='XXXXXX'||usercode!=actualcode)
        {
            setErrormsg('Please enter the valid code');
            return;
       }
       else if(usercode==actualcode){
         // console.log('Correct code') ;
         const fdata={
            name:client[0]?.name,
            email:client[0]?.email,
            password:client[0]?.password,
            dob:client[0]?.dob,
          }
          fetch('http://192.168.1.38:8000/signup',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(fdata)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if (data.message==="User Registerd succesfully"){
            alert(data.message);
            navigation.navigate('Login');
           }
          else{
            alert("Something went Wrong ,Try Signing In again");
          } 
        })
     }
    }
  return (
    <View style={styles.container}>
       <Image style={styles.back} source={backimage}/>
       <View style={styles.s1}>
       </View>
       <View style={styles.s2}>
         <Text style={styles.l1}>Verification</Text>
         <Text style={styles.l2}>Verification code has been send to your email </Text>
       {
            errormsg?<Text style={styles.error}>{errormsg}</Text>:null
          }
          <View style={styles.formgrp1}>
        <Text style={styles.lable1}> code:</Text>
        <TextInput style={styles.input} placeholder='Enter 6 digit Verification code'
        onPressIn={()=>setErrormsg(null)}
        secureTextEntry={true}
        onChangeText={(text)=>setUsercode(text)}/>
        </View>
        <TouchableOpacity
              onPress={()=>{sendtobackend();
            }}>
            <Text style ={styles.button2}>verify</Text>
            </TouchableOpacity>
       </View>
    </View>
  )
}

export default Verification

const styles = StyleSheet.create({
    container:{

        height:"100%",
        width:"100%",
     },
     back :{
        height:'100%',
        width:'100%',
        position:'absolute',
        top:0,},
    s1:{ justifyContent:"center",
        display:"flex",
        alignItems:"center",
        height:"40%",
        width:"100%",
       },
    s2:{ 
        display:'flex',
        padding:20,
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        height:'60%',
        width:'100%',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        },
     formgrp1:{
       
            display:'flex',
            flexDirection:'column',
            width:'100%',
            marginVertical:10,
          
          
         
        },
    l1:{
        fontSize:30,
        color:"#008000"
    },
    l2:{
        color:"#FFFFFF",
        backgroundColor:"#111212",
        fontSize:15,
        padding:5,
       margin:5,
        borderRadius:20,
      },
      error:{
        color:"red",
      backgroundColor:"#edcece",
      fontSize:15,
      padding:5,
     margin:5,
      borderRadius:20,
      },
    lable1:{
        margin:10,
        fontSize:15 
      },
    input:{
        backgroundColor:"#f2f2f2",
        borderRadius:30,
        padding:10,

      },
    button2:{
        backgroundColor:"#008000",
        borderRadius:10,
        fontSize:20,
        color:"#f2f2f2",
        minWidth:200,
        minHeight:30,
        margin:10,
        textAlign:"center"
       
      },  
    
})