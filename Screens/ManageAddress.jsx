import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons'

const ManageAddress = ({ navigation }) => {
    const Address = [
        {
          address: 'Home,',
          city: 'No-28/361, Ahmed Nagar,',
          district: 'Birer Dist, Gujrat,',
          postalCode: '300110',
          iconColor: 'red',
        },
        {
            address: 'School',
            city: 'No-28/361, Ahmed Nagar,',
            district: 'Birer Dist, Gujrat,',
            postalCode: '300110',
            iconColor: 'red',
          },
          {
            address: 'Collage',
            city: 'No-28/361, Ahmed Nagar,',
            district: 'Birer Dist, Gujrat,',
            postalCode: '300110',
            iconColor: 'red',
          },
      
    
    
    ]

    return (
        <SafeAreaView style={{ paddingHorizontal: 20 }}>
            <Text
                style={{
                    textAlign: 'center',
                    fontFamily: 'custom-font',
                    marginTop: 25,
                    fontSize: 22,
                    color: '#008445',
                    marginBottom: 20
                }}
            >
                Manage Address
            </Text>
            <View>
      {Address.map((item, index) => (
        <View
          key={index}
          style={{
            marginBottom: 15,
            padding: 20,
            backgroundColor: '#fff',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderRadius: 15,
            elevation: 5,
            shadowColor: 'gray',
          }}
        >
          <View style={{ gap: 5 }}>
            <Text style={{ fontFamily: 'custom-font', color: '#008445', fontSize: 16 }}>{item.address}</Text>
            <Text style={{ fontFamily: 'custom-font', color: '#008445', fontSize: 16 }}>{item.city}</Text>
            <Text style={{ fontFamily: 'custom-font', color: '#008445', fontSize: 16 }}>{item.district}</Text>
            <Text style={{ fontFamily: 'custom-font', color: '#008445', fontSize: 16 }}>{item.postalCode}</Text>
          </View>
          <View style={{ gap: 10 }}>
            <MaterialIcons name='dangerous' color={item.iconColor} size={20} />
            <MaterialIcons name='edit-document' color='#008445' size={20} />
          </View>
        </View>
      ))}
    </View>

            <TouchableOpacity
                activeOpacity={0.8}
                style={{
                    backgroundColor: '#008445',
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                }}
                onPress={() => navigation.navigate("AddAddress")}
            >
                <Text
                    style={{
                        fontFamily: 'custom-font',
                        color: '#fff',
                        fontSize: 16,
                    }}
                >
                    Add New Address
                </Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default ManageAddress

const styles = StyleSheet.create({})
