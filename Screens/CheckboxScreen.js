import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';

const CheckboxScreen = () => {
  const [checked, setChecked] = React.useState('first');

  return (
   
    <View style = {styles.inputstyle}>
            <View style = {{marginTop:45,marginLeft:20}}>
            <Text style = {{ fontSize:22,fontFamily:'sans-serif',color:'#00316A',fontWeight:'bold' }}>What describes you or your business best?</Text>
            </View>
    <View style = {styles.viewstyle}>
      <RadioButton
        value="first"
        
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <Text style = {styles.textstyle}>My business has multiple employees. </Text>
      </View>
         <View style = {styles.viewstyle}>
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
      <Text style = {styles.textstyle}>My business does not have multiple employees and/or I work for myself (e.g.,Uber drivers, Door-Dash couriers, independent contractors). </Text>
      </View>
      <View style = {styles.bstyle}>
            <TouchableOpacity style = {styles.buttonstyle}>
            <Text style = {styles.text}>Next</Text>
            </TouchableOpacity>
            </View>

            <View style = {{marginTop:110,marginLeft:"10%"}}>
           <Text style = {{color:'#83BBFD',textDecorationLine: 'underline',}}>Please refer to our FAQ if you have additional questions</Text>
            </View>
    </View>
    
  );
};

export default CheckboxScreen;

const styles = StyleSheet.create({
    inputstyle:{
        color:'#F7F9FC',
        backgroundColor:'#F7F9FC',
        borderRadius:15,
        width:'92%',
        height:'90%', 
        margin:20,
        
    }, 
    textstyle:{
      fontSize:13,
      fontFamily:'sans-serif',
      color:'#00316A',
      lineHeight: 17,
    }, 
    viewstyle:{
      flexDirection:'row', 
      alignItems:'center',
       marginTop:15
    },
    buttonstyle:{
       
        borderRadius:8,
        width:190,
        height:40,
        backgroundColor:'#0805C4',
        color:'#0805C4',
        alignItems:'center',
        justifyContent:'center'
    },
    bstyle:{
        marginLeft:"25%",
        marginTop:125,
    },
    text:{
        color:'white',
        fontSize:18,
        fontFamily:'serif',
        
    },
})