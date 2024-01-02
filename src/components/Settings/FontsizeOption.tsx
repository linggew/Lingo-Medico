import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import GlobalFontSize, {
  FontSizeStyles,
  AccessibilityStyles
} from '../../constants/GlobalStyles';
import { UseProfileContext, UseUIContext } from '../../utils/context';
import { storeState } from '../../utils/Storage';

/**
 * Font size settings buttons and functionality.
 */
export default function FontSizeOption() {
  const { setFontMode, selectedFontButton, setSelectedFontButton } =
    UseUIContext();
  const { state } = UseProfileContext();
  const styles = GlobalFontSize();

  return (
    <View>
      {console.log('the Fontsizeoption re-render')}
      <Text style={[styles.regularText, AccessibilityStyles.text]}>
        Select your Font Size Preference
      </Text>
      <View style={[FontSizeStyles.flexContainer, FontSizeStyles.subContainer]}>
        <View style={FontSizeStyles.subContainer}>
          <TouchableHighlight
            underlayColor="#F8C562"
            onPress={() => {
              setFontMode('large'), setSelectedFontButton(0);
              state.fontMode = 'large';
              state.selectedFontButton = 0;
              storeState(state);
            }}
          >
            <View
              style={[
                FontSizeStyles.colorBtn,
                {
                  borderColor: selectedFontButton == 0 ? '#F8C562' : '#1D2468'
                }
              ]}
            >
              <Text style={[FontSizeStyles.text, { fontSize: 40 }]}>Aa</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={FontSizeStyles.subContainer}>
          <TouchableHighlight
            underlayColor="#F8C562"
            onPress={() => {
              setFontMode('default'), setSelectedFontButton(1);
              state.fontMode = 'default';
              state.selectedFontButton = 1;
              storeState(state);
            }}
          >
            <View
              style={[
                FontSizeStyles.colorBtn,
                {
                  borderColor: selectedFontButton == 1 ? '#F8C562' : '#1D2468'
                }
              ]}
            >
              <Text style={[FontSizeStyles.text, { fontSize: 30 }]}>Aa</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={FontSizeStyles.subContainer}>
          <TouchableHighlight
            underlayColor="#F8C562"
            onPress={() => {
              setFontMode('small'), setSelectedFontButton(2);
              state.fontMode = 'small';
              state.selectedFontButton = 2;
              storeState(state);
            }}
          >
            <View
              style={[
                FontSizeStyles.colorBtn,
                {
                  borderColor: selectedFontButton == 2 ? '#F8C562' : '#1D2468'
                }
              ]}
            >
              <Text style={[FontSizeStyles.text, { fontSize: 20 }]}>Aa</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}
