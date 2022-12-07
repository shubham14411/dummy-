import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const MyTasks = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#87cefa'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: '10%',
        }}>
        <TouchableOpacity
        onPress={()=>navigation.goBack()}>
          <Image
            style={{height: 55, width: 55}}
            source={require('../../assets/back1.png')}
          />
        </TouchableOpacity>
        <Text
          style={{marginVertical: '5%', fontSize: 30, marginHorizontal: '5%'}}>
          My tasks
        </Text>
      </View>

      <View style={{alignItems: 'center'}}>
        <TouchableOpacity>
        <View
          style={{
            backgroundColor: '#1e90ff',
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
          }}>
          <View
            style={{
              backgroundColor: '#87cefa',
              width: 80,
              height: 80,
              borderRadius: 80 / 2,
              marginHorizontal: 10,
              marginVertical: 10,
            }}>
            <View
              style={{
                backgroundColor: '#1e90ff',
                width: 60,
                height: 60,
                borderRadius: 60 / 2,
                marginHorizontal: 10,
                marginVertical: 10,
              }}>
              <Text
                style={{
                  fontSize: 30,
                  textAlign: 'center',
                  padding: '15%',
                  color: 'white',
                }}>
                1
              </Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View
          style={{
            backgroundColor: '#e6e6fa',
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            marginVertical: 5,
          }}>
          <View
            style={{
              backgroundColor: '#87cefa',
              width: 80,
              height: 80,
              borderRadius: 80 / 2,
              marginHorizontal: 10,
              marginVertical: 10,
            }}>
            <View
              style={{
                backgroundColor: '#e6e6fa',
                width: 60,
                height: 60,
                borderRadius: 60 / 2,
                marginHorizontal: 10,
                marginVertical: 10,
              }}>
              <Text
                style={{
                  fontSize: 30,
                  textAlign: 'center',
                  padding: '15%',
                  color: 'red',
                }}>
                1
              </Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
        <View
          style={{
            backgroundColor: '#e6e6fa',
            width: 200,
            height: 200,
            borderRadius: 200 / 2,
            marginVertical: 5,
          }}>
          <View
            style={{
              backgroundColor: '#87cefa',
              width: 180,
              height: 180,
              borderRadius: 180 / 2,
              marginHorizontal: 10,
              marginVertical: 10,
            }}>
            <View
              style={{
                backgroundColor: '#e6e6fa',
                width: 160,
                height: 160,
                borderRadius: 160 / 2,
                marginHorizontal: 10,
                marginVertical: 10,
              }}>
              <Text
                style={{
                  fontSize: 30,
                  textAlign: 'center',
                  color: 'red',
                  padding: '20%',
                }}>
                4 tasks
              </Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>

       <TouchableOpacity>
        <View
          style={{
            backgroundColor: '#ffb6c1',
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            marginVertical: 4,
          }}>
          <View
            style={{
              backgroundColor: '#87cefa',
              width: 80,
              height: 80,
              borderRadius: 80 / 2,
              marginHorizontal: 10,
              marginVertical: 10,
            }}>
            <View
              style={{
                backgroundColor: '#ffb6c1',
                width: 60,
                height: 60,
                borderRadius: 60 / 2,
                marginHorizontal: 10,
                marginVertical: 10,
              }}>
              <Text
                style={{
                  fontSize: 30,
                  textAlign: 'center',
                  padding: '15%',
                  color: 'black',
                }}>
                2
              </Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
      </View>
      

      <View style={{alignItems: 'center', marginVertical: '3%'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#808080',
            width: 100,
            height: 50,
            justifyContent: 'center',
            borderRadius: 5,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,
            elevation: 11,
            
          }}
          onPress={()=>navigation.navigate('Show')}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 15,
              fontStyle: 'italic',
              color: 'white',
            }}>
            show all
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', marginVertical: '3%'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#808080',
            width: 150,
            height: 50,
            justifyContent: 'center',
            borderRadius: 5,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,
            elevation: 11,
          }}
          onPress={()=>navigation.navigate('TodayTask')}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 15,
              fontStyle: 'italic',
              color: 'white',
            }}>
            Monday
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 15,
              fontStyle: 'italic',
              color: 'white',
            }}>
            18 Aug
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyTasks;
