import {
  GlobalState,
  Prompt,
  SerializedProfile,
  determineLangPacks,
  Languages
} from './Types';
import { Profile } from './Profile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { constructProfile, constructSuperSections } from './ConstructObjects';
import { LanguagePack } from './Types';

/**
 * Abstract out the inputted user data in a profile object for storage
 * to reduce storage size of each profile object.
 *
 * @param profile
 */
export const serialize = (profile: Profile) => {
  const serialized: SerializedProfile = new SerializedProfile();

  class SupEntry {
    id: string;
    expandedStatus: boolean;

    constructor() {
      this.id = '';
      this.expandedStatus = false;
    }
  }

  class SectEntry {
    id: string;
    expandedStatus: boolean;
    data: Data[];

    constructor() {
      this.id = '';
      this.expandedStatus = false;
      this.data = [];
    }
  }

  class Data {
    key: string;
    value: string;

    constructor() {
      this.key = '';
      this.value = '';
    }
  }

  serialized.name = profile.name;
  serialized.nickname = profile.nickname;
  serialized.gender = profile.gender;
  serialized.baselang = profile.baseLang;
  serialized.translang = profile.transLang;
  serialized.photo = profile.photo;

  // Loop through the superSection entries in the current profile
  for (const superSect of profile.superSections) {
    const sSupEntry = new SupEntry();
    sSupEntry.id = superSect.id;
    sSupEntry.expandedStatus = superSect.expandedStatus;
    serialized.superSections.push(sSupEntry);
  }

  // Loop through the section entries in the current profile
  for (const section of profile.sections) {
    const sSectEntry = new SectEntry();
    sSectEntry.id = section.id;
    sSectEntry.expandedStatus = section.expandedStatus;
    // Loop through data entries in the current section
    for (const data of section.data) {
      if (!(data instanceof Prompt)) {
        const sData: Data = new Data();
        sData.key = data.key;
        sData.value = data.value.toString();
        sSectEntry.data.push(sData);
      }
    }
    serialized.sections.push(sSectEntry);
  }
  return serialized;
};

/**
 * Construct a complete profile object that includes user data retrieved
 * from storage.
 *
 * @param serialized
 */
export const deserialize = (serialized: SerializedProfile) => {
  const deserialized = new Profile();
  deserialized.name = serialized.name;
  deserialized.nickname = serialized.nickname;
  deserialized.gender = serialized.gender;
  deserialized.baseLang = serialized.baselang;
  deserialized.transLang = serialized.translang;
  deserialized.photo = serialized.photo;
  const langPacks = determineLangPacks(
    serialized.baselang as Languages,
    serialized.translang as Languages
  );
  deserialized.superSections = constructSuperSections(
    langPacks.basePack,
    langPacks.translationPack,
    serialized.superSections
  );
  deserialized.sections = constructProfile(
    langPacks.basePack,
    langPacks.translationPack,
    serialized
  );
  return deserialized;
};

/**
 * Change the base and translated languages of the dest profile arg
 * to the passed in language packs. Also, copy the user input values
 * from the src profile if one is provided, otherwise retain the ones
 * in the dest object.
 *
 * @param baseLangPack
 * @param transLangPack
 * @param dest
 * @param src
 */
export const setLanguages = (
  baseLangPack: LanguagePack,
  transLangPack: LanguagePack,
  dest: Profile,
  src?: Profile
) => {
  dest.baseLang = baseLangPack.language;
  dest.transLang = transLangPack.language;

  // If a source profile is provided, copy those values
  // Otherwise, copy the destination values
  let serialized: SerializedProfile;
  if (src) serialized = serialize(src);
  else serialized = serialize(dest);

  dest.superSections = constructSuperSections(
    baseLangPack,
    transLangPack,
    serialized['superSections']
  );
  dest.sections = constructProfile(baseLangPack, transLangPack, serialized);
};

/**
 * Save profile object to storage and update list of saved keys in
 * state object.
 *
 * @param profile
 * @param state
 */
export const storeProfile = async (profile: Profile, state: GlobalState) => {
  const serialized = serialize(profile);

  try {
    await AsyncStorage.setItem(serialized.name, JSON.stringify(serialized));
    state.savedProfiles = await AsyncStorage.getAllKeys();
  } catch (e) {
    let message = 'Unknown Error: storeProfile';
    if (e instanceof Error) message = e.message;
    console.error(message);
  }
};

/**
 * Save state object to storage.
 *
 * @param state
 */
export const storeState = async (state: GlobalState) => {
  try {
    await AsyncStorage.setItem('_state', JSON.stringify(state));
  } catch (e) {
    let message = 'Unknown Error: storeState';
    if (e instanceof Error) message = e.message;
    console.error(message);
  }
};

/**
 * Retrieve profile object from storage indicated by the passed in
 * key. If one is found, construct profile object with serialized values
 * and return it. Otherwise, return an empty profile.
 *
 * @param key
 */
export const getProfile = async (key: string) => {
  try {
    const serializedStr = await AsyncStorage.getItem(key);
    if (serializedStr) {
      const serializedObj = JSON.parse(serializedStr);
      return deserialize(serializedObj);
    } else {
      console.log('getProfile error');
    }
  } catch (e) {
    let message = 'Unknown Error: getProfile';
    if (e instanceof Error) message = e.message;
    console.error(message);
  }
  return new Profile();
};

/**
 * Return the profile object in storage associated with the passed in
 * key and update the list of stored keys in state.
 *
 * @param key
 * @param state
 */
export const removeProfile = async (key: string, state: GlobalState) => {
  if (key === '') {
    console.log('No saved profiles, no deletion required');
    return;
  }

  console.log('Stored objects before deletion: ', state.savedProfiles);
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    let message = 'Unknown Error: removeProfile';
    if (e instanceof Error) message = e.message;
    console.error(message);
  }

  state.savedProfiles = await AsyncStorage.getAllKeys();
  console.log('Stored objects after deletion: ', state.savedProfiles);
};
