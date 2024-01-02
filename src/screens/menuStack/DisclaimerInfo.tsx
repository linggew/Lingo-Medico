import React from 'react';
import { determineLangPacks, Languages } from '../../utils/Types';
import { View, ScrollView, Text } from 'react-native';
import { DisclaimerTemplate } from '../../constants/Templates';
import { constructSection } from '../../utils/ConstructObjects';
import { generateSection } from '../../utils/GenerateJSX';
import { MenuStyles, GlobalColor } from '../../constants/GlobalStyles';
import { UseProfileContext } from '../../utils/context';

/**
 * Render the text stored in the "disclaimer" attribute of the user's current
 * base language pack. This is the same information displayed in the DisclaimerAgreement
 * screen in the profile stack.
 */
export default function DisclaimerInfo() {
  const { currProfile } = UseProfileContext();
  const { basePack } = determineLangPacks(currProfile.baseLang as Languages);
  const generateDisclaimer = () => {
    const template: DisclaimerTemplate = new DisclaimerTemplate();
    const disclaimer = constructSection(template, basePack);
    const elements = generateSection(disclaimer);
    return (
      <View style={MenuStyles.subContainer}>
        <Text style={MenuStyles.subLabels}>{disclaimer.title}</Text>
        {elements}
      </View>
    );
  };
  return (
    <View style={[MenuStyles.container, GlobalColor().regularBKColor]}>
      <ScrollView>{generateDisclaimer()}</ScrollView>
    </View>
  );
}
