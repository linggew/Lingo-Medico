import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import GlobalFontSize, { SkipButtonStyles } from '../../constants/GlobalStyles';

export default function SkipButton({ props }: { props: { Txt: string } }) {
  return (
    <View>
      <Text style={[SkipButtonStyles.skip, GlobalFontSize().regularText]}>
        {props.Txt}
      </Text>
    </View>
  );
}

SkipButton.propTypes = {
  Txt: PropTypes.string
};
