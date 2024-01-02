import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import {
  SkipButton,
  ContinueButton,
  ProgressBar
} from '../../components/SetupPage';
import { StackNavigationProp } from '@react-navigation/stack';
import { ProfileStackParamList } from '../../utils/Types';
import { Profile } from '../../utils/Profile';
import { storeProfile, storeState, removeProfile } from '../../utils/Storage';
import { useNavigation } from '@react-navigation/native';
import { UseProfileContext } from '../../utils/context';
import GlobalFontSize, {
  GlobalColor,
  LogoStyles,
  ProfileStackButtonsContainer,
  UploadPhotoStyles
} from '../../constants/GlobalStyles';

type Props = StackNavigationProp<ProfileStackParamList, 'UploadPhoto'>;

/**
 * Allow the user to choose whether or not they want to upload a photo to the app
 * which will be displayed on the main page. The upload photo module accesses the
 * device's local photo library and saves a reference to it on the profile object.
 *
 * After they choose whether or not to upload a photo, the temp profile is copied
 * to the current profile and the name of this new profile is saved to the state
 * object so that it is loaded the next time they start the app.
 *
 * The previously used profile object is also deleted so that the application
 * doesn't continuously grow in storage until functionality that supports multiple
 * profile management is implemented.
 */
export default function UploadPhoto() {
  const navigation = useNavigation<Props>();
  let { currProfile, tempProfile } = UseProfileContext();
  const { state } = UseProfileContext();
  const [photo, setPhoto] = useState<string | null>(null);

  useEffect(() => {
    checkForCameraRollPermission();
  }, []);

  const checkForCameraRollPermission = async () => {
    const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      // TODO: The app is still able to access photos even though permission is not granted
      console.log('Media permissions are not granted');
    } else {
      console.log('Media permissions are granted');
    }
  };

  //adds image with proper formatting allowing the user to edit the image
  //Image is set to quality 1 which is the highest quality choose value between 0 and 1
  //to adjust quality.
  const addImage = async () => {
    const _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });
    console.log(JSON.stringify(_image));
    if (!_image.cancelled) {
      setPhoto(_image.uri);
    }
  };

  const pressHandler = (button: string) => {
    if (button === 'Done') {
      if (photo !== null) {
        tempProfile.photo = photo;
        console.log('Photo saved to profile');
      } else {
        Alert.alert(
          'Upload Photo',
          'Please select a photo to upload or click Skip.',
          [
            {
              text: 'Okay'
            }
          ]
        );
        return;
      }
    } else {
      console.log('No photo saved to profile');
    }
    removeProfile(currProfile.name, state);

    currProfile = Object.assign(currProfile, tempProfile);
    state.currProfile = currProfile.name;
    storeProfile(currProfile, state);
    storeState(state);
    tempProfile = new Profile();

    // Reset stack navigation when navigating to home so that
    // the user cannot return to this screen (no back button).
    navigation.reset({
      routes: [{ name: 'Home' }]
    });
  };

  return (
    <SafeAreaView
      style={[UploadPhotoStyles.safeContainer, GlobalColor().DrawerMenuBKColor]}
    >
      <View style={LogoStyles.container}>
        <Image
          style={LogoStyles.bigIcon}
          source={require('../../../assets/ML_Logo.png')}
        />
      </View>
      <View style={UploadPhotoStyles.container}>
        <Text style={[UploadPhotoStyles.header, GlobalFontSize().regularText]}>
          Upload a photo for your passport profile.
        </Text>
        <View style={UploadPhotoStyles.bottomSection}>
          <View
            style={[
              UploadPhotoStyles.imageContainer,
              GlobalColor().UploadPhotoImageContainerBKColor
            ]}
          >
            {photo && (
              <Image source={{ uri: photo }} style={UploadPhotoStyles.image} />
            )}
            <View
              style={[
                UploadPhotoStyles.uploadBtnContainer,
                GlobalColor().UploadBtnContainerBKColor
              ]}
            >
              <TouchableOpacity
                onPress={addImage}
                style={UploadPhotoStyles.uploadBtn}
              >
                <Text>{photo ? 'Edit' : 'Upload'} Image</Text>
                <AntDesign name="camera" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={ProfileStackButtonsContainer.container}>
        <TouchableOpacity onPress={() => pressHandler('Done')}>
          <ContinueButton ButtonText="Done" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pressHandler('Skip')}>
          <SkipButton text="Skip" />
        </TouchableOpacity>
      </View>
      <ProgressBar stepCurrent={5} stepsTotal={5} />
    </SafeAreaView>
  );
}
