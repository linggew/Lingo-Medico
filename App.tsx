// React navigation requires this import to be first in this file.
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { ProfileContext, UIContext } from './src/utils/context';
import { GlobalState } from './src/utils/Types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoadingScreen } from './src/screens';
import DrawerNav from './src/routes/DrawerNav';
import { getProfile } from './src/utils/Storage';
import { Profile } from './src/utils/Profile';

/**
 * Establish default UI and profile context values. Render the loading
 * screen and call the useEffect hook to retrieve state, profile and UI data
 * from storage. If no state object is found, set the initial route to the
 * profile creation stack for first time setup. Otherwise, assign stored
 * context values and set the initial route to the home screen.
 */
export default function App() {
  // UI context
  const [fontMode, setFontMode] = useState('default');
  const [colorMode, setColorMode] = useState('default');
  const [selectedFontButton, setSelectedFontButton] = useState(1);
  const [selectedColorButton, setSelectedColorButton] = useState(0);

  // Profile context
  const [currProfile, setCurrProfile] = useState<Profile>(new Profile());
  const [tempProfile, setTempProfile] = useState<Profile>(new Profile());
  const [loaded, setLoaded] = useState(false);
  const [state, setState] = useState<GlobalState>({
    fontMode: 'default',
    colorMode: 'default',
    selectedFontButton: 1,
    selectedColorButton: 0,
    currProfile: '',
    savedProfiles: []
  });
  let initialRouteName = 'Home';

  // Add delay to allow load screen animation to finish before rendering
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  const delayforLaunch = async () => {
    await delay(1000);
    setLoaded(true);
  };

  // Called after the loading screen is rendered. Retrieve data from storgage
  useEffect(() => {
    const init = async () => {
      let prevState: GlobalState = {
        fontMode: 'default',
        colorMode: 'default',
        selectedFontButton: 1,
        selectedColorButton: 0,
        currProfile: '',
        savedProfiles: []
      };
      try {
        const stateResponse = await AsyncStorage.getItem('_state');
        if (stateResponse) {
          prevState = Object.assign(prevState, JSON.parse(stateResponse));

          const keys = await AsyncStorage.getAllKeys();
          if (keys !== undefined) prevState.savedProfiles = keys;
          console.log(
            `profile: ${prevState.currProfile}, stored keys: ${prevState.savedProfiles}`
          );

          setCurrProfile(await getProfile(prevState.currProfile));
          setState(prevState);
          setFontMode(prevState.fontMode);
          setColorMode(prevState.colorMode);
          setSelectedFontButton(prevState.selectedFontButton);
          setSelectedColorButton(prevState.selectedColorButton);

          console.log('Global state retrieved from storage:', prevState);
        }
        delayforLaunch();
      } catch (e) {
        let message = 'Unknown Error: init';
        if (e instanceof Error) message = e.message;
        console.error(message);
      }
    };
    init();
  }, []);

  if (!loaded) return <LoadingScreen />;

  // First time setup
  if (state.currProfile === '') {
    initialRouteName = 'ProfileStack';
    console.log('No profile retrieved from storage, running profileStack');
  }

  return (
    <UIContext.Provider
      value={{
        fontMode,
        setFontMode,
        colorMode,
        setColorMode,
        selectedFontButton,
        setSelectedFontButton,
        selectedColorButton,
        setSelectedColorButton
      }}
    >
      <ProfileContext.Provider
        value={{
          currProfile,
          setCurrProfile,
          tempProfile,
          setTempProfile,
          state,
          setState
        }}
      >
        <DrawerNav initialRouteName={initialRouteName} />
      </ProfileContext.Provider>
    </UIContext.Provider>
  );
}
