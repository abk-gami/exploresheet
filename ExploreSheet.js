import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';

const ExploreSheet = () => {
  return (
        <MapView 
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            mapType={'satellite'} 
            region={{
                latitude: 10.607917, 
                longitude:  7.441819,
                latitudeDelta: 0.00001,
                longitudeDelta: 0.002131,
            }}
        >

            <Marker
            coordinate={{
                latitude: 10.607917, 
                longitude:  7.441819,
            }}
            image={require('./assets/map_marker.png')}
            title='AFIT HeadQuarters'
            description='No near here if you no wear shoe!'
            >
                <Callout tooltip>
                    <View>
                        <View style={styles.bubble}>
                            <Text style={styles.name}>AFIT Headquarters</Text>
                            <Text>A short description</Text>

                        </View>
                        <View style={styles.arrowBorder}/>
                        <View style={styles.arrow}/>
                    </View>
                </Callout>
                </Marker>
        </MapView>
  )
}

export default ExploreSheet

const styles = StyleSheet.create({
    map: {
        height: '100%'
    },
    //callout bubble
    bubble: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        backgroundColor:'#fff',
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 0.5,
        padding: 15,
        width: 150,
    },
    //Arrow below the bubble
    arrow: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: "#fff",
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -32,
    },
    arrowBorder: {
        backgroundColor: 'transparent',
        borderColor: "transparent",
        borderTopColor: '#007a87',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop:-0.5,
    },
    name: {
        fontSize: 16,
        marginBottom: 5,
    },
    image: {
        width: 120,
        height: 80,
    }
});