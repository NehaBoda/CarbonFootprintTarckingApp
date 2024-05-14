import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

const E2 = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.tittle}>Impact of Envirnoment Education on Society </Text>
        
      <Text style={styles.para} > Environmental education plays a crucial role in shaping society in several ways:
Awareness and Understanding: Environmental education increases awareness and understanding of environmental issues, such as climate change, pollution, habitat destruction, and biodiversity loss. By educating individuals about these issues, they become more informed and better equipped to make sustainable choices in their daily lives.
Behavior Change: Environmental education can lead to changes in behavior that reduce negative environmental impacts. When people understand the consequences of their actions on the environment, they are more likely to adopt eco-friendly behaviors, such as recycling, conserving energy and water, reducing waste, and choosing sustainable products.
Empowerment: Environmental education empowers individuals to take action to protect and preserve the environment. By providing knowledge and skills, it enables people to participate in environmental initiatives, advocate for environmental policies, and contribute to positive environmental change within their communities.

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