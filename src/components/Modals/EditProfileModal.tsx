import React from 'react';
import { View, Text, Modal, Pressable } from 'react-native';
import GlobalFontSize, {
  ModalStyles,
  GlobalColor
} from '../../constants/GlobalStyles';

/**
 * Modal with two buttons. Cancel exits the modal without exiting edit mode.
 * Confirm exits the modal and exits edit mode.
 *
 * @param Props.visible - Controls whether or not the modal is visible.
 * @param Props.confirmEdit - Function called by pressing the confirm button.
 * @param Props.handleClose - Function called by pressing either button.
 */
const EditProfileModal = ({
  visible,
  confirmEdit,
  handleClose
}: {
  visible: boolean;
  confirmEdit(): void;
  handleClose(): void;
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={ModalStyles.container}>
        <View style={[ModalStyles.modalView, GlobalColor().DrawerMenuBKColor]}>
          <Text style={ModalStyles.header}>Confirm Edit</Text>
          <Text style={[ModalStyles.editContent, GlobalFontSize().regularText]}>
            Confirm all edits since entering edit mode?
          </Text>
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
                Cancel
              </Text>
            </Pressable>
            <Pressable
              style={[ModalStyles.button, GlobalColor().ButtonHeaderBKColor]}
              onPress={() => {
                confirmEdit();
                handleClose();
              }}
            >
              <Text
                style={[
                  ModalStyles.buttonText,
                  GlobalColor().ExpandButtonColor
                ]}
              >
                Confirm
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditProfileModal;
