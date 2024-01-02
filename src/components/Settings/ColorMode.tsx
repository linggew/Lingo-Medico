import React from 'react';
import { SafeAreaView, View, Text, TouchableHighlight } from 'react-native';
import { UseUIContext, UseProfileContext } from '../../utils/context';
import GlobalFontSize, {
  AccessibilityStyles,
  GlobalColor,
  ColorModeStyles
} from '../../constants/GlobalStyles';
import { storeState } from '../../utils/Storage';

/**
 * Color settings buttons and functionality.
 */
const ColorMode = () => {
  const {
    colorMode,
    setColorMode,
    selectedColorButton,
    setSelectedColorButton
  } = UseUIContext();
  const { state } = UseProfileContext();

  return (
    <View style={ColorModeStyles.mainContainer}>
      <SafeAreaView
        style={[
          AccessibilityStyles.contatiner,
          GlobalColor().AccessibilityContainerBKColor
        ]}
      >
        <Text
          style={[
            AccessibilityStyles.text,
            GlobalColor().AccessibilityTextColor,
            GlobalFontSize().regularText
          ]}
        >
          Select your color preference
        </Text>
        <View
          style={[ColorModeStyles.flexContainer, ColorModeStyles.subContainer]}
        >
          <View style={ColorModeStyles.subContainer}>
            <TouchableHighlight
              underlayColor="#F8C562"
              onPress={() => {
                setColorMode('default'), setSelectedColorButton(0);
                state.colorMode = 'default';
                state.selectedColorButton = 0;
                storeState(state);
              }}
            >
              <View
                style={[
                  {
                    borderColor:
                      selectedColorButton == 0 ? '#F8C562' : '#1D2468',
                    backgroundColor: 'white'
                  },
                  ColorModeStyles.colorBtn
                ]}
              />
            </TouchableHighlight>
          </View>
          <View style={ColorModeStyles.subContainer}>
            <TouchableHighlight
              underlayColor="#F8C562"
              onPress={() => {
                setColorMode('peach'), setSelectedColorButton(1);
                state.colorMode = 'peach';
                state.selectedColorButton = 1;
                storeState(state);
              }}
            >
              <View
                style={[
                  {
                    borderColor:
                      selectedColorButton == 1 ? '#F8C562' : '#1D2468',
                    backgroundColor: '#eebab4'
                  },
                  ColorModeStyles.colorBtn
                ]}
              />
            </TouchableHighlight>
          </View>
          <View style={ColorModeStyles.subContainer}>
            <TouchableHighlight
              underlayColor="#F8C562"
              onPress={() => {
                setColorMode('blue'), setSelectedColorButton(2);
                state.colorMode = 'blue';
                state.selectedColorButton = 2;
                storeState(state);
              }}
            >
              <View
                style={[
                  {
                    borderColor:
                      selectedColorButton == 2 ? '#F8C562' : '#1D2468',
                    backgroundColor: '#C0E9F9'
                  },
                  ColorModeStyles.colorBtn
                ]}
              />
            </TouchableHighlight>
          </View>
          <View style={ColorModeStyles.subContainer}>
            <TouchableHighlight
              underlayColor="#F8C562"
              onPress={() => {
                setColorMode('dark'), setSelectedColorButton(3);
                state.colorMode = 'dark';
                state.selectedColorButton = 3;
                storeState(state);
              }}
            >
              <View
                style={[
                  {
                    borderColor:
                      selectedColorButton == 3 ? '#F8C562' : '#1D2468',
                    backgroundColor: 'black'
                  },
                  ColorModeStyles.colorBtn
                ]}
              />
            </TouchableHighlight>
          </View>
        </View>
        <View>
          <Text style={[GlobalFontSize().regularText, { fontWeight: 'bold' }]}>
            {colorMode}
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};
export default ColorMode;
