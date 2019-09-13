import React, { Component } from 'react';
import {
  Text,StyleSheet,TouchableOpacity
} from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Right, Icon ,Button,View} from 'native-base';
//import {Content, Button} from 'native-base';
import { Actions } from 'react-native-router-flux';
import NavigationService from './NavigationService'

export default class Sidebar extends Component {
  state={
     flag1:true,
     flag2:false,
     flag3:false,
     flag4:false,
     flag5:false
}
 WomenBack=()=>{
 this.setState({
  flag1:true,
  flag2:false
  
 })

}
WomenMenu=()=>{
  this.setState({
    flag1:false,
    flag2:true
  })
  //console.log('hello')
}
MenMenu=()=>{
  this.setState({
    flag1:false,
    flag3:true,
  })
}
MenBack=()=>{
  this.setState({
    flag3:false,
    flag1:true
  })
}
KidsMenu=()=>{
  this.setState({
    flag1:false,
    flag4:true,
  })
}
KidsBack=()=>{
  this.setState({
    flag4:false,
    flag1:true
  })
}
HomeMenu=()=>{
  this.setState({
    flag1:false,
    flag5:true,
  })
}
HomeBack=()=>{
  this.setState({
    flag5:false,
    flag1:true
  })
}
  render() {
    return (
      
      <Content style={{backgroundColor:'#FFFFFF'}}>
      {  
        !!this.state.flag1 ? (
        <View>
        <View style={Styles.view}>
       
            <List>
              <ListItem itemHeader noBorder >
                                     
                     <Icon name='person' style={Styles.logo} />
                 
                
            </ListItem>
            <ListItem noBorder>
              <Left>
               <Button transparent onPress={() =>NavigationService.navigate('LoginScreen')}>
                <Text style={Styles.text2}>Login or Register</Text>
               </Button>
              </Left>
              <Right>
                <Icon name="arrow-forward" style={Styles.icons} />
              </Right>
            </ListItem>
          </List>
        </View>
        <List>
            <ListItem >
              <Left>
                <Text style={Styles.text} onPress={this.MenMenu}>Men</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
             <Left>
                <Text style={Styles.text} onPress={this.WomenMenu} >Women</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={Styles.text} onPress={this.KidsMenu}>Kids</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={Styles.text} onPress={this.HomeMenu}>Home & Living</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={Styles.text} >Discover</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
          </View>
          ): (null)
    }
    {  
        !!this.state.flag2 ? (
        <View>
       
        <List>
            <ListItem  itemHeader >
              <TouchableOpacity onPress={this.WomenBack}>
                <Icon name="md-arrow-back" />
              </TouchableOpacity>
              <Left>
                <Text style={Styles.textHeader}>Women</Text>
              </Left>
            </ListItem>
            <ListItem>
             <Left>
                <Text style={Styles.text} >Indian</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-down" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={Styles.text}>Western</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-down" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={Styles.text}>Sports</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-down" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={Styles.text}>Beauty Products</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-down" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={Styles.text}>Footwear</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-down" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={Styles.text}>Jewellery</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-down" />
              </Right>
            </ListItem>
          </List>
          </View>
          ): (null)
    }
    {  
        !!this.state.flag3 ? (
        <View>
       
        <List>
            <ListItem  itemHeader >
              <TouchableOpacity onPress={this.MenBack}>
                <Icon name="md-arrow-back" />
              </TouchableOpacity>
              <Left>
                <Text style={Styles.textHeader}>Men</Text>
              </Left>
            </ListItem>
            <ListItem>
             <Left>
                <Text style={Styles.text} >TopWear</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-down" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={Styles.text}>BottomWear</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-down" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={Styles.text}>Sports</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-down" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={Styles.text}>InnerWear</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-down" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={Styles.text}>Footwear</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-down" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={Styles.text}>Suits & Blazers</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-down" />
              </Right>
            </ListItem>
          </List>
          </View>
          ): (null)
    }
    {  
        !!this.state.flag4 ? (
        <View>
       
        <List>
            <ListItem  itemHeader >
              <TouchableOpacity onPress={this.KidsBack}>
                <Icon name="md-arrow-back" />
              </TouchableOpacity>
              <Left>
                <Text style={Styles.textHeader}>Kids</Text>
              </Left>
            </ListItem>
            <ListItem>
             <Left>
                <Text style={Styles.text} >Infant Boys</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-down" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={Styles.text}>Infant Girls</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-down" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={Styles.text}>Boys Clothing</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-down" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={Styles.text}>Girls Clothing</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-down" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={Styles.text}>Boys FootWear</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-down" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={Styles.text}>Girls FootWear</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-down" />
              </Right>
            </ListItem>
          </List>
          </View>
          ): (null)
    }
    {  
        !!this.state.flag5 ? (
        <View>
       
        <List>
            <ListItem  itemHeader >
              <TouchableOpacity onPress={this.HomeBack}>
                <Icon name="md-arrow-back" />
              </TouchableOpacity>
              <Left>
                <Text style={Styles.textHeader}>Home & Living</Text>
              </Left>
            </ListItem>
            <ListItem>
             <Left>
                <Text style={Styles.text} >Bed</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-down" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={Styles.text}>Bath</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-down" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={Styles.text}>Furnishing</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-down" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={Styles.text}>Home Decoration</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-down" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={Styles.text}>Kitchen</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-down" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={Styles.text}>Storage</Text>
              </Left>
              <Right>
                <Icon name="ios-arrow-down" />
              </Right>
            </ListItem>
          </List>
          </View>
          ): (null)
    }

      </Content>    
    );
  }
}
const Styles=StyleSheet.create({
  text:{
    fontWeight:"500"
  },
  view:{
    height:'35%',
    backgroundColor:'#696969'
  },
  icons:{
    color:'white'
  },
  text2:{
    color:'white',
    fontWeight:"700"

  },
  logo:{
    width:'90%',
    color:'white'
       
  },
  textHeader:{
    fontSize:25,
    marginLeft:'7%'
  }
})