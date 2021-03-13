import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

export default class Extra extends React.Component {
render(){
  return(
    <View style = {styles.inputstyle}>
    <ScrollView>
    <View style = {{flexDirection:'row',marginTop:10}}>
    <Image source={require("../assets/pic1.jpg")} style={{width:30, height:45,marginLeft:10,marginRight:10 }}/>
<Text style = {{ fontSize:17,fontFamily:'serif',color:'#00316A',fontWeight:'bold' }}>Apply for a Paycheck Protection Program (PPP) Loan </Text>
    </View>
    <View style = {{marginLeft:1,marginTop:8}}>
    <Text style = {styles.text}>A new round of funding for the Paycheck Protection Program(PPP), administered by the SBA,continues the availability of much-needed financial support for eligible small businesses to help keep employees and stay open safely during the COVID-19 pandemic.</Text>
    </View>
    <View style = {{marginLeft:10,marginTop:15}}>
    <Text style = {{ fontSize:17,fontFamily:'serif',color:'#00316A'}}>HOW DOES IT WORK? </Text>
    <Text style = {styles.text}>Our Streamlined PPP Loan application can help you fill out your application, upload required documents, and submit them to the bank quickly *</Text>
    <Text style = {styles.text}>SmartBiz can help you apply for these funds. We have specialized in SBA loans since 2013 and our network of banks has funded nearly $4 billion in SBA PPP, and bank term loans.</Text>
    </View>
       <View style = {{marginLeft:10,marginTop:15}}>
    <Text style = {{ fontSize:17,fontFamily:'serif',color:'#00316A'}}>WHAT DO I NEED TO KNOW? </Text>
    <Text style = {styles.text}>Whether this is your first or second PPP loan, SmartBiz can help! Businesses with less than 500 employees that are negatively impacted by the pandemic can apply for their first PPP loan.</Text>
    <Text style = {styles.text}>Previous PPP loan reciepents with less than 800 employees can also qualify if they have experienced more than 25% drop in revenue quarter over quarter from the previous year.</Text>
    </View>
    <View style={styles.viewStyle}>
            <Text style = {{color:'red'}}>{'\u2022'}</Text>
            <Text style = {{ fontSize:12,fontFamily:'sans-serif',color:'#00316A',textAlign: 'justify',lineHeight: 17,}}>Loans avaible upto $2,000,000</Text>
            
            </View>
            <View style={styles.viewStyle}>
            <Text style = {{color:'red'}}>{'\u2022'}</Text>
            <Text style = {styles.textStyle}>1.00% interest rate and no payments for the first 10 months.</Text>
            
            </View>
             <View style={styles.viewStyle}>
            <Text style = {{color:'red'}}>{'\u2022'}</Text>
            <Text style = {styles.textStyle}>No collateral or guarantee required</Text>
            
            </View>
             <View style={styles.viewStyle}>
            <Text style = {{color:'red'}}>{'\u2022'}</Text>
            <Text style = {styles.textStyle}>100% federally guaranteed funds</Text>
            
            </View>
             <View style={styles.viewStyle}>
            <Text style = {{color:'red'}}>{'\u2022'}</Text>
            <Text style = {styles.textStyle}>PPP loan proceeds can be used for costs related to payroll, rent or lease, mortgage interest payments, utilities services, operational expenses, property damage or supplier costs, and worker protection expenses.</Text>
            
            </View>
            <View style = {styles.bstyle}>
            <TouchableOpacity style = {styles.buttonstyle} onPress={() => this.props.navigation.navigate('CheckboxScreen')} >
            <Text style = {styles.texts}>{'\u25BA'}</Text>
            </TouchableOpacity>
            </View>
    </ScrollView>
    </View>
  )
}

}
const styles = StyleSheet.create({
   inputstyle:{
        color:'#F7F9FC',
        backgroundColor:'#F7F9FC',
        borderRadius:15,
        width:'90%',
        height:'100%', 
        margin:20,
        
    }, 
    viewStyle:{
      flexDirection: 'row', 
      marginLeft:15, 
      marginTop:5
    },
    textStyle:{
      fontSize:12,
      fontFamily:'sans-serif',
      color:'#00316A',
      textAlign: 'justify',
      lineHeight: 17,
    },
    text:{
      fontSize:12,
      fontFamily:'sans-serif',
      color:'#00316A',
      textAlign: 'justify',
      lineHeight: 17,
       marginTop:10 
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
        marginTop:20,
    },
     texts:{
        color:'white',
        fontSize:18,
        fontFamily:'serif',
        
    },
})