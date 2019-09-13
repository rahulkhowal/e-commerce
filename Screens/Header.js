import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title,Drawer, Card, CardItem, Thumbnail } from 'native-base';
import Sidebar from '../components/Sidebar';
import { Actions } from 'react-native-router-flux';
import Category from '../components/Category'
import Category2 from '../components/Category2'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
  Platform
} from 'react-native';
const { width } = Dimensions.get('window');
export default class HeaderMultipleIconExample extends Component {
  constructor(props) {
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  closeDrawer() {
    this.drawer._root.close()
  };

  openDrawer() {
    this.drawer._root.open()
  };
  render() {
    let dimensions = Dimensions.get("window");
    let imageHeight = Math.round((dimensions.width * 9) / 16);
    let imageWidth = dimensions.width;
    return (
     
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<Sidebar/>}
        onClose={() => this.closeDrawer()} >
      <ScrollView>
      <View >
        <Header style={styles.Header}>
          <Left>
            <Button transparent onPress={() => this.openDrawer()}>
              <Icon name='menu' style={styles.icons} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.icons}>E-commerce</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' style={styles.icons} />
            </Button>
            <Button transparent onPress={() => this.props.navigation.navigate('Notification')}>
              <Icon name='notifications' style={styles.icons}/>
            </Button>
            <Button transparent onPress={() => this.props.navigation.navigate('Save')}>
              <Icon name='paper-plane' style={styles.icons}/>
            </Button>
            <Button transparent onPress={() => this.props.navigation.navigate('Cart')}>
              <Icon name='cart' style={styles.icons} />
            </Button>
          </Right>
        </Header>
      </View>
      <View>
            <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                               Welcome
                            </Text>
                          
                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={"https://assets.myntassets.com/dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/retaillabs/2019/9/10/be04086b-b70a-493c-b89d-5ff61b1479b41568122832556-Top-Nav-final_01.jpg"}
                                        
                                    />
                                    <Category imageUri={"https://assets.myntassets.com/dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/retaillabs/2019/7/17/25115be5-fe1f-43b8-8cee-ce11616937a51563331211276-Men.jpg"}
                                      
                                    />
                                    <Category imageUri={"https://assets.myntassets.com/dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/retaillabs/2019/7/17/90a2d58a-d75e-4aa8-aae9-4b7ec985c3271563331241521-Women.jpg"}
                                      
                                    />
                                    <Category imageUri={"https://assets.myntassets.com/dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/retaillabs/2019/7/22/2c7b6216-9c8a-47bb-853b-256550191f8b1563801712285-Beauty.jpg"}
                                        
                                    />
                                    <Category imageUri={"https://assets.myntassets.com/dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/retaillabs/2019/7/17/05734835-3c26-4f0a-b404-966c76ceccbd1563331327332-Home.jpg"}
                                        
                                    />
                                    
                                </ScrollView>
                             </View>
                            <View style={{ height:380,marginTop:10 }}>
                               <Image source={{uri:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/retaillabs/2019/9/11/70395c5e-3014-4c63-b257-c4188af533011568205022410-Brand-Day-Template--2-.jpg"}}
                                  style={{height:200 ,flex:3}}
                                />
                            </View>
                             <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category2 imageUri={"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/retaillabs/2019/9/12/3acfa6b3-f1eb-4cfc-914d-f5c708699f301568272090333-Flat-500-off.jpg"}
                                        
                                    />
                                    <Category2 imageUri={"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/retaillabs/2019/8/22/286c9216-6f75-4fa9-a731-9ff929b086d21566471643939-Uber.jpg"}
                                      
                                    />
                                    <Category2 imageUri={"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/retaillabs/2019/9/10/65307908-2d8c-4204-849a-554fc6feda201568115911099-6b83ffb7-4ed8-44b1-b01b-5adce97fbb641566806138004-deskstop-deal-strip-1.jpg"}
                                      
                                    />
                                    <Category2 imageUri={"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/retaillabs/2019/9/4/8fba58bf-6ffa-40ad-832b-5a64897ab90c1567590085022-deal-strip.jpg"}
                                        
                                    />
                                    
                                    
                                </ScrollView>
                             </View>
                            <View style={{ height:350,marginTop:5 }}>
                               <Image source={{uri:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/banners/2019/9/10/f08f8021-59ab-43ef-9950-5660c06439a91568134611381-Home-fest-Banner.jpg"}}
                                  style={{height:200 ,flex:3}}
                                />
                            </View>
                            <View style={{ height:250,marginTop:10,marginBottom:10 }}>
                               <Image source={{uri:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/retaillabs/2019/9/12/374a582d-8cc0-4ad9-a988-e1d6427517ff1568275375079-back-to-the-roots_HP-banner.jpg"}}
                                  style={{height:200 ,flex:3}}
                                />
                            </View>
                            <View style={{height:50, marginTop:10}}>
                                <Image source={{uri:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/retaillabs/2019/9/11/09e87c58-02a0-47a3-9439-1b95d7e1799d1568190087579-collections.gif"}}
                                  style={{height:50   ,flex:1}}
                                />
                            </View>
                             <View style={{ height:400,marginBottom:10 }}>
                               
                                <Image source={{uri:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/retaillabs/2019/9/11/c9ae5862-cd4a-4552-abba-b1b01d4c4ffe1568209133113-Urban-strivers-women.jpg"}}
                                  style={{height:200 ,flex:3}}
                                />
                            </View>
                       </View>
                    </ScrollView>
            </View>

         </ScrollView>
     </Drawer>

    );
  }
}
const styles = StyleSheet.create({
  container2: {},
  Header:{
    backgroundColor:'#ffffff'
  },
  icons:{
    color:'black'
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e5e5e5"
  },
  text:{
  fontWeight:'800',
  justifyContent: "center",
  textAlign:'center',
  },
  view:{
    height:'20%'
  },
  Card:{
    justifyContent:'space-around'
  }
});