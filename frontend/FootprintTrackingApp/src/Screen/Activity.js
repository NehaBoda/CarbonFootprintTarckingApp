import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet,Image } from 'react-native';
import backimage from '../../assets/back.png'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';


const App = ({navigation}) => {
  const [distance, setDistance] = useState('');
  const [fuel, setFuel] = useState('');
  const [electricity, setElectricity] = useState('');
  const [carbonFootprint, setCarbonFootprint] = useState(null);
  const [error, setError] = useState(null);

  const calculateCarbonFootprint = async () => {
    if (distance === '' || fuel === '' || electricity === '') {
      setError('Please fill in all fields');
      return;
    }

    // Convert input values to numbers
    const distanceNum = parseFloat(distance);
    const fuelNum = parseFloat(fuel);
    const electricityNum = parseFloat(electricity);

    if (distanceNum === 0 || fuelNum === 0 || electricityNum === 0) {
      setError('Inputs cannot be zero');
      return;
    }

    try {
      const response = await fetch('http://192.168.1.38:8000/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ distanceTraveled: distanceNum, fuelConsumed: fuelNum, electricityConsumed: electricityNum }),
      });

      if (!response.ok) {
        throw new Error('HTTP error! Status: ' + response.status);
      }

      const data = await response.json();
      setCarbonFootprint(data.carbonFootprint);
      setError(null);
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
     <Image style={styles.back} source={backimage}/>
     <View style={styles.ss}>
        <FontAwesomeIcon name="bars" size={25} color="green"  onPress={()=>navigation.navigate('Menu')}/>
        <Text style={styles.welcome}>Welcome!</Text>
        <FontAwesomeIcon name="user-circle" size={25} color="green"  />
        </View>
      <View style={styles.s2}>
      <FontAwesomeIcon name="calculator" size={25} color="#ff0000" />
        <Text style={styles.l1}> Enter Your Day To Day Activity : </Text>
      <View style={styles.formgrp1}>
        <Text style={styles.lable1}>Distance Traveled(km):</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Distance Traveled (km)"
        value={distance}
        onChangeText={text => setDistance(text)}
        keyboardType="numeric"
        onPressIn={() => {
          setError(null);
          setCarbonFootprint(null);
        }}
      />
      <Text style={styles.lable1}>Fuel Consumed (liters):</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Fuel Consumed (liters)"
        value={fuel}
        onChangeText={text => setFuel(text)}
        keyboardType="numeric"
        onPressIn={() => {
          setError(null);
          setCarbonFootprint(null);
        }}
      />
      <Text style={styles.lable1}>Electricity Consumed (kWh):</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Electricity Consumed (kWh)"
        value={electricity}
        onChangeText={text => setElectricity(text)}
        keyboardType="numeric"
        onPressIn={() => {
          setError(null);
          setCarbonFootprint(null);
        }}

      />
      <Text style={styles.Button} onPress={calculateCarbonFootprint}>calculate</Text> 
      {error && <Text style={styles.error}>{error}</Text>}
      {carbonFootprint !== null &&
       <Text style={styles.carbon}>Total Carbon Footprint: {carbonFootprint} kg CO2</Text>}
      </View>
      <FontAwesomeIcon name="clipboard" size={25} color="blue" />
      <Text style={styles.l2} onPress={()=>navigation.navigate('Resultdisplay')}> Check your CarbonFootprintRecord : </Text>
      </View>
    </View>
  );
};

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
   l1:{
    fontSize:20,
    fontFamily: 'notoserif',
    color:"#e31b14",
    borderRadius:20,
    
   },
   l2:{
    fontSize:20,
    fontFamily: 'notoserif',
    color: "#0033cc",
    backgroundColor:"#d6f5d6",
    borderRadius:20,
    padding:5,
    margin:20
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
   formgrp1:{
    marginBottom:20,
    padding:30,
     display:'flex',
     flexDirection:'column',
     width:'100%',
     marginVertical:10,
     backgroundColor:"#bbf0c3",
     borderRadius:10
 },
 lable1:{
  margin:10,
  
},
  input: {
    backgroundColor:"#f2f2f2",
    borderRadius:30,
    borderWidth: 0.5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  error: {
    color:"red",
      backgroundColor:"#edcece",
      fontSize:15,
      padding:5,
     margin:5,
      borderRadius:20,
  },
  Button:{
    backgroundColor:"#008000",
    borderRadius:10,
    fontSize:20,
    color:"#f2f2f2",
    padding:10,
    textAlign:"center",
    margin:10,
  },
  carbon:{
    fontSize:18,
    backgroundColor:"#d8f0f0",
    color:"#2e2bbd",
    borderRadius:20,
    padding:10,
    margin:10
  },
  welcome:{
    fontSize:30,
  },
});

export default App;
