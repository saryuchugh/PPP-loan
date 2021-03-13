import * as React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity,View} from 'react-native'

export default class MainScreen extends React.Component{

    render(){
        return(
            <View>
            <View>
            <Image source={require("../assets/main.jpg")} style={{width:200, height:250,marginLeft:105, marginTop:50}}/>
            </View>
            <View style = {{marginLeft:20,marginTop:15}}>
            <Text style = {styles.text}>
            Start My
            </Text>
            <Text style = {styles.texts}>
            PPP Application
            </Text>
            </View>
            <View style = {styles.bstyle}>
            <TouchableOpacity style = {styles.buttonstyle} onPress={() => this.props.navigation.navigate('DetailsScreen')}>
            <Text style = {styles.textstyle}>Get Started</Text>
            </TouchableOpacity>
            </View>
            <View style = {styles.button}>
            <View style={{ margin:25}}>
            <Text style = {{ fontSize:20,fontFamily:'sans-serif',color:'#00316A',fontWeight:'bold' }}>How It Works:</Text>
            </View>
            
            <View style={{flexDirection: 'row',marginLeft:12}}>
            <Text style = {{color:'red'}}>{'\u2022'}</Text>
            <Text style={styles.textss} >Start your PPP Application here and we'll route you to an approved letter.</Text>
            </View>
             <View style={{flexDirection: 'row', marginTop:10,marginLeft:12}}>
            <Text style = {{color:'red'}}>{'\u2022'}</Text>
            <Text style={styles.textss} >Womply is not a lender, but we can help you access PPP stimulus(at no cost)</Text>
            </View>
             <View style={{flexDirection: 'row', marginTop:10,marginLeft:12}}>
            <Text style = {{color:'red'}}>{'\u2022'}</Text>
            <Text style={styles.textss} >If you have Questions, you can check the status of your application or connect with us through live chat or email.</Text>
            </View>
             </View>
            
            </View>
           
        )
    }
}
const styles = StyleSheet.create({
    text:{
        fontSize:35,
        fontFamily:'sans-serif',
        color:'#00316A'
    },
    texts:{
        fontSize:35,
        fontFamily:'sans-serif',
        color:'#00316A',
        fontWeight:'bold' 
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
        marginTop:25,
    },
    textstyle:{
        color:'white',
        fontSize:18,
        fontFamily:'serif',
       
    },
    button:{
        flexDirection:'column',
        width:"88%",
        height:"100%",
        borderRadius:15,
        shadowColor: "#F7F9FC",
        shadowOffset: {
           width: 1,
           height: 8,
        },
        shadowOpacity: 0.4,
        shadowRadius: 20,
        elevation:25,
        marginTop:60,
        marginLeft:30,
        overflow: 'hidden',
        backgroundColor:'#F7F9FC'
        },
        textss:{
        fontSize:15,
        fontFamily:'sans-serif',
        color:'#00316A',
        lineHeight:18,
        fontStyle: 'italic',
        
        }
      

})