import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons'

const AddAddress = ({ navigation }) => {
    return (
        <SafeAreaView style={{ paddingHorizontal: 30, marginTop: 10 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons name='arrow-back' size={25} />
            </TouchableOpacity>
            <View style={{ marginTop: -18 }}>
                <Text
                    style={{
                        fontFamily: 'custom-font',
                        fontSize: 25,
                        color: '#008445',
                        textAlign: 'center',
                    }}
                >
                    Add Address
                </Text>
            </View>
            <View
                style={{
                    marginTop: 20,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                }}
            >
                <TouchableOpacity style={[styles.btn, styles.bg_green]}>
                    <Text
                        style={{ fontFamily: 'custom-font', fontSize: 16, color: '#fff' }}
                    >
                        Home
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text
                        style={{ fontFamily: 'custom-font', fontSize: 16, color: '#000' }}
                    >
                        Office
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text
                        style={{ fontFamily: 'custom-font', fontSize: 16, color: '#000' }}
                    >
                        Others
                    </Text>
                </TouchableOpacity>
            </View>
            <TextInput
                placeholder='Address 1'
                style={{
                    backgroundColor: '#fff',
                    height: 50,
                    marginTop: 25,
                    paddingLeft: 20,
                    fontFamily: 'custom-font',
                    borderRadius: 10,
                    marginBottom: 15,
                }}
            />
            <TextInput
                placeholder='Address 2'
                style={{
                    backgroundColor: '#fff',
                    height: 50,
                    paddingLeft: 20,
                    fontFamily: 'custom-font',
                    borderRadius: 10,
                    marginBottom: 15,
                }}
            />
            <TextInput
                placeholder='Area'
                style={{
                    backgroundColor: '#fff',
                    height: 50,
                    paddingLeft: 20,
                    fontFamily: 'custom-font',
                    borderRadius: 10,
                    marginBottom: 15,
                }}
            />
            <TextInput
                placeholder='City'
                style={{
                    backgroundColor: '#fff',
                    height: 50,
                    paddingLeft: 20,
                    fontFamily: 'custom-font',
                    borderRadius: 10,
                    marginBottom: 15,
                }}
            />
            <View>
                <Image style={{ width: "100%", height: 300, borderRadius: 10 }} source={require('../assets/Images/map.jpg')} />
            </View>
            <TouchableOpacity
                activeOpacity={0.8}
                style={{
                    backgroundColor: '#008445',
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    marginTop: 20,
                }}
            >
                <Text
                    style={{
                        fontFamily: 'custom-font',
                        color: '#fff',
                        fontSize: 16,
                    }}
                >
                    Save Location
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default AddAddress

const styles = StyleSheet.create({
    btn: {
        paddingHorizontal: 26,
        paddingVertical: 15,
        borderRadius: 15,
        backgroundColor: '#fff'
    },
    bg_green: {
        backgroundColor: '#5cd69c',
        borderColor: '#5cd69c',
    },
})