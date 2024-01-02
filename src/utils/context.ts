import { createContext, useContext } from 'react';
import { GlobalState } from './Types';
import { Profile } from './Profile';

/**
 * Define the attributes of the profile context that maps the
 * createContext React function. The currProfile object is the profile
 * retrieved from storage, rendered, and altered by the user. The tempProfile
 * object is used during profile creation so that the operation can be canceled
 * without having altered the previous profile.
 */
export type ProfileTypes = {
  currProfile: Profile;
  setCurrProfile: (c: Profile) => void;
  tempProfile: Profile;
  setTempProfile: (c: Profile) => void;
  state: GlobalState;
  setState: (c: GlobalState) => void;
};

/**
 * Establish default values for profile context in case it is used outside of the Provider,
 * which requires passed in initial values.
 */
export const ProfileContext = createContext<ProfileTypes>({
  currProfile: new Profile(),
  setCurrProfile: () => {
    return null;
  },
  tempProfile: new Profile(),
  setTempProfile: () => {
    return null;
  },
  state: {
    fontMode: 'default',
    colorMode: 'default',
    selectedFontButton: 1,
    selectedColorButton: 0,
    currProfile: '',
    savedProfiles: []
  },
  setState: () => {
    return null;
  }
});

export const UseProfileContext = () => useContext(ProfileContext);

/**
 * Define the attributes of the UI context that maps the
 * createContext React function. The fontMode and colorMode determine
 * font size and color theme respectively. The selectedFontButton and
 * selectedColorButton attributes guarantee that the buttons highlighted
 * in the settings screen reflect that current font size and color theme.
 */
export type UIProps = {
  fontMode: string;
  setFontMode: (c: string) => void;
  colorMode: string;
  setColorMode: (c: string) => void;
  selectedFontButton: number;
  setSelectedFontButton: (c: number) => void;
  selectedColorButton: number;
  setSelectedColorButton: (c: number) => void;
};

/**
 * Establish default values for UI context in case it is used outside of the Provider,
 * which requires passed in initial values.
 */
export const UIContext = createContext<UIProps>({
  fontMode: 'default',
  setFontMode: () => void 0,
  colorMode: 'default',
  setColorMode: () => void 0,
  selectedFontButton: 1,
  setSelectedFontButton: () => void 0,
  selectedColorButton: 0,
  setSelectedColorButton: () => void 0
});

export const UseUIContext = () => useContext(UIContext);
