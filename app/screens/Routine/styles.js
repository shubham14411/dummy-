import {Platform, StyleSheet, Dimensions, PixelRatio} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const dimensions = Dimensions.get('window');
const imageHeight = Math.round((dimensions.width * 9) / 75);
const imageWidth = (dimensions.width * 9) / 75;

const imageCancelHeight = Math.round((dimensions.width * 9) / 225);
const imageCancelWidth = (dimensions.width * 9) / 225;

const imageDialogHeight = Math.round((dimensions.width * 9) / 40);
const imageDialogWidth = (dimensions.width * 8) / 16;

export function normalize(size) {
  const scale = windowWidth / 320;
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#83E5E2",
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginHorizontal:25,
    flex:0.1,
    },
  textStyle:{
    fontWeight:'bold',
    color:'black',
    fontSize:normalize(25),
    flex:0.1,
    textAlign:'center',
    marginVertical:'20%'
    },
    textStyle2:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:normalize(12),
        },
    RoutineText:{
        fontWeight:'bold',
        color:'black',
        fontSize:normalize(20),
        paddingHorizontal:20,
        marginTop:10,
        },
    
    flatlistText:{
        fontWeight:'bold',
        color:'black',
        fontSize:normalize(15),
        marginLeft:"5%",
        marginTop:'5%'
        },
});
export default styles;