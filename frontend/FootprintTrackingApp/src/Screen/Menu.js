import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const Menu = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon name="bars" size={25} color="green"onPress={()=>navigation.navigate('Home')} />
      <View>
        <Text style={styles.line} onPress={()=>navigation.navigate('Activity')}><Text><FontAwesomeIcon name="calculator" size={20} color="#3333cc" />
         </Text>Emission calculator </Text>
        <Text style={styles.line}  onPress={()=>navigation.navigate('Resultdisplay')}><FontAwesomeIcon name="clipboard" size={20} color="#3333cc" />
        Result display</Text>
        <Text style={styles.line}  onPress={()=>navigation.navigate('Education')}><FontAwesomeIcon name="book" size={20} color="#3333cc" />
        Envirnoment Education</Text>
        <Text style={styles.line}  onPress={()=>navigation.navigate('Notification')}><EntypoIcon name="notification" size={20} color="#3333cc" />
        Notification</Text>
      </View>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
    container: {
        height:"70%",
        width:"90%",
        backgroundColor:"#cce6ff",
        padding:50,
        borderRadius:20
      },
      line:{
        padding:10,
       fontSize:20,
       color:"green"
      },
})