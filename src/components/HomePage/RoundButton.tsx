import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RoundBtnStyles } from '../../constants/GlobalStyles';

RoundButton.propTypes = {
  ButtonIcon: PropTypes.string,
  handlePress: PropTypes.func
};

/**
 * Component for round buttons that take in a string prop for the icon.
 *
 * @param ButtonIcon String that will be an icon. May change to image in the future. Or use Icon library.
 * @returns TouchableOpacity element.
 */
export default function RoundButton({
  props
}: {
  props: { ButtonIcon: string; handlePress(): void };
}) {
  return (
    <TouchableOpacity
      style={RoundBtnStyles.button}
      onPress={() => props.handlePress()}
    >
      <Icon style={RoundBtnStyles.text} name={props.ButtonIcon}></Icon>
    </TouchableOpacity>
  );
}
