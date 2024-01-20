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

const Signin = ({ navigation }) => {
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
                        style={styles.lowerBox}
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
                                style={styles.signUpText}
                            >
                                Sign Up
                            </Text>
                            <TextInput
                                placeholder='Full Name'
                                style={styles.TextInput}
                            />
                            <TextInput
                                placeholder='Email'
                                keyboardType='email-address'
                                style={styles.TextInput2}
                            />
                            <TextInput
                                placeholder='Phone Number'
                                keyboardType='number-pad'
                                style={[styles.TextInput2,{marginBottom: 20}]}
                            />
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={styles.Otp}
                            >
                                <Text
                                   onPress={() => navigation.navigate("Home")}
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
                                <Text style={{ fontFamily: 'custom-font', marginTop: 25 }}>
                                    Already have an account?{' '}
                                    <Text
                                        onPress={() => navigation.navigate('Signup')}
                                        style={{ color: '#008445' }}
                                    >
                                        Sign In
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

export default Signin

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
    lowerBox:{
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 470,
        marginBottom: -30,
    },
    WelcomeText:{
        textAlign: 'center',
        color: 'gray',
        fontSize: 22,
        fontFamily: 'custom-font',
    },
    signUpText:{
        color: '#008445',
        fontSize: 20,
        fontFamily: 'custom-font',
    },
    TextInput:{
        backgroundColor: '#e9e9e9',
        height: 50,
        marginTop: 20,
        paddingLeft: 20,
        fontFamily: 'custom-font',
        borderRadius: 10,
    },
    TextInput2:{
        backgroundColor: '#e9e9e9',
        height: 50,
        marginTop: 15,
        paddingLeft: 20,
        fontFamily: 'custom-font',
        borderRadius: 10,
    },
    Otp
    :{
        backgroundColor: '#008445',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }


    
})
