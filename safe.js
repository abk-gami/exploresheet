import React, { useEffect } from 'react';
import {
  StyleSheet,
  // Text,
  // TextInput,
  View,
  // ScrollView,
  Animated,
  // Image,
  // TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from "react-native-maps";

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import { markers, mapDarkStyle, mapStandardStyle } from './model/mapData';
import StarRating from './components/StarRating';

// import { useTheme } from '@react-navigation/native';

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const ExploreScreen = () => {
    // const theme = useTheme();
  
    const initialMapState = {
      markers,
      categories: [
        { 
          name: 'Fastfood Center', 
          icon: <MaterialCommunityIcons style={styles.chipsIcon} name="food-fork-drink" size={18} />,
        },
        {
          name: 'Restaurant',
          icon: <Ionicons name="ios-restaurant" style={styles.chipsIcon} size={18} />,
        },
        {
          name: 'Dineouts',
          icon: <Ionicons name="md-restaurant" style={styles.chipsIcon} size={18} />,
        },
        {
          name: 'Snacks Corner',
          icon: <MaterialCommunityIcons name="food" style={styles.chipsIcon} size={18} />,
        },
        {
          name: 'Hotel',
          icon: <Fontisto name="hotel" style={styles.chipsIcon} size={15} />,
        },
    ],
      region: {
        latitude: 22.62938671242907,
        longitude: 88.4354486029795,
        latitudeDelta: 0.04864195044303443,
        longitudeDelta: 0.040142817690068,
      },
    };
  
    const [state, setState] = React.useState(initialMapState);

    const _map = React.useRef(null);
    const _scrollView = React.useRef(null);

    return(
        // <View style={styles.container}>
          <MapView
          ref={_map}
          initialRegion={state.region}
          style={styles.container}
          provider={PROVIDER_GOOGLE}
          mapType={'satellite'} 
          >
            {state.markers.map((marker, index) => {
       return (
        <Marker key={index} coordinate={marker.coordinate} onPress={(e)=>onMarkerPress(e)}>
          <Animated.View style={[styles.markerWrap]}>
            <Animated.Image
              source={require('./assets/map_marker.png')}
              style={[styles.marker]}
              resizeMode="cover"
            />
          </Animated.View>
        </Marker>
      );
             })}
          </MapView>
        // </View>
    )
    }
    export default ExploreScreen

 //STYLESHEET
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      searchBox: {
        position:'absolute', 
        marginTop: Platform.OS === 'ios' ? 40 : 20, 
        flexDirection:"row",
        backgroundColor: '#fff',
        width: '90%',
        alignSelf:'center',
        borderRadius: 5,
        padding: 10,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
      },
      chipsScrollView: {
        position:'absolute', 
        top:Platform.OS === 'ios' ? 90 : 80, 
        paddingHorizontal:10
      },
      chipsIcon: {
        marginRight: 5,
      },
      chipsItem: {
        flexDirection:"row",
        backgroundColor:'#fff', 
        borderRadius:20,
        padding:8,
        paddingHorizontal:20, 
        marginHorizontal:10,
        height:35,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
      },
      scrollView: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 10,
      },
      endPadding: {
        paddingRight: width - CARD_WIDTH,
      },
      card: {
        // padding: 10,
        elevation: 2,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        overflow: "hidden",
      },
      cardImage: {
        flex: 3,
        width: "100%",
        height: "100%",
        alignSelf: "center",
      },
      textContent: {
        flex: 2,
        padding: 10,
      },
      cardtitle: {
        fontSize: 12,
        // marginTop: 5,
        fontWeight: "bold",
      },
      cardDescription: {
        fontSize: 12,
        color: "#444",
      },
      markerWrap: {
        alignItems: "center",
        justifyContent: "center",
        width:50,
        height:50,
      },
      marker: {
        width: 30,
        height: 30,
      },
      button: {
        alignItems: 'center',
        marginTop: 5
      },
      signIn: {
          width: '100%',
          padding:5,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 3
      },
      textSign: {
          fontSize: 14,
          fontWeight: 'bold'
      }
    });