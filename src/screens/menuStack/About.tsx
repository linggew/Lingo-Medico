import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { MenuStyles, GlobalColor } from '../../constants/GlobalStyles';
import { determineLangPacks, Languages } from '../../utils/Types';
import { AboutTemplate, AboutAuthorTemplate } from '../../constants/Templates';
import { constructSection } from '../../utils/ConstructObjects';
import { generateSection } from '../../utils/GenerateJSX';
import { UseProfileContext } from '../../utils/context';

/**
 * Render the text stored in the "about" and "author" attributes of the user's current
 * base language pack.
 */
export default function About() {
  const { currProfile } = UseProfileContext();
  const { basePack } = determineLangPacks(currProfile.baseLang as Languages);

  // Construct and render the text under the "About this App" header
  const generateAbout = () => {
    const template: AboutTemplate = new AboutTemplate();
    const about = constructSection(template, basePack);
    const elements = generateSection(about);
    return (
      <View style={MenuStyles.subContainer}>
        <Text style={MenuStyles.subLabels}>{about.title}</Text>
        {elements}
      </View>
    );
  };

  // Construct and render the text under the "About the Author" header
  const generateAboutAuthor = () => {
    const template: AboutAuthorTemplate = new AboutAuthorTemplate();
    const aboutAuthor = constructSection(template, basePack);
    const elements = generateSection(aboutAuthor);
    return (
      <View style={MenuStyles.subContainer}>
        <Text style={MenuStyles.subLabels}>{aboutAuthor.title}</Text>
        {elements}
      </View>
    );
  };

  return (
    <View style={[MenuStyles.container, GlobalColor().regularBKColor]}>
      <ScrollView>
        {generateAbout()}
        {generateAboutAuthor()}
      </ScrollView>
    </View>
  );
}
