import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons'

const QuickOrder = ({ navigation }) => {
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
                    Quick Order
                </Text>
            </View>
            <View
                style={{
                    marginTop: 40,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                }}
            >
                <TouchableOpacity style={[styles.btn, styles.bg_green]}>
                    <Text
                        style={{ fontFamily: 'custom-font', fontSize: 16, color: '#fff' }}
                    >
                        Today
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text
                        style={{ fontFamily: 'custom-font', fontSize: 16, color: 'gray' }}
                    >
                        Tomorrow
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text
                        style={{ fontFamily: 'custom-font', fontSize: 16, color: 'gray' }}
                    >
                        Other
                    </Text>
                </TouchableOpacity>
            </View>
            <TextInput
                placeholder='Pickup Date'
                style={{
                    backgroundColor: '#fff',
                    height: 50,
                    marginTop: 25,
                    paddingLeft: 20,
                    fontFamily: 'custom-font',
                    borderRadius: 10,
                    marginBottom: 20,
                }}
            />
            <TextInput
                placeholder='Pickup Date'
                style={{
                    backgroundColor: '#fff',
                    height: 50,
                    paddingLeft: 20,
                    fontFamily: 'custom-font',
                    borderRadius: 10,
                    marginBottom: 20,
                }}
            />
            <View style={{ alignItems: 'flex-end' }}>
                <Text
                    style={{ fontFamily: 'custom-font', fontSize: 12, color: 'gray' }}
                >
                    Expected delivery is within 23 hours from the
                </Text>
                <Text
                    style={{ fontFamily: 'custom-font', fontSize: 12, color: 'gray' }}
                >
                    time of pick up
                </Text>
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
                 onPress={() => navigation.navigate("ManageAddress")}
                    style={{
                        fontFamily: 'custom-font',
                        color: '#fff',
                        fontSize: 16,
                    }}

                >
                    Place Order
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default QuickOrder

const styles = StyleSheet.create({
    btn: {
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 26,
        paddingVertical: 13,
        borderRadius: 15,
    },
    bg_green: {
        backgroundColor: '#5cd69c',
        borderColor: '#5cd69c',
    },
})
