import { Platform, StyleSheet } from 'react-native';
import { UseUIContext } from '../utils/context';

//Conponents style
export const expandableStyles = StyleSheet.create({
  header: {
    padding: 10,
    margin: 2,
    marginTop: 10,
    borderWidth: 1,
    zIndex: 1000
  },
  superHeader: {
    padding: 10,
    margin: 1,
    marginTop: 10,
    borderWidth: 1
  },
  headerText: {
    fontWeight: '500'
  },
  headerTranslation: {
    fontWeight: '500',
    textAlign: 'right'
  },
  text: {
    padding: 4
  },
  content: {
    paddingHorizontal: 4
  },
  expandedSuper: {
    marginHorizontal: 1
  },
  expanded: {
    marginHorizontal: 2,
    borderWidth: 1
  }
});

export const PromptComponentStyles = StyleSheet.create({
  promptContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 10,
    padding: 1
  },
  promptText: {
    marginTop: 5,
    marginBottom: 1,
    marginRight: 15
  },
  promptTranslation: {
    marginTop: 5,
    marginBottom: 1,
    marginRight: 15
  },
  indented: {
    marginLeft: 20
  }
});

export const checkboxComponentStyles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginLeft: 20
  },
  checkboxTextView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  checkboxDescription: {
    marginVertical: 2,
    marginRight: 15
  },
  checkboxTranslation: {
    marginVertical: 2,
    marginRight: 15
  },
  indented: {
    marginLeft: 40
  }
});

export const RadioComponentStyles = StyleSheet.create({
  radioContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 20
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  radioOptions: {
    marginTop: 2,
    marginBottom: 2
  },
  radioTranslations: {
    marginTop: 2,
    marginBottom: 2
  },
  indented: {
    marginLeft: 40
  }
});

export const textInputComponentStyles = StyleSheet.create({
  textInputContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 20
  },
  textInputDescription: {
    marginTop: 2,
    marginBottom: 2,
    paddingRight: 10
  },
  textInputTranslation: {
    marginTop: 2,
    marginBottom: 2,
    paddingRight: 10
  },
  textInput: {
    marginVertical: 2,
    margin: 10,
    paddingHorizontal: 10,
    height: 40,
    minWidth: 200,
    borderWidth: 1,
    borderRadius: 8
  },
  indented: {
    marginLeft: 40
  }
});

export const AccessibilityStyles = StyleSheet.create({
  contatiner: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold'
  }
});

export const JumpLogoStyles = StyleSheet.create({
  img: {
    height: 200,
    aspectRatio: 1,
    resizeMode: 'contain'
  }
});

export const ProgressBarStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewfirst: {
    height: 20,
    width: 200,
    backgroundColor: 'rgba(0,0,255,0.3)',
    borderRadius: 20, //半径是圆的
    overflow: 'hidden'
  },
  viewsecond: {
    height: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    width: '100%',
    position: 'absolute',
    left: 0,
    top: 0
  },
  ProgressBarText: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '900',
    marginBottom: 4
  }
});

//Menu Stack style
//Home, About, DisclaimerInfo, Help, Setting
export const MenuStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollViewContainer: {
    flex: 1,
    paddingHorizontal: 20
  },
  gettingStarted: {
    flex: 1
  },
  listItem: {
    marginTop: 10,
    marginBottom: 10
  },
  header: {
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: 90,
    marginBottom: 30,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
  },
  editmodeBar: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: Platform.OS === 'ios' ? 25 : 5,
    paddingTop: Platform.OS === 'ios' ? 10 : 5
  },
  readonlymodeBar: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: Platform.OS === 'ios' ? 25 : 5,
    paddingTop: Platform.OS === 'ios' ? 10 : 5
  },
  expandCollapseView: {
    marginHorizontal: 20,
    width: 250,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  subContainer: {
    margin: 10
  },
  subLabels: {
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 35,
    color: '#1D2468'
  },
  search: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8
  },
  exColBtns: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  expandBtn: {
    width: '50%',
    borderWidth: 1,
    borderColor: '#C7D4E2',
    alignItems: 'center'
  },
  collapseBtn: {
    width: '50%',
    borderWidth: 1,
    alignItems: 'center',
    borderLeftWidth: 0
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5
  }
});

export const ModalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    alignItems: 'center',
    margin: 20,
    padding: 30,
    maxHeight: '60%',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  header: {
    alignContent: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
  },
  editContent: {},
  searchContent: {
    padding: 4
  },
  languageSwapContent: {},
  label: {
    marginTop: 10,
    textAlign: 'center'
  },
  dropdown: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
    marginVertical: 10
  },
  button: {
    minHeight: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    elevation: 2,
    backgroundColor: '#2196F3'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

//Profile stack style
export const LogoStyles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    marginTop: 50
  },
  bigIcon: {
    width: '90%',
    height: '100%',
    resizeMode: 'contain'
  }
});

export const WelcomeStyles = StyleSheet.create({
  safeContainer: {
    flex: 1
  },
  container: {
    flex: 5,
    alignItems: 'center',
    marginHorizontal: '6%'
  },
  header: {
    textAlign: 'center',
    marginBottom: 10
  },
  text: {}
});

export const languageSelectStyles = StyleSheet.create({
  safeContainer: {
    flex: 1
  },
  container: {
    flex: 5,
    alignItems: 'center',
    marginHorizontal: '6%'
  },
  header: {
    textAlign: 'center',
    marginBottom: 10
  },
  inputContainer: {
    flexDirection: 'column',
    marginBottom: 10
  },
  text: {
    flexDirection: 'column',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 4
  },
  dropdown: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export const DisclaimerAgreementStyles = StyleSheet.create({
  safeContainer: {
    flex: 1
  },
  container: {
    flex: 5,
    alignItems: 'center',
    marginHorizontal: '6%'
  },
  header: {
    fontWeight: 'bold'
  },
  disclaimer: {
    alignContent: 'center',
    marginHorizontal: '10%',
    marginBottom: 4,
    borderWidth: 2,
    borderRadius: 9
  },
  agreeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '10%'
  },
  checkbox: {},
  text: {}
});

export const PersonalInfoStyles = StyleSheet.create({
  safeContainer: {
    flex: 1
  },
  container: {
    flex: 5,
    alignItems: 'center',
    marginHorizontal: '6%'
  },
  header: {
    paddingBottom: 10
  },
  inputsContainer: {
    flexDirection: 'column',
    paddingHorizontal: 10
  },
  text: {
    flexWrap: 'wrap',
    marginTop: 10,
    marginBottom: 4
  },
  input: {
    flexWrap: 'wrap',
    borderRadius: 5,
    borderWidth: 1,
    height: 45,
    width: 200,
    marginTop: 10
  },
  dropdown: {
    flexWrap: 'wrap',
    width: 200
  }
});

export const UploadPhotoStyles = StyleSheet.create({
  safeContainer: {
    flex: 1
  },
  container: {
    flex: 5,
    alignItems: 'center',
    marginHorizontal: '6%'
  },
  // "Upload a photo for your passport profile." text
  header: {
    width: '80%',
    textAlign: 'center'
  },
  //Wraps the bottom section (three images/buttons)
  bottomSection: {
    flexWrap: 'wrap',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    alignContent: 'center'
  },
  // Where the image is projected in the circular container
  imageContainer: {
    marginTop: 25,
    marginBottom: 25,
    height: 150,
    width: 150,
    backgroundColor: '#efefef',
    position: 'relative',
    borderRadius: 100,
    overflow: 'hidden'
  },
  image: {
    width: 200,
    height: 200
  },
  uploadBtnContainer: {
    opacity: 0.7,
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: 'lightgrey',
    width: '100%',
    height: '25%'
  },
  uploadBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export const ProfileStackButtonsContainer = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 60
  }
});

export const ContinueButtonStyles = StyleSheet.create({
  continue: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 4,
    borderRadius: 19
  },
  continueText: {
    textAlign: 'center',
    marginHorizontal: 4
  },
  image: {
    height: 50,
    width: 50
  }
});

export const SkipButtonStyles = StyleSheet.create({
  skip: {
    marginTop: 6,
    textDecorationLine: 'underline',
    textAlign: 'center'
  }
});

// Animation and Loading styles
export const AnimatedBlockStyles = StyleSheet.create({
  block: {
    width: 12,
    height: 12
  }
});

export const LoadingScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontWeight: 'bold',
    marginRight: 6
  },
  blockcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8
  },
  spacer: {
    width: 2
  }
});

//UI component styles
export const PassportBoxStyles = StyleSheet.create({
  picture: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    borderWidth: 2,
    borderColor: '#5B5B5B',
    margin: 20,
    overflow: 'hidden'
  },
  icon: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    borderWidth: 2,
    borderColor: '#5B5B5B',
    margin: 20,
    fontSize: 200,
    textAlign: 'center',
    overflow: 'hidden'
  },
  input: {
    height: 45,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8
  },
  text: {
    flexWrap: 'wrap',
    fontSize: 20,
    marginLeft: 5
  },
  LabelContainers: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 6
  },
  container: {
    width: '95%',
    alignSelf: 'center'
  },
  dropdown: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8
  },
  uploadButtonContainer: {
    display: 'flex'
  },
  uploadButton: {
    alignSelf: 'center',
    backgroundColor: '#7286a1',
    width: '50%',
    height: 'auto',
    padding: 10,
    borderRadius: 20
  },
  buttonText: {
    textAlign: 'center',
    color: 'white'
  },
  cbContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  cbBtns: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10
  }
});

export const CurrentLanguageBoxStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: 10,
    borderRadius: 4,
    shadowColor: '#171717',
    shadowOffset: {
      width: 2,
      height: 4
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20
  },
  languageSet: {
    flex: 1,
    margin: 10
  },
  arrow: {
    fontSize: 30,
    alignSelf: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    alignSelf: 'center'
  }
});

export const DropDownStyles = StyleSheet.create({
  container: {
    marginTop: 0,
    alignSelf: 'center'
  },
  dropdown: {
    borderWidth: 1,
    borderRadius: 8
  }
});

export const HelpPageStyles = StyleSheet.create({
  gettingStarted: {
    flex: 1
  },
  listItem: {
    marginTop: 10,
    marginBottom: 10
  },
  header: {
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: 90,
    marginBottom: 30,
    fontWeight: 'bold'
  },
  container: {
    flex: 1
  }
});

export const ButtonHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    alignSelf: 'center',
    width: '100%',
    height: 'auto'
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  input: {
    height: 50,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff'
  }
});

export const MainBoxStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 4,
    margin: 4,
    marginTop: 10,
    marginBottom: 30,
    padding: 14,
    paddingBottom: 50,
    shadowColor: '#171717',
    shadowOffset: {
      width: 2,
      height: 4
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20
  }
});

export const RoundBtnStyles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'white',
    margin: 7,
    shadowColor: '#171717',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20
  },
  text: {
    fontSize: 30,
    color: '#143b96'
  }
});

export const ColorModeStyles = StyleSheet.create({
  mainContainer: {
    padding: 40
  },
  subContainer: {
    padding: 5
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  colorBtn: {
    borderWidth: 4,
    borderRadius: 10,
    width: 70,
    height: 70,
    justifyContent: 'center'
  }
});

export const FontSizeStyles = StyleSheet.create({
  mainContainer: {
    padding: 40
  },
  subContainer: {
    padding: 5
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  colorBtn: {
    borderWidth: 4,
    borderRadius: 10,
    width: 70,
    height: 70,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

// Global color style
export function BurgerIconColor() {
  const { colorMode } = UseUIContext();
  if (colorMode === 'dark') return '#fff';
  else return 'black';
}
export function DropdownBKColor() {
  const { colorMode } = UseUIContext();
  if (colorMode === 'dark') return '#333838';
  else if (colorMode === 'peach') return '#EFD3CF';
  else if (colorMode === 'blue') return '#DEEEF5';
  else return 'white';
}
export function DropdownTextColor() {
  const { colorMode } = UseUIContext();
  if (colorMode === 'dark') return '#bdb1e3';
  else return 'black';
}

export function GlobalColor() {
  const { colorMode } = UseUIContext();
  return StyleSheet.create({
    regularColor: {
      color: colorMode === 'dark' ? 'white' : 'black'
    },
    regularBKColor: {
      backgroundColor:
        colorMode === 'dark'
          ? 'black'
          : colorMode === 'peach'
          ? '#EFD3CF'
          : colorMode === 'blue'
          ? '#DEEEF5'
          : 'white'
    },
    CheckBoxTranslationColor: {
      color:
        colorMode === 'dark'
          ? '#C59227'
          : colorMode === 'blue'
          ? '#DCBD0F'
          : '#0971b4'
    }, //dark yellow、navy blue
    ContinueButtonTextColor: {
      color: colorMode === 'dark' ? '#171a1a' : 'white'
    }, //light black, white
    ContinueButtonBKColor: {
      backgroundColor: colorMode === 'dark' ? '#5e43b5' : '#121142' //purple、dark blue
    },
    ExpandHeaderBKColor: {
      backgroundColor:
        colorMode === 'dark'
          ? '#46577B' //dark grey
          : colorMode === 'peach'
          ? '#EAA498' //peach color
          : colorMode === 'blue'
          ? '#60B1E6' //grey
          : '#F5FCFF' // light blue
    },
    ExpandHeaderSuperBKColor: {
      backgroundColor:
        colorMode === 'dark'
          ? '#1D2D50' // dark blue
          : colorMode === 'peach'
          ? '#E4888A' // dark peach
          : colorMode === 'blue'
          ? '#0B78BF' // dark grey
          : '#CCE3EC' // light blue
    },
    ExpandHeaderTranslationColor: {
      color:
        colorMode === 'dark'
          ? '#C59227'
          : colorMode === 'blue'
          ? '#DCBD0F'
          : '#0971b4'
    }, //dark yellow，navy blue
    ExpandSeparatorBKColor: {
      backgroundColor: colorMode === 'dark' ? '#d6b0b0' : '#808080' //light pink，grey
    },
    ExpandTextColor: {
      color: colorMode === 'dark' ? '#393975' : '#606070'
    }, //deep purple，grey
    ExpandContentBKColor: {
      backgroundColor:
        colorMode === 'dark'
          ? '#333838'
          : colorMode === 'peach'
          ? '#EFD3CF'
          : colorMode === 'blue'
          ? '#DEEEF5'
          : '#fff'
    }, //light black，white
    ExpandButtonColor: {
      color:
        colorMode === 'peach'
          ? 'black'
          : colorMode === 'blue'
          ? 'black'
          : 'white'
    }, //light black，white

    PromptTranslationColor: {
      color:
        colorMode === 'dark'
          ? '#C59227'
          : colorMode === 'blue'
          ? '#DCBD0F'
          : '#0971b4'
    }, //dark yellow，navy blue
    RadioTranslationColor: {
      color:
        colorMode === 'dark'
          ? '#C59227'
          : colorMode === 'blue'
          ? '#DCBD0F'
          : '#0971b4'
    }, //dark yellow，navy blue
    TextInputTranslationColor: {
      color:
        colorMode === 'dark'
          ? '#C59227'
          : colorMode === 'blue'
          ? '#DCBD0F'
          : '#0971b4'
    }, //dark yellow，navy blue
    DisclaimerAgreementContainerBKColor: {
      backgroundColor:
        colorMode === 'dark'
          ? 'black'
          : colorMode === 'peach'
          ? '#EFD3CF'
          : colorMode === 'blue'
          ? '#DEEEF5'
          : '#fff'
    },
    DisclaimerBDBKColor: {
      borderColor: colorMode === 'dark' ? 'white' : 'black',
      backgroundColor:
        colorMode === 'dark'
          ? '#5e43b5'
          : colorMode === 'peach'
          ? '#eebab4'
          : '#e3fffc' //purple，light green
    },
    LanguageSelectContainerBKColor: {
      backgroundColor:
        colorMode === 'dark'
          ? 'black'
          : colorMode === 'peach'
          ? '#EFD3CF'
          : colorMode === 'blue'
          ? '#DEEEF5'
          : '#fff' //black，white
    },
    WelcomeContainerBKColor: {
      backgroundColor:
        colorMode === 'dark'
          ? 'black'
          : colorMode === 'peach'
          ? '#EFD3CF'
          : colorMode === 'blue'
          ? '#DEEEF5'
          : '#fff'
    }, //black, white
    AccessibilityContainerBKColor: {
      backgroundColor:
        colorMode === 'dark'
          ? 'black'
          : colorMode === 'peach'
          ? '#EFD3CF'
          : colorMode === 'blue'
          ? '#DEEEF5'
          : 'white'
    },
    AccessibilityTextColor: {
      color: colorMode === 'dark' ? 'black' : 'white'
    },
    DrawerMenuBKColor: {
      backgroundColor:
        colorMode === 'dark'
          ? 'black'
          : colorMode === 'peach'
          ? '#EFD3CF'
          : colorMode === 'blue'
          ? '#DEEEF5'
          : '#fff'
    }, // black, white
    DrawerMenuTextColor: {
      color: colorMode === 'dark' ? '#fff' : 'black'
    }, // white, black
    PersonalInfoContainerBKColor: {
      color: colorMode === 'dark' ? 'black' : '#fff'
    }, // black, white
    PersonalInfoNextTextColor: {
      color: colorMode === 'dark' ? 'black' : 'white'
    }, // black, white
    UploadPhotoImageContainerBKColor: {
      backgroundColor: colorMode === 'dark' ? '#636161' : '#efefef' // dark grey, rice white
    },
    UploadBtnContainerBKColor: {
      backgroundColor: colorMode === 'dark' ? '#1f243b' : 'lightgrey' // dark blue, light grey
    },
    TextInputColor: {
      color: colorMode === 'dark' ? '#bdb1e3' : 'black', // light purple, black
      borderColor: colorMode === 'dark' ? 'white' : 'black'
    },
    AnimatedBlockBKColor: {
      backgroundColor: 'blue'
    },
    LoadingScreenBKColor: {
      backgroundColor: 'lightblue'
    },
    HomeBodyContainerBKColor: {
      backgroundColor:
        colorMode === 'dark'
          ? 'black'
          : colorMode === 'peach'
          ? '#eebab4'
          : colorMode === 'blue'
          ? '#C0E9F9'
          : '#C7D4E2'
    },
    HomeEditModeBarBKColor: {
      backgroundColor: '#b82323'
    },
    HomeReadonlyModeBarBKBDColor: {
      backgroundColor:
        colorMode === 'peach'
          ? '#EAA498'
          : colorMode === 'blue'
          ? '#60B1E6'
          : '#7286a1',
      borderColor:
        colorMode === 'peach'
          ? 'grey'
          : colorMode === 'blue'
          ? 'grey'
          : 'white',
      borderWidth: colorMode === 'peach' ? 1 : colorMode === 'blue' ? 1 : 0
    },
    ButtonHeaderBKColor: {
      backgroundColor:
        colorMode === 'peach'
          ? '#EAA498'
          : colorMode === 'blue'
          ? '#60B1E6'
          : '#7286a1'
    },
    ButtonBKBDColor: {
      backgroundColor:
        colorMode === 'peach'
          ? '#EAA498'
          : colorMode === 'blue'
          ? '#60B1E6'
          : '#7286a1',
      borderColor:
        colorMode === 'peach'
          ? '#8c616a'
          : colorMode === 'blue'
          ? '#0d5180'
          : '#C7D4E2'
    },
    CurrentLanguageContainerBKColor: {
      backgroundColor:
        colorMode === 'dark'
          ? '#333838'
          : colorMode === 'peach'
          ? '#EFD3CF'
          : colorMode === 'blue'
          ? '#DEEEF5'
          : '#fff'
    },
    HelpBDColor: {
      borderColor: colorMode === 'dark' ? '#bdb1e3' : 'black'
    }
  });
}

//Global font size
export default function GlobalFontSize() {
  const { fontMode, colorMode } = UseUIContext();
  return StyleSheet.create({
    regularText: {
      fontSize: fontMode === 'small' ? 14 : fontMode === 'large' ? 22 : 18,
      color: colorMode === 'dark' ? '#bdb1e3' : 'black' //light purple , black
    },
    irregularText: {
      fontSize: fontMode === 'small' ? 24 : fontMode === 'large' ? 36 : 30,
      color: colorMode === 'dark' ? '#bdb1e3' : 'black' //light purple , black
    },
    irregularHeaderText: {
      fontSize: fontMode === 'small' ? 20 : fontMode === 'large' ? 28 : 24,
      color: colorMode === 'dark' ? '#bdb1e3' : 'black' //light purple , black
    }
  });
}
