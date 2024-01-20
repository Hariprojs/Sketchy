import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Dimensions,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
} from 'react-native'
import React from 'react'

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

const Signup = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/v1_28.png')}
                resizeMode='stretch'
                style={styles.img}
            >
                <View style={{ height: screenHeight, justifyContent: 'space-between' }}>
                    <Image style={styles.logo} source={require('../assets/v1_32.png')} />
                    <View
                        style={styles.lowerView}
                    >
                        <View style={{ paddingVertical: 40 }}>
                            <Text
                                style={styles.WelcomeText}
                            >
                                Welcome
                            </Text>
                        </View>
                        <View style={{ paddingHorizontal: 25 }}>
                            <Text
                                style={styles.Signin}
                            >
                                Sign In
                            </Text>
                            <TextInput
                                placeholder='Phone Number'
                                keyboardType='number-pad'
                                style={styles.Textinput}
                            />
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Home')}
                                activeOpacity={0.8}
                                style={styles.Otp}
                            >
                                <Text
                                    style={{
                                        fontFamily: 'custom-font',
                                        color: '#fff',
                                        fontSize: 16,
                                    }}
                                >
                                    Get OTP
                                </Text>
                            </TouchableOpacity>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'custom-font', marginTop: 30 }}>
                                    Dont have an account?{' '}
                                    <Text
                                        onPress={() => navigation.navigate('Signin')}
                                        style={{ color: '#008445' }}
                                    >
                                        Register Now
                                    </Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    img: {
        height: '100%',
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: screenHeight * 0.2,
        width: screenWidth,
        marginTop: 180,
    },
    lowerView:{
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 350,
        marginBottom: -30,
    },
    WelcomeText:{
        textAlign: 'center',
        color: 'gray',
        fontSize: 22,
        fontFamily: 'custom-font',
    },
    Signin:{
        color: '#008445',
        fontSize: 20,
        fontFamily: 'custom-font',
    },
    Textinput:{
        backgroundColor: '#e9e9e9',
        height: 50,
        marginTop: 20,
        paddingLeft: 20,
        fontFamily: 'custom-font',
        borderRadius: 10,
        marginBottom: 20,
    },
    Otp:{
        backgroundColor: '#008445',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }

})
