import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import backimage from '../../assets/back.png';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const CarbonFootprintScreen = ({navigation}) => {
  const [footprints, setFootprints] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFootprints();
  }, []);

  const fetchFootprints = async () => {
    try {
      const response = await fetch('http://192.168.1.38:8000/footprint');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setFootprints(data);
      setLoading(false);
    } catch (error) {
      setError(error.message || 'An error occurred');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image style={styles.back} source={backimage}/>
     <View style={styles.ss}>
        <FontAwesomeIcon name="bars" size={25} color="green"  onPress={()=>navigation.navigate('Menu')}/>
        <Text style={styles.welcome}>Welcome!</Text>
        <FontAwesomeIcon name="user-circle" size={25} color="green" />
        </View>
        <View style={styles.s2}>
        <FontAwesomeIcon name="clipboard" size={25} color="#0033cc" />
      <Text style={styles.title}>Your Carbon Emission Record</Text>
      {footprints.map((footprint, index) => (
        <View key={index} style={styles.item}>
          <Text>Distance Traveled: {footprint.distanceTraveled} km</Text>
          <Text>Fuel Consumed: {footprint.fuelConsumed} liters</Text>
          <Text>Electricity Consumed: {footprint.electricityConsumed} kWh</Text>
          <Text>Carbon Footprint: {footprint.carbonFootprint} kg CO2</Text>
        </View>
      ))}
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
  item: {
    marginBottom: 10,
    padding:10,
    fontSize:20,
    backgroundColor:"#ccd9ff",
    borderRadius:20,
    height:"18%",
    width:"90%"

  },
  error: {
    color: 'red'
  },
  welcome:{
    fontSize:30,
  },
});

export default CarbonFootprintScreen;