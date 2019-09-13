import React, { Component } from 'react';
import {StyleSheet, Text} from 'react-native'
import { Container, Header, Content, Item, Input ,View, Form,Button,Icon} from 'native-base';
 const LoginScreen=()=>{
 return (
      <View style={Styles.view}>
        <Content>
         <Text style={Styles.text}> Welcome To The Application</Text>
         <View style={Styles.btnview}>
             <Button transparent>
                 <Icon name='logo-facebook'  />
              </Button>
               <Button transparent>
                 <Icon name='logo-instagram'  />
              </Button>
          </View>
         <Form>
            <Item rounded>
               <Input placeholder='Email or Phone' TYPE='username'/>
           </Item>
           <Item rounded style={Styles.item}>
               <Input placeholder='Password' TYPE='password'/>
             </Item>
            <Button  rounded warning style={Styles.btnText}>
            <Text >Login</Text>
           </Button>
           <Text style={Styles.text2}>or</Text>
           <Button  rounded warning style={Styles.btnText}>
            <Text >Register</Text>
           </Button>
          </Form>
        </Content>
      </View>
    );

}
export default LoginScreen

const Styles=StyleSheet.create({
 view:{
  flex: 1,
  justifyContent: "center",
 },
 item:{
  marginTop:'5%',
 
 },
 text:{
  fontWeight:'800',
  justifyContent: "center",
  textAlign:'center',
  marginTop:'5%',
  marginBottom:'8%'
 },
 btnview:{
  flexDirection:'row',
  justifyContent: "center",
  alignItems: 'center',
  marginBottom:'10%'
 },
 btnText:{
  textAlign:'center',
  justifyContent: "center",
  fontWeight:'800',
   marginTop:'5%',
   marginBottom:'5%'
 },
 text2:{
  fontWeight:'800',
  justifyContent: "center",
  textAlign:'center',
}
});