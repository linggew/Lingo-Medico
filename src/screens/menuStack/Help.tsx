import { View, Text, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as React from 'react';
import { List } from 'react-native-paper';
import GlobalFontSize, {
  MenuStyles,
  GlobalColor,
  DropdownBKColor,
  HelpPageStyles
} from '../../constants/GlobalStyles';

const screenWidth = Dimensions.get('window').width;

/**
 * Render text within accordian dropdowns that is intended to teach
 * teach the user how to use the app. The text is currently hardcoded in
 * English but should be included in and pulled from language packs so that
 * it is rendered in the user's chosen base language (model after the About and
 * DisclaimerInfo screens).
 */
export default function Help() {
  // Create an expansion hook for each of the accordian dropdowns
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  const [expanded2, setExpanded2] = React.useState(true);
  const handlePress2 = () => setExpanded2(!expanded2);
  const [expanded3, setExpanded3] = React.useState(true);
  const handlePress3 = () => setExpanded3(!expanded3);
  const [expanded4, setExpanded4] = React.useState(true);
  const handlePress4 = () => setExpanded4(!expanded4);

  return (
    <SafeAreaView
      style={[HelpPageStyles.container, GlobalColor().DrawerMenuBKColor]}
    >
      <View style={[MenuStyles.container, GlobalColor().regularBKColor]}>
        <ScrollView>
          <List.Section
            title="Getting Started"
            titleStyle={[
              GlobalFontSize().irregularText,
              {
                textAlign: 'center'
              }
            ]}
            style={{
              backgroundColor: DropdownBKColor(),
              width: screenWidth - 50
            }}
          >
            <List.Accordion
              title="How to use the app"
              titleStyle={[
                GlobalFontSize().regularText,
                { fontWeight: 'bold' }
              ]}
              style={[
                { backgroundColor: DropdownBKColor(), borderWidth: 1 },
                GlobalColor().HelpBDColor
              ]}
              left={(props) => (
                <List.Icon {...props} icon="account-check-outline" />
              )}
              expanded={expanded}
              onPress={handlePress}
            >
              <Text
                style={[GlobalFontSize().regularText, HelpPageStyles.listItem]}
              >
                Create an account.
              </Text>
              <Text
                style={[GlobalFontSize().regularText, HelpPageStyles.listItem]}
              >
                Choose your native and desired translation language (you can
                change this later).{' '}
              </Text>
              <Text
                style={[GlobalFontSize().regularText, HelpPageStyles.listItem]}
              >
                Fill in your medical information.
              </Text>
              <Text
                style={[GlobalFontSize().regularText, HelpPageStyles.listItem]}
              >
                Your information will be saved persistently.
              </Text>
            </List.Accordion>
            <List.Accordion
              title="How to edit your information"
              titleStyle={[
                GlobalFontSize().regularText,
                { fontWeight: 'bold' }
              ]}
              style={[
                { backgroundColor: DropdownBKColor(), borderWidth: 1 },
                GlobalColor().HelpBDColor
              ]}
              left={(props) => <List.Icon {...props} icon="pencil" />}
              expanded={expanded2}
              onPress={handlePress2}
            >
              <Text
                style={[GlobalFontSize().regularText, HelpPageStyles.listItem]}
              >
                To ensure you dont accidentally edit your information, there are
                two modes, viewing and editing.
              </Text>
              <Text
                style={[GlobalFontSize().regularText, HelpPageStyles.listItem]}
              >
                To switch to edit mode click on the pencil icon in the toolbar
                at the base.
              </Text>
            </List.Accordion>
            <List.Accordion
              title="How to change your language"
              titleStyle={[
                GlobalFontSize().regularText,
                { fontWeight: 'bold' }
              ]}
              style={[
                { backgroundColor: DropdownBKColor(), borderWidth: 1 },
                GlobalColor().HelpBDColor
              ]}
              left={(props) => <List.Icon {...props} icon="swap-horizontal" />}
              expanded={expanded3}
              onPress={handlePress3}
            >
              <Text
                style={[GlobalFontSize().regularText, HelpPageStyles.listItem]}
              >
                Changing your language is easy, click on the double arrow icon
                in the toolbar at the bottom of the screen.{' '}
              </Text>
              <Text
                style={[GlobalFontSize().regularText, HelpPageStyles.listItem]}
              >
                Choose your native language and the language you want it to be
                translated to.{' '}
              </Text>
            </List.Accordion>
            <List.Accordion
              title="How to switch users"
              titleStyle={[
                GlobalFontSize().regularText,
                { fontWeight: 'bold' }
              ]}
              style={[
                { backgroundColor: DropdownBKColor(), borderWidth: 1 },
                GlobalColor().HelpBDColor
              ]}
              left={(props) => <List.Icon {...props} icon="account-circle" />}
              expanded={expanded4}
              onPress={handlePress4}
            >
              <Text
                style={[GlobalFontSize().regularText, HelpPageStyles.listItem]}
              >
                To switch accounts click on the three lines in the top right
                corner of the app. This will expand the side menu.
              </Text>
              <Text
                style={[GlobalFontSize().regularText, HelpPageStyles.listItem]}
              >
                Choose the Passports dropdown, from there you can choose any of
                the accounts you previously setup.{' '}
              </Text>
            </List.Accordion>
          </List.Section>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
