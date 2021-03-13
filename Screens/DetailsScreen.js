import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      Company_name:'',
      firstName:'',
      lastName:'',
      emailId:'',
      contact:'',
      entity: '',
      Payroll:'',
      loan:'',
      text:''
      
    }
  }
  
  render(){
  
    var data = [["Business Legal Entity Type"]];
     var datas = [["Average Monthly Average Payroll"]];
       var datass = [["Did you receive a PPP loan in 2020?"]];
  return (
    
   <View style = {styles.inputstyle}>
    <View style = {{marginTop:45,marginLeft:10}}>
            <Text style = {{ fontSize:20,fontFamily:'sans-serif',color:'#00316A',fontWeight:'bold' }}>Start My PPP Application</Text>
            </View>
             <View style = {{marginTop:15,marginLeft:10}}>
            <Text style = {{ fontSize:12,fontFamily:'sans-serif',color:'#00316A' }}> Please fill below form Accurately </Text>
            </View>
            <TextInput
                style={styles.formsTextInput}
                placeholder={"Company Name"}
                maxLength={8}
                onChangeText={text => {
                  this.setState({
                    Company_name: text
                  });
                }}
              />
            <View style = {{flexDirection:'row'}}>
            <TextInput
                style={styles.formTextInput}
                placeholder={"First Name"}
                maxLength={8}
                onChangeText={text => {
                  this.setState({
                    firstName: text
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={"Last Name"}
                maxLength={8}
                onChangeText={text => {
                  this.setState({
                    lastName: text
                  });
                }}
              />
</View>
  <View style = {{flexDirection:'row'}}>
   <View style = {{flexDirection:'column'}}>
            <TextInput
                style={styles.formTextInput}
                placeholder={"Email"}
                keyboardType={"email-address"}
                onChangeText={text => {
                  this.setState({
                    emailId: text
                  });
                }}
              />
              <Text style = {{ fontSize:9,fontFamily:'sans-serif',color:'#8AA1BC',fontWeight:"100" ,fontStyle: 'italic', marginLeft:10,}}>Must use the same Email Account </Text>
              <Text style = {{ fontSize:9,fontFamily:'sans-serif',color:'#8AA1BC',fontWeight:"100" ,fontStyle: 'italic', marginLeft:10}}>for each PPP loan
              </Text>
              </View>
               <TextInput
                style={styles.formTextInput}
                placeholder={"Phone"}
                maxLength={10}
                keyboardType={"numeric"}
                onChangeText={text => {
                  this.setState({
                    contact: text
                  });
                }}
              />
           </View>
        
<View style ={{flex:0.5,}}>

   <DropdownMenu
   style={{flex: 0.5,}}
   
bgColor={'#F7F9FC'}
tintColor={'grey'}
activityTintColor={'red'}
handler={(selection, row) => this.setState({text: data[selection][row]})}
data={data}
    >
  </DropdownMenu>



   <DropdownMenu
    bgColor={'#F7F9FC'}
    tintColor={'grey'}
    activityTintColor={'red'}
    handler={(selection, row) => this.setState({text: datas[selection][row]})}
    data={datas}
    >
    </DropdownMenu>


<View >
   <DropdownMenu
  
    bgColor={'#F7F9FC'}
    tintColor={'grey'}
    activityTintColor={'red'}
    handler={(selection, row) => this.setState({text: datass[selection][row]})}
    data={datass}
    >
    </DropdownMenu>
</View>
       <View style = {styles.bstyle}>
            <TouchableOpacity style = {styles.buttonstyle} onPress={() => this.props.navigation.navigate('Extra')}>
            <Text style = {styles.text}>Start My Application</Text>
            </TouchableOpacity>
            </View>
          <Text style = {{ fontSize:10,fontFamily:'sans-serif',color:'#00316A', marginLeft:10,marginTop:25 }}> By Clicking "Start My Application", I understand and agree that this program is subject to the PPP Loan Assistance Terms and Terms of Service</Text>
   </View>
   </View>
  );
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
     formTextInput: {
    width: 140,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: "#D2DBE6",
    fontSize: 15,
    margin: 10,
    paddingLeft: 10,
    alignItems:'center',
    justifyContent:'center',
    
  },
  formsTextInput:{
     width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: "#D2DBE6",
    fontSize: 15,
    margin: 10,
    paddingLeft: 10,
     alignItems:'center',
    justifyContent:'center'
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
        marginLeft:"20%",
        marginTop:70,
        
       
    },
     text:{
        color:'white',
        fontSize:15,
        fontFamily:'serif',
         alignItems:'center',
         justifyContent:'center'
        
    },
})