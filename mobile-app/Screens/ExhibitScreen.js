import React, { useState } from "react";
import Header from "../Components/Header";
import { DefaultTheme, Provider as PaperProvider, Button, IconButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';


import {
    Text,
    Image,
    View,
    TouchableHighlight,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    SafeAreaView,
    StyleSheet,
    Dimensions

} from "react-native";

const ExhibitScreen = ({ route, navigation }) => {
    const [bioHeight, setBioHeight] = useState(191);
    const fixed = {
        width: "100%",
        height: 300,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }

    const bio = {
        height: bioHeight,
        margin: 15,
        marginHorizontal: 25
    }

    function goHome() {
        navigation.navigate("Home");
    }

    function seeBio() {

        if (bioHeight === 191) {
            setBioHeight("100%")
        }
        else {
            setBioHeight(191)
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: route.params.data.artistImage }} style={{ ...fixed }}>
            </ImageBackground>
            <IconButton
                style={styles.button}
                icon="arrow-left"
                color="white"
                size={35}
                onPress={goHome}
            />

            <ScrollView style={styles.scrollView}>
                <View style={{ height: 300, width: "100%", justifyContent: "flex-end", paddingTop: 30 }}>
                    <Text style={styles.name}>{route.params.data.name}</Text>
                </View>
                <View style={{ backgroundColor: '#282B33', }}>
                    <TouchableOpacity style={bio} onPress={seeBio}>
                        <Text style={styles.heading}>Bio</Text>
                        <Text style={styles.text}>
                            {route.params.data.biography}
                        </Text>
                        <LinearGradient
                            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}
                            start={{ x: 0.0, y: 0.4 }}
                            end={{ x: 0.0, y: 0.7 }}
                            locations={[0.0, bioHeight === 191 ? 1.0 : 2.0]}
                            colors={['#282B3340', '#282B33f0']} //<-- last 2 chars from color control the opacity
                            useViewFrame={false}
                            style={fixed} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282B33',
    },
    scrollView: {
        flex: 1,
    },
    button: {
        width: 50,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        marginTop: 50,
        marginLeft: 13,
        backgroundColor: "#2F333C"
    },
    name: {
        color: "white",
        fontSize: 34,
        textTransform: "uppercase",
        fontWeight: "bold",
        marginLeft: 18,
        marginBottom: 5
    },
    text: {
        fontSize: 20,
        lineHeight: 25,
        color: "white"
    },
    heading: {
        fontSize: 26,

        color: "white",
        marginBottom: 10,
        marginTop: 1,
    }
});

export default ExhibitScreen;
