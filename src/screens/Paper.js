import React, {
    useState
} from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { Menu } from 'react-native-paper';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Paper() {

    const [menu, setMenu] = useState(false);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        }
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{
                    width: hp('2.6%'),
                    height: hp('2.6%'),
                    backgroundColor: "#FFF",
                    borderRadius: hp('1.3%'),
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <Menu
                    visible={menu}
                    onDismiss={() => setMenu(false)}
                    anchor={<Ionicons
                        onPress={() => setMenu(true)}
                        name={"settings-sharp"}
                        size={hp('2%')}
                        color={"#000"}
                    />}>
                    <Menu.Item title="Download" />
                    <Menu.Item title="Report" />
                    <Menu.Item onPress={() => setMenu(false)} title="Cancel" />
                </Menu>
            </TouchableOpacity>
        </View>
    );
}

