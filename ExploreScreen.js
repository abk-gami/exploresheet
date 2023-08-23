import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Animated,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import { markers, mapDarkStyle, mapStandardStyle } from '../model/mapData';
import StarRating from '../components/StarRating';

import { useTheme } from '@react-navigation/native';

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const ExploreScreen = () => {
    const theme = useTheme();
  
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
        <View>

        </View>
    )
    }