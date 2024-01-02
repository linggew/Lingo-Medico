import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { expandableStyles, GlobalColor } from '../../constants/GlobalStyles';
import GlobalFontSize from '../../constants/GlobalStyles';

/**
 * Expandable containers for the profile document sections and super sections.
 * The headers are always visible and, when clicked, toggle the height of the
 * content container between `0` (collapsed) and `undefined` (expanded).
 *
 * @param Props.handleChange - Function to update the Profile object.
 * @param Props.id - The id for the component (used for updating the Profile
 * object).
 * @param Props.title - The base language text to be displayed in the header.
 * @param Props.translation - The translation language text to be displayed in
 * the header.
 * @param Props.expandedStatus - State of the expansion toggle from the Profile
 * object.
 * @param Props.data - An array of JSX elements to be displayed in the content
 * container.
 */
export default function Expandable({
  handleChange,
  id,
  title,
  translation,
  expandedStatus,
  data
}: {
  handleChange(
    sectionID: string,
    dataID: string,
    value: boolean | string
  ): void;
  id: string;
  title: string;
  translation: string;
  expandedStatus: boolean;
  data: JSX.Element[];
}) {
  const [expanded, setExpanded] = useState(expandedStatus);

  useEffect(() => {
    setExpanded(expandedStatus);
  }, [expandedStatus]);

  const handler = (expanded: boolean) => {
    setExpanded(expanded);
    if (id.includes('super')) {
      // update the expandedStatus in the Profile object
      handleChange(id, 'super', expanded);
    } else {
      // update the expandedStatus in the Profile object
      handleChange(id, 'section', expanded);
    }
  };

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          handler(!expanded);
        }}
        style={[
          id.includes('super')
            ? expandableStyles.superHeader
            : expandableStyles.header,
          id.includes('super')
            ? GlobalColor().ExpandHeaderSuperBKColor
            : GlobalColor().ExpandHeaderBKColor
        ]}
      >
        <Text
          style={[expandableStyles.headerText, GlobalFontSize().irregularText]}
        >
          {title}
        </Text>
        <Text
          style={[
            expandableStyles.headerTranslation,
            GlobalFontSize().irregularText,
            GlobalColor().ExpandHeaderTranslationColor
          ]}
        >
          {translation}
        </Text>
      </TouchableOpacity>
      <View
        style={[
          id.includes('super')
            ? expandableStyles.expandedSuper
            : expandableStyles.expanded,
          {
            height: expanded ? undefined : 0,
            overflow: 'hidden'
          },
          GlobalColor().ExpandContentBKColor
        ]}
      >
        {data}
      </View>
    </View>
  );
}
