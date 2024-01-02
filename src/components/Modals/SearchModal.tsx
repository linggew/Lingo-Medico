import React from 'react';
import { View, Text, Modal, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import GlobalFontSize, {
  ModalStyles,
  GlobalColor
} from '../../constants/GlobalStyles';

/**
 * Modal for displaying the results of running the search function on the
 * profile object.
 *
 * @param Props.visible - Controls whether or not the modal is visible.
 * @param Props.searchResults - Array of search querry matches found in the
 * profile object.
 * @param Props.handleClose - Function called by pressing the modal's button.
 */
const SearchModal = ({
  visible,
  searchResults,
  handleClose
}: {
  visible: boolean;
  searchResults: string[];
  handleClose(): void;
}) => {
  const resultsAsList: JSX.Element[] = [];
  searchResults.forEach((result, idx) => {
    resultsAsList.push(
      <Text style={GlobalFontSize().regularText} key={idx}>
        {'• ' + result}
      </Text>
    );
  });

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={ModalStyles.container}>
        <View style={[ModalStyles.modalView, GlobalColor().DrawerMenuBKColor]}>
          <Text style={ModalStyles.header}>Search Results</Text>
          <ScrollView style={ModalStyles.searchContent}>
            {resultsAsList}
          </ScrollView>
          <View style={ModalStyles.buttonContainer}>
            <Pressable
              style={[ModalStyles.button, GlobalColor().ButtonHeaderBKColor]}
              onPress={() => {
                handleClose();
              }}
            >
              <Text
                style={[
                  ModalStyles.buttonText,
                  GlobalColor().ExpandButtonColor
                ]}
              >
                OK
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SearchModal;
