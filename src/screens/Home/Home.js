import React from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from "react-native";

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default function Home({ navigation }) {

    const Paper = () => {
        navigation.navigate('Paper')
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            paddingHorizontal: hp('3%')
        }
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={Paper}
                style={{
                    backgroundColor: "#222",
                    alignItems: "center",
                    paddingVertical: hp('1.2%'),
                    borderRadius: hp('10%'),
                    marginVertical: hp('2%')
                }}>
                <Text allowFontScaling={false}
                    style={{
                        fontSize: hp('2.6%'),
                        color: "#FFF"
                    }}>Paper</Text>

            </TouchableOpacity>
        </View>
    );
}

