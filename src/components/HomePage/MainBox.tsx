import React, { FunctionComponent, ReactNode } from 'react';
import { View } from 'react-native';
import { GlobalColor, MainBoxStyles } from '../../constants/GlobalStyles';

interface BoxProps {
  children: ReactNode;
}

/**
 * Container for some home page elements. Only applies styles.
 *
 * @param props - Child elements to render within the MainBox.
 */
const MainBox: FunctionComponent<BoxProps> = (props) => {
  return (
    <View style={[MainBoxStyles.container, GlobalColor().ExpandContentBKColor]}>
      {props.children}
    </View>
  );
};

export default MainBox;
