import React, { useState } from 'react';
import { View } from 'react-native';
import RoundButton from './RoundButton';
import { ButtonHeaderStyles, GlobalColor } from '../../constants/GlobalStyles';

/**
 * Creates a component for a header with three buttons.
 * It will take in Props in the future to be able to add functionality to the buttons.
 * The buttons are: Edit Mode, Switch Language, and Search.
 *
 * @returns RoundButton elements nested in a View Element.
 */
export default function ButtonHeader({
  editFunction,
  // searchFunction,
  exchangeFunction,
  setSearch
}: {
  editFunction(): void;
  // searchFunction(text: string): void;
  exchangeFunction(): void;
  setSearch(v: boolean): void;
}) {
  const [showSearch, setShowSearch] = useState(false);

  const wrapper = (val: boolean) => {
    setShowSearch(!val);
    setSearch(!val);
  };

  return (
    <>
      <View
        style={[
          ButtonHeaderStyles.container,
          GlobalColor().ButtonHeaderBKColor
        ]}
      >
        <RoundButton
          props={{
            ButtonIcon: 'edit',
            handlePress: editFunction
          }}
        />
        <View style={ButtonHeaderStyles.search}>
          <RoundButton
            props={{
              ButtonIcon: 'search',
              handlePress: () => {
                wrapper(showSearch);
                // searchFunction()
              }
            }}
          />
        </View>
        <RoundButton
          props={{
            ButtonIcon: 'exchange',
            handlePress: exchangeFunction
          }}
        />
      </View>
    </>
  );
}
