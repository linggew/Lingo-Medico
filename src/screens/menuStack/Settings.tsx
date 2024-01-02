import React from 'react';
import { View } from 'react-native';
import { MenuStyles, GlobalColor } from '../../constants/GlobalStyles';
import { FontSizeOption, ColorMode } from '../../components/Settings';

/**
 * Render the FontSizeOption and ColorMode components which allow the user
 * to change the font size and color theme used throughout the app. These
 * settings are defined globally and persistently saved to and retrieved from storage.
 */
export default function Settings() {
  return (
    <View style={[MenuStyles.container, GlobalColor().regularBKColor]}>
      <FontSizeOption />
      <ColorMode />
    </View>
  );
}
