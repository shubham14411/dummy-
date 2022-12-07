// import { Image, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const TextComponent = ({
//     item,
//     quantity,
//     price
// }) => {
//   return (
//     <View style={styles.container}>

//       <View style={styles.itemView}>
//         <Image
//         source={require('../assets/vegfood.png')}
//         style={{height:30,width:30}}
//         />
//         <Text style={styles.itemText}>{item}</Text>
//       </View>

//       <View style={styles.priceView}>

//         <View style={{flexDirection:'row',marginHorizontal:"12%"}}>
//         <Text style={{fontSize:20}}>{'\u20B9'}</Text>
//         <Text style={styles.priceText}>{quantity}</Text>
//         </View>
        
//         <View style={{flexDirection:'row'}}>
//         <Text style={{fontSize:20}}>{'\u20B9'}</Text>
//         <Text style={styles.priceText}>{price}</Text>
//         </View>

//       </View>
//     </View>
//   )
// }

// export default TextComponent;

// const styles = StyleSheet.create({
//     container:{
//         margin:5
//     },
//     itemView:{
//         flexDirection:'row'
//     },
//     priceView:{
//         flexDirection:'row',
//         justifyContent:'space-between'
//     },
//     itemText:{
//         color:'black',
//         fontWeight:'bold',
//         fontSize:20,
//         marginHorizontal:15
//     },
//     priceText:{
//         color:'black',
//         fontWeight:'bold',
//         fontSize:20
//     }
// })