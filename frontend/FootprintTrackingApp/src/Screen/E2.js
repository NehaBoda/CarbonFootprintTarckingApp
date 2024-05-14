import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

const E2 = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.tittle}>About CarbonFootprint</Text>
        
      <Text style={styles.para} > footprint refers to the total amount of greenhouse gases, particularly carbon dioxide (CO2), that are emitted directly or indirectly by human activities such as transportation, energy production, industrial processes, agriculture, and other activities that involve the burning of fossil fuels.
The concept of carbon footprint is used to quantify the impact of human activities on climate change and global warming. It measures the amount of carbon dioxide and other greenhouse gases emitted, usually expressed in equivalent tons of CO2.
Calculating a carbon footprint typically involves considering various factors such as:
Direct Emissions: These are emissions released directly from sources that are owned or controlled by an entity, such as emissions from burning fossil fuels in vehicles or heating buildings.
Indirect Emissions: Also known as "Scope 2" emissions, these are emissions generated indirectly from the consumption of purchased electricity, heat, or steam.
Indirect Emissions from Supply Chains: Often referred to as "Scope 3" emissions, these include emissions from activities related to the production of goods and services used by an entity but occur outside its direct control, such as emissions from the production and transportation of materials used in manufacturing.
Reducing carbon footprints has become a key focus in efforts to mitigate climate change. Individuals, organizations, and governments around the world are increasingly adopting strategies to reduce their carbon footprints, such as using renewable energy sources, improving energy efficiency, implementing sustainable transportation options, and promoting carbon offsetting initiatives.


      </Text>
     
    </View>
  )
}

export default E2

const styles = StyleSheet.create({
   container:{
    justifyContent:"center",
    marginLeft:"5",
    height:"100%",
    width:"100%",
    borderRadius:20,
    backgroundColor:"#ccffdd"
   },
   tittle:{
    padding:20,
    margin:10,
    fontSize:30,
    color:"blue"
   },
   para:{
    padding:10,
    fontSize:20,
    backgroundColor:"#ccd9ff",
    borderRadius:20,
    height:"80%",
    width:"90%"

   },
})