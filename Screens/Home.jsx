import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ScrollView,
} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons'
import * as Progress from 'react-native-progress';


const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginTop: 10, marginBottom: 20 }}>
                <MaterialIcons name='menu' size={25} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Image
                        style={{ width: '100%', height: 200, borderRadius: 10 }}
                        source={require('../assets/Images/img_1.jpg')}
                    />
                </View>
                <View style={styles.shadowProp}>
                    <Image
                        style={styles.OfferBoardimg}
                        source={require('../assets/Images/img_2.jpg')}
                    />
                    <View
                        style={styles.OfferBoard}
                    >
                        <Text
                            style={styles.Offertext}
                        >
                            Get 25% Offer
                        </Text>
                        <Text
                            style={{ fontFamily: 'custom-font', fontSize: 12, color: 'gray' }}
                        >
                            On your first order with us!
                        </Text>
                    </View>
                </View>
                <View
                    style={styles.QuickOrder}
                >
                    <TouchableOpacity onPress={() => navigation.navigate("QuickOrder")} style={styles.btns}>
                        <MaterialIcons name='electric-bolt' size={20} color={"#fff"} />
                        <Text
                            style={styles.OrderText}
                        >
                            Quick Order
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("DetailedOrder")} style={styles.btns}>
                        <MaterialIcons name='adjust' size={20} color={"#fff"} />
                        <Text
                            style={styles.DetailOrder}
                        >
                            Detailed Order
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 25, marginBottom: 20 }}>
                    <Text
                        style={styles.yourOrder}
                    >
                        Your Orders
                    </Text>
                </View>

                <View style={styles.order_container}>
                    <View
                        style={styles.yourOrderTop}
                    >
                     
                     <Progress.Circle size={80} strokeCap={"round"}  indeterminate={false} progress={0.6} animated={true} color={"#008445"} unfilledColor={"#b2ccc0"} borderWidth={0} thickness={10} showsText textStyle={{fontWeight: 'bold' }} formatText={()=>"62%"} />
                  
                        <View style={{ paddingLeft: 10, gap: 10 }}>
                            <Text
                                style={styles.Orderno}
                            >
                                Order Number: 233567B
                            </Text>
                            <Text
                                style={styles.ConfirmText}
                            >
                                Confirmed
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginTop: 15,
                        }}
                    >
                        <View style={{ marginRight: 25 }}>
                            <Text
                                style={{
                                    color: '#008445',
                                    fontFamily: 'custom-font',
                                    fontSize: 18,
                                    marginBottom: 10,
                                }}
                            >
                                Collection
                            </Text>
                            <Text
                                style={styles.Datetext}
                            >
                                Date: 22.10.2022
                            </Text>
                            <Text style={{ fontFamily: 'custom-font', color: 'gray' }}>
                                Time: 9.30 AM
                            </Text>
                        </View>
                        <View
                            style={{ borderRightColor: '#d3d3d3', borderRightWidth: 1 }}
                        ></View>
                        <View style={{ marginLeft: 25 }}>
                            <Text
                                style={styles.DeliveryText}
                            >
                                Delivery
                            </Text>
                            <Text
                                style={styles.Datetext}
                            >
                                Date: 22.10.2022
                            </Text>
                            <Text style={{ fontFamily: 'custom-font', color: 'gray' }}>
                                Time: 11.00 AM
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.order_container}>
                    <View
                        style={styles.yourOrderTop}
                    >
                          <Progress.Circle size={80} strokeCap={"round"}  indeterminate={false} progress={0.7} animated={true} color={"#008445"} unfilledColor={"#b2ccc0"} borderWidth={0} thickness={10} showsText textStyle={{fontWeight: 'bold' }} formatText={()=>"70%"} />
                        <View style={{ paddingLeft: 10, gap: 10 }}>
                            <Text
                                style={styles.Orderno}
                            >
                                Order Number: 233567B
                            </Text>
                            <Text
                                style={styles.ConfirmText}
                            >
                                Confirmed
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginTop: 15,
                        }}
                    >
                        <View style={{ marginRight: 25 }}>
                            <Text
                                style={styles.collection}
                            >
                                Collection
                            </Text>
                            <Text
                                style={styles.Datetext}
                            >
                                Date: 22.10.2022
                            </Text>
                            <Text style={{ fontFamily: 'custom-font', color: 'gray' }}>
                                Time: 9.30 AM
                            </Text>
                        </View>
                        <View
                            style={{ borderRightColor: '#d3d3d3', borderRightWidth: 1 }}
                        ></View>
                        <View style={{ marginLeft: 25 }}>
                            <Text
                                style={styles.DeliveryText}
                            >
                                Delivery
                            </Text>
                            <Text
                                style={styles.Datetext}
                            >
                                Date: 22.10.2022
                            </Text>
                            <Text style={{ fontFamily: 'custom-font', color: 'gray' }}>
                                Time: 11.00 AM
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
    },
    shadowProp: {
        flexDirection: 'row',
        borderRadius: 20,
        marginTop: 20,
        elevation: 20,
        shadowColor: '#000',
    },
    order_container: {
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        paddingVertical: 20,
        marginBottom: 20,
        borderRadius: 15,
    },
    btns: {
        backgroundColor: '#008445',
        width: '46.5%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        gap: 5
    },
    OfferBoardimg:{
        width: '50%',
        height: 100,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    OfferBoard:{
        justifyContent: 'center',
        width: '50%',
        paddingLeft: 15,
        backgroundColor: '#e7f8f0',
        gap: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    Offertext:{
        fontFamily: 'custom-font',
        fontSize: 22,
        color: '#008445',
    },
    QuickOrder:{
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        flexDirection: 'row',
        width: '100%',
        marginTop: 20,
    },
    OrderText:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontFamily: 'custom-font',
    },
    DetailOrder:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontFamily: 'custom-font',
    },
    yourOrder:{
        fontFamily: 'custom-font',
        fontSize: 20,
        color: '#008445',
    },
    yourOrderTop:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 15,
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 1,
    },
    Orderno:{
        fontFamily: 'custom-font',
        fontSize: 18,
        color: '#008445',
    },
    ConfirmText:{
        fontFamily: 'custom-font',
        fontSize: 16,
        color: 'gray',
    },
    Datetext:{
        fontFamily: 'custom-font',
        color: 'gray',
        marginBottom: 5,
    },
    DeliveryText:
        {
            color: '#008445',
            fontFamily: 'custom-font',
            fontSize: 18,
            marginBottom: 10,
        },
    
    collection: {
            color: '#008445',
            fontFamily: 'custom-font',
            fontSize: 18,
            marginBottom: 10,
        }
    

})
