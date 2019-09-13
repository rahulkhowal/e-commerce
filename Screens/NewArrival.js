import React from 'react'
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
} from 'react-native'
const NewArrival=()=>{
	return(
		<View>
           <View style={{ height:350,flex:1,flexDirection:'row' }}>
                <Image source={{uri:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/banners/2019/9/6/207cdf2a-d45d-4b33-8075-68024a035f491567788222162-New-Season-AW19_01_01.jpg"}}
                       style={{height:400,width:250}}
                 />
                 <Image source={{uri:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/banners/2019/9/6/d8a63556-7a5e-4355-a88c-af654a41010d1567788222147-New-Season-AW19_01_02.jpg"}}
                       style={{height:400,width:250}}
                 />
           </View>
         </View>
		)
}
export default NewArrival
