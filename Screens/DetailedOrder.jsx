import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons'

const DetailedOrder = ({ navigation }) => {


    const [counts, setCounts] = useState([2, 1, 0, 0, 0, 0, 0, 1]);


    const handleIncrement = (index) => {
        const updatedCounts = [...counts];
        updatedCounts[index] += 1;
        setCounts(updatedCounts);
      };
    
      const handleDecrement = (index) => {
        if (counts[index] > 0) {
          const updatedCounts = [...counts];
          updatedCounts[index] -= 1;
          setCounts(updatedCounts);
        }
      };

      




    return (
        <SafeAreaView style={{ paddingHorizontal: 20, marginTop: 10 }}>
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
                    Detailed Order
                </Text>
            </View>
            <View style={{ marginTop: 30, flexDirection: 'row' }}>
                <View
                    style={{
                        width: 70,
                        height: 70,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <View
                        style={{ backgroundColor: '#fff', padding: 10, borderRadius: 50 }}
                    >
                        <MaterialIcons name='house' color={'#008445'} size={35} />
                    </View>
                    <Text
                        style={{
                            fontFamily: 'custom-font',
                            marginTop: 10,
                            color: '#008445',
                            fontSize: 12,
                        }}
                    >
                        Household
                    </Text>
                </View>
                <View
                    style={{
                        width: 70,
                        height: 70,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <View
                        style={{ backgroundColor: '#fff', padding: 10, borderRadius: 50 }}
                    >
                        <MaterialIcons name='boy' color={'#008445'} size={35} />
                    </View>
                    <Text
                        style={{
                            fontFamily: 'custom-font',
                            marginTop: 10,
                            color: '#008445',
                            fontSize: 12,
                        }}
                    >
                        Men
                    </Text>
                </View>
                <View
                    style={{
                        width: 70,
                        height: 70,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <View
                        style={{ backgroundColor: '#fff', padding: 10, borderRadius: 50 }}
                    >
                        <MaterialIcons name='girl' color={'#008445'} size={35} />
                    </View>
                    <Text
                        style={{
                            fontFamily: 'custom-font',
                            marginTop: 10,
                            color: '#008445',
                            fontSize: 12,
                        }}
                    >
                        Women
                    </Text>
                </View>
                <View
                    style={{
                        width: 70,
                        height: 70,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <View
                        style={{ backgroundColor: '#fff', padding: 10, borderRadius: 50 }}
                    >
                        <MaterialIcons name='factory' color={'#008445'} size={35} />
                    </View>
                    <Text
                        style={{
                            fontFamily: 'custom-font',
                            marginTop: 10,
                            color: '#008445',
                            fontSize: 12,
                        }}
                    >
                        Industrial
                    </Text>
                </View>
                <View
                    style={{
                        width: 70,
                        height: 70,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <View
                        style={{ backgroundColor: '#fff', padding: 10, borderRadius: 50 }}
                    >
                        <MaterialIcons name='ice-skating' color={'#008445'} size={35} />
                    </View>
                    <Text
                        style={{
                            fontFamily: 'custom-font',
                            marginTop: 10,
                            color: '#008445',
                            fontSize: 12,
                        }}
                    >
                        Others
                    </Text>
                </View>
            </View>
            <View
                style={{
                    backgroundColor: '#fff',
                    borderRadius: 15,
                    marginTop: 20,
                    paddingHorizontal: 10,
                    gap: 15,
                    paddingVertical: 15,
                }}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ width: 75, height: 60 }}></View>
                    <View style={styles.small_box}>
                        <Text style={{ fontFamily: 'custom-font' }}>Wash</Text>
                    </View>
                    <View style={styles.small_box}>
                        <Text style={{ fontFamily: 'custom-font' }}>Dry Wash</Text>
                    </View>
                    <View style={styles.small_box}>
                        <Text style={{ fontFamily: 'custom-font' }}>Iron</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={styles.small_box}>
                        <Text style={{ fontFamily: 'custom-font' }}>Pant</Text>
                    </View>
                    <View style={styles.outlined_small_box}>
                        <Text style={{ fontFamily: 'custom-font', color: '#008445' }}>
                            AED 130
                        </Text>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <MaterialIcons  onPress={() => handleDecrement(0)} name='remove' />
                            <Text style={{ fontFamily: 'custom-font', color: '#008445' }}>
                                {counts[0]}
                            </Text>
                            <MaterialIcons onPress={() => handleIncrement(0)} name='add' />
                        </View>
                    </View>
                    <View style={styles.outlined_small_box}>
                        <Text style={{ fontFamily: 'custom-font', color: '#008445' }}>
                            AED 130
                        </Text>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <MaterialIcons onPress={() => handleDecrement(1)} name='remove' />
                            <Text style={{ fontFamily: 'custom-font', color: '#008445' }}>
                                {counts[1]}
                            </Text>
                            <MaterialIcons onPress={() => handleIncrement(1)} name='add' />
                        </View>
                    </View>
                    <View style={styles.grayouted_small_box}>
                        <Text style={{ fontFamily: 'custom-font', color: '#fff' }}>
                            AED 150
                        </Text>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <MaterialIcons name='remove' color={'#fff'} />
                            <Text style={{ fontFamily: 'custom-font', color: '#fff' }}>
                                0
                            </Text>
                            <MaterialIcons name='add' color={'#fff'} />
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={styles.small_box}>
                        <Text style={{ fontFamily: 'custom-font' }}>Trouser</Text>
                    </View>
                    <View style={styles.outlined_small_box}>
                        <Text style={{ fontFamily: 'custom-font', color: '#008445' }}>
                            AED 130
                        </Text>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <MaterialIcons onPress={() => handleDecrement(2)} name='remove' />
                            <Text style={{ fontFamily: 'custom-font', color: '#008445' }}>
                                {counts[2]}
                            </Text>
                            <MaterialIcons onPress={() => handleIncrement(2)} name='add' />
                        </View>
                    </View>
                    <View style={styles.outlined_small_box}>
                        <Text style={{ fontFamily: 'custom-font', color: '#008445' }}>
                            AED 130
                        </Text>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <MaterialIcons onPress={() => handleDecrement(3)}  name='remove' />
                            <Text style={{ fontFamily: 'custom-font', color: '#008445' }}>
                                {counts[3]}
                            </Text>
                            <MaterialIcons onPress={() => handleIncrement(3)} name='add' />
                        </View>
                    </View>
                    <View style={styles.grayouted_small_box}>
                        <Text style={{ fontFamily: 'custom-font', color: '#fff' }}>
                            AED 150
                        </Text>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <MaterialIcons  name='remove' color={'#fff'} />
                            <Text style={{ fontFamily: 'custom-font', color: '#fff' }}>
                                0
                            </Text>
                            <MaterialIcons name='add' color={'#fff'} />
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={styles.small_box}>
                        <Text style={{ fontFamily: 'custom-font' }}>Shirt</Text>
                    </View>
                    <View style={styles.outlined_small_box}>
                        <Text style={{ fontFamily: 'custom-font', color: '#008445' }}>
                            AED 130
                        </Text>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <MaterialIcons onPress={() => handleDecrement(4)} name='remove' />
                            <Text style={{ fontFamily: 'custom-font', color: '#008445' }}>
                                {counts[4]}
                            </Text>
                            <MaterialIcons onPress={() => handleIncrement(4)} name='add' />
                        </View>
                    </View>
                    <View style={styles.outlined_small_box}>
                        <Text style={{ fontFamily: 'custom-font', color: '#008445' }}>
                            AED 130
                        </Text>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <MaterialIcons  onPress={() => handleDecrement(5)} name='remove' />
                            <Text style={{ fontFamily: 'custom-font', color: '#008445' }}>
                                {counts[5]}
                            </Text>
                            <MaterialIcons onPress={() => handleIncrement(5)} name='add' />
                        </View>
                    </View>
                    <View style={styles.outlined_small_box}>
                        <Text style={{ fontFamily: 'custom-font', color: '#008445' }}>
                            AED 130
                        </Text>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <MaterialIcons  onPress={() => handleDecrement(6)} name='remove' />
                            <Text style={{ fontFamily: 'custom-font', color: '#008445' }}>
                                2
                            </Text>
                            <MaterialIcons onPress={() => handleIncrement(6)} name='add' />
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={styles.small_box}>
                        <Text style={{ fontFamily: 'custom-font' }}>T-Shirt</Text>
                    </View>
                    <View style={styles.outlined_small_box}>
                        <Text style={{ fontFamily: 'custom-font', color: '#008445' }}>
                            AED 130
                        </Text>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <MaterialIcons name='remove' />
                            <Text style={{ fontFamily: 'custom-font', color: '#008445' }}>
                                2
                            </Text>
                            <MaterialIcons name='add' />
                        </View>
                    </View>
                    <View style={styles.grayouted_small_box}>
                        <Text style={{ fontFamily: 'custom-font', color: '#fff' }}>
                            AED 130
                        </Text>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <MaterialIcons name='remove' color={'#fff'} />
                            <Text style={{ fontFamily: 'custom-font', color: '#fff' }}>
                                0
                            </Text>
                            <MaterialIcons name='add' color={'#fff'} />
                        </View>
                    </View>
                    <View style={styles.grayouted_small_box}>
                        <Text style={{ fontFamily: 'custom-font', color: '#fff' }}>
                            AED 130
                        </Text>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <MaterialIcons name='remove' color={'#fff'} />
                            <Text style={{ fontFamily: 'custom-font', color: '#fff' }}>
                                0
                            </Text>
                            <MaterialIcons name='add' color={'#fff'} />
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={styles.small_box}>
                        <Text style={{ fontFamily: 'custom-font' }}>Jacket</Text>
                    </View>
                    <View style={styles.outlined_small_box}>
                        <Text style={{ fontFamily: 'custom-font', color: '#008445' }}>
                            AED 130
                        </Text>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <MaterialIcons  onPress={() => handleDecrement(7)} name='remove' />
                            <Text style={{ fontFamily: 'custom-font', color: '#008445' }}>
                                {counts[7]}
                            </Text>
                            <MaterialIcons onPress={() => handleIncrement(7)} name='add' />
                        </View>
                    </View>
                    <View style={styles.grayouted_small_box}>
                        <Text style={{ fontFamily: 'custom-font', color: '#fff' }}>
                            AED 130
                        </Text>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <MaterialIcons name='remove' color={'#fff'} />
                            <Text style={{ fontFamily: 'custom-font', color: '#fff' }}>
                                0
                            </Text>
                            <MaterialIcons name='add' color={'#fff'} />
                        </View>
                    </View>
                    <View style={styles.grayouted_small_box}>
                        <Text style={{ fontFamily: 'custom-font', color: '#fff' }}>
                            AED 150
                        </Text>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <MaterialIcons name='remove' color={'#fff'} />
                            <Text style={{ fontFamily: 'custom-font', color: '#fff' }}>
                                0
                            </Text>
                            <MaterialIcons name='add' color={'#fff'} />
                        </View>
                    </View>
                </View>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                }}
            >
                <Text
                    style={{ fontFamily: 'custom-font', color: 'gray', fontSize: 16 }}
                >
                    Quantity: <Text style={{ color: '#008445' }}>8</Text>
                </Text>
                <Text
                    style={{ fontFamily: 'custom-font', color: 'gray', fontSize: 16 }}
                >
                    Total Price: <Text style={{ color: '#008445' }}>AED 588</Text>
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
                    marginTop: 20
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
                    Done
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default DetailedOrder

const styles = StyleSheet.create({
    small_box: {
        elevation: 3,
        shadowColor: '#000',
        width: 75,
        height: 60,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    outlined_small_box: {
        borderColor: '#008445',
        borderWidth: 1,
        width: 75,
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    grayouted_small_box: {
        backgroundColor: '#d3d3d3',
        width: 75,
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
})
