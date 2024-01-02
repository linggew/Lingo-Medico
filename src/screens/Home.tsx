import React, { useState } from 'react';
import { TouchableOpacity, View, Text, TextInput } from 'react-native';
import { UseProfileContext } from '../utils/context';
import { storeProfile } from '../utils/Storage';
import { GlobalColor, MenuStyles } from '../constants/GlobalStyles';
import { generateProfile } from '../utils/GenerateJSX';

import { ButtonHeader, LanguageBox } from '../components/HomePage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  CheckBox,
  Prompt,
  TextEntry,
  determineLangPacks,
  Languages
} from '../utils/Types';
import {
  EditProfileModal,
  SearchModal,
  SwitchLanguagesModal
} from '../components/Modals';

/**
 * The home screen is where all passport interface and data entry will
 * live. The current profile is first retrieved from context where it can
 * be displayed and altered by the user.
 *
 * The core pieces of functionality are the edit, search, and language select
 * buttons that each have an associated modal, as well as the expand all and
 * collapse all buttons.
 *
 * The user cannot alter fields unless they enable edit mode, though their changes
 * are saved as they edit regardless of whether or not they click "confirm" to exit edit mode.
 * This is so that they can exit the app, intentionally or not, without losing data.
 */
export default function Home() {
  const { state } = UseProfileContext();
  let { currProfile } = UseProfileContext();
  const [showSearch, setShowSearch] = useState(false);

  // Send an error message to the console if on Home with
  // no saved currProfile. Appropriate error handling will need to be added.
  if (state.currProfile !== '') {
    console.log('Home profile name: ' + currProfile.name);
  } else {
    console.error('Home has no profile.');
  }

  const forceUpdate = React.useReducer(() => ({}), {})[1] as () => void;
  const [editmode, setEditmode] = useState(false);
  const [modalVisible, setModalVisible] = useState('none');
  const [searchResults, setSearchResults] = useState<string[]>([]);

  // This function handles input changes, saving every change to storage
  const handleChange = (
    sectionID: string,
    dataID: string,
    value: boolean | string
  ) => {
    if (currProfile === null) return;

    if (dataID === 'super' && typeof value === 'boolean') {
      const newSuper = currProfile.superSections;
      const sectionIdx = newSuper.findIndex(
        (element) => element.id === sectionID
      );
      newSuper[sectionIdx].expandedStatus = value;

      currProfile = {
        ...currProfile,
        superSections: newSuper
      };
    } else {
      const newSections = currProfile.sections;
      const sectionIdx = newSections.findIndex(
        (element) => element.id === sectionID
      );
      if (dataID === 'section' && typeof value === 'boolean') {
        newSections[sectionIdx].expandedStatus = value;
      } else {
        const dataIdx = newSections[sectionIdx].data.findIndex(
          (element) => element.key === dataID
        );
        newSections[sectionIdx].data[dataIdx].value = value;
      }

      currProfile = {
        ...currProfile,
        sections: newSections
      };
    }

    storeProfile(currProfile, state);
  };

  const expandAll = async () => {
    currProfile.superSections.map((item) => (item.expandedStatus = true));
    currProfile.sections.map((item) => (item.expandedStatus = true));
    forceUpdate();
  };

  const collapseAll = async () => {
    await expandAll();
    currProfile.superSections.map((item) => (item.expandedStatus = false));
    currProfile.sections.map((item) => (item.expandedStatus = false));
    forceUpdate();
  };

  const toggleFields = (isEditable: boolean) => {
    currProfile.sections.map((section) =>
      section.data.map((data) => {
        if (!(data instanceof Prompt)) {
          data.isEditable = isEditable;
        }
      })
    );
  };

  const toggleEditMode = () => {
    // if entering edit mode
    if (!editmode) {
      toggleFields(true);
      setEditmode(!editmode);
    }
    // if exiting edit mode
    if (editmode) {
      // show edit modal
      setModalVisible('edit');
    }
  };

  const confirmEdit = () => {
    toggleFields(false);
    setEditmode(!editmode);
  };

  // Search the profile sections and supersections for the string.
  // Each map is displayed in the search bar modal.
  const search = (query: string) => {
    query = query.toLowerCase();
    const results: string[] = [];
    currProfile.superSections.map((sup) => {
      if (sup.title.toLowerCase().includes(query)) {
        results.push(`${sup.title ? 'Section: ' + sup.title : ''}\n`);
      }
      if (sup.translation.toLowerCase().includes(query)) {
        results.push(
          `${sup.translation ? 'Section: ' + sup.translation : ''}\n`
        );
      }
    });
    currProfile.sections.map((section) => {
      let supertitle: string | null = null;
      if (section.supId !== '') {
        for (const supsects of currProfile.superSections) {
          if (supsects.id === section.supId) {
            supertitle = supsects.title;
          }
        }
      }
      if (section.title.toLowerCase().includes(query)) {
        results.push(
          `${supertitle ? 'Section: ' + supertitle + ', ' : ''}Topic: ${
            section.title
          }\n`
        );
      }
      if (section.translation.toLowerCase().includes(query)) {
        results.push(
          `${supertitle ? 'Section: ' + supertitle + ', ' : ''}Topic: ${
            section.translation
          }\n`
        );
      }
      section.data.map((data) => {
        let value: string | null = null;
        let translation: string | null = null;
        if (data instanceof Prompt) {
          value = data.value;
          translation = data.translation;
        } else if (data instanceof CheckBox) {
          value = data.description;
          translation = data.translation;
        } else if (data instanceof TextEntry) {
          value = data.description;
          translation = data.translation;
        }
        if (value?.toLowerCase().includes(query)) {
          results.push(`Topic: ${section.title}, ${value}\n`);
        }
        if (translation?.toLowerCase().includes(query)) {
          results.push(`Topic: ${section.title}, ${translation}\n`);
        }
      });
    });
    // show results in modal
    setSearchResults(results);
    setModalVisible('search');
  };

  const switchLangs = () => {
    // show modal for switching languages
    setModalVisible('exchange');
  };

  const handleModalClose = () => {
    setModalVisible('none');
    forceUpdate();
  };

  // Determine the language names to be displayed in the languages box
  const {
    baseLangNameForSelf,
    baseLangNameForTrans,
    transLangNameForBase,
    transLangNameForSelf
  } = determineLangPacks(
    currProfile.baseLang as Languages,
    currProfile.transLang as Languages
  );

  return (
    <>
      <EditProfileModal
        visible={modalVisible === 'edit'}
        confirmEdit={confirmEdit}
        handleClose={handleModalClose}
      />
      <SearchModal
        visible={modalVisible === 'search'}
        searchResults={searchResults}
        handleClose={handleModalClose}
      />
      <SwitchLanguagesModal
        visible={modalVisible === 'exchange'}
        handleClose={handleModalClose}
      />
      <SafeAreaView
        style={[GlobalColor().HomeBodyContainerBKColor, { flex: 1 }]}
        edges={['left', 'right']}
      >
        <ButtonHeader
          editFunction={toggleEditMode}
          // searchFunction={search}
          exchangeFunction={switchLangs}
          setSearch={setShowSearch}
        />
        {showSearch ? (
          <TextInput
            style={[MenuStyles.search, GlobalColor().TextInputColor]}
            onSubmitEditing={(e) => search(e.nativeEvent.text)}
          ></TextInput>
        ) : (
          <></>
        )}
        <View style={MenuStyles.exColBtns}>
          <TouchableOpacity
            style={[MenuStyles.expandBtn, GlobalColor().ButtonBKBDColor]}
            onPress={expandAll}
          >
            <Text style={[MenuStyles.btnText, GlobalColor().ExpandButtonColor]}>
              Expand All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[MenuStyles.collapseBtn, GlobalColor().ButtonBKBDColor]}
            onPress={collapseAll}
          >
            <Text style={[MenuStyles.btnText, GlobalColor().ExpandButtonColor]}>
              Collapse All
            </Text>
          </TouchableOpacity>
        </View>

        <KeyboardAwareScrollView
          style={MenuStyles.scrollViewContainer}
          enableOnAndroid={true}
          enableResetScrollToCoords={false}
        >
          <LanguageBox
            LanguageOne={baseLangNameForSelf ? baseLangNameForSelf : 'error'}
            TranslationOne={
              baseLangNameForTrans ? baseLangNameForTrans : 'error'
            }
            LanguageTwo={transLangNameForBase ? transLangNameForBase : 'error'}
            TranslationTwo={
              transLangNameForSelf ? transLangNameForSelf : 'error'
            }
          />
          {currProfile ? generateProfile(currProfile, handleChange) : null}
        </KeyboardAwareScrollView>
        {editmode ? (
          <Text
            style={[
              MenuStyles.editmodeBar,
              GlobalColor().HomeEditModeBarBKColor
            ]}
          >
            You are in edit mode!
          </Text>
        ) : (
          <Text
            style={[
              MenuStyles.readonlymodeBar,
              GlobalColor().HomeReadonlyModeBarBKBDColor,
              GlobalColor().ExpandButtonColor
            ]}
          >
            You are in read only mode
          </Text>
        )}
      </SafeAreaView>
    </>
  );
}
