import {
  EnglishPack,
  JapanesePack,
  ArabicPack,
  MandarinPack,
  SpanishPack,
  KoreanPack,
  FrenchPack
} from '../constants';

/**
 * Define the screens that are used for creating a new profile using
 * React Navigation's stack navigator functionality.
 */
export type ProfileStackParamList = {
  Home: undefined;
  Welcome: undefined;
  DisclaimerAgreement: undefined;
  LanguageSelect: undefined;
  PersonalInfo: undefined;
  UploadPhoto: undefined;
};

/**
 * Type definition for global state retrieved from storage and used
 * throughout context. Saving fontMode and colorMode to state allows
 * user settings to be persistent. The selectedFontButton and selectedColorButton
 * properties guarantee the highlighted buttons in the settings screen
 * match the current font size and color theme.
 */
export type GlobalState = {
  fontMode: 'small' | 'default' | 'large';
  colorMode: 'default' | 'peach' | 'blue' | 'dark';
  selectedFontButton: 0 | 1 | 2;
  selectedColorButton: 0 | 1 | 2 | 3;
  currProfile: string;
  savedProfiles: readonly string[];
};

/**
 * Class definition for the super sections stored in profile objects.
 */
export class SuperSection {
  id: string;
  title: string;
  translation: string;
  expandedStatus: boolean;
  data: string[];

  constructor(
    id: string,
    title = 'null',
    translation = 'null',
    expandedStatus = false,
    data: string[]
  ) {
    this.id = id;
    this.title = title;
    this.translation = translation;
    this.expandedStatus = expandedStatus;
    this.data = data;
  }
}

/**
 * Class definition for the section objects that are contained in super sections.
 */
export class ProfileEntry {
  supId: string;
  id: string;
  title: string;
  translation: string;
  expandedStatus: boolean;
  data: DataEntry[];

  constructor(
    id = '',
    title = 'Title',
    translation = 'Title',
    expandedStatus = false,
    data?: DataEntry[]
  ) {
    this.supId = '';
    this.id = id;
    this.title = title;
    this.translation = translation;
    this.expandedStatus = expandedStatus;
    if (data) {
      this.data = data;
    } else {
      this.data = [];
    }
  }
}

/**
 * Base class for the types of data stored in profile objects.
 */
export abstract class DataEntry {
  key: string;
  abstract value: boolean | string;
  indented: boolean;
  isEditable: boolean;

  constructor(key = '', indented = false) {
    this.key = key;
    this.indented = indented;
    this.isEditable = false;
  }
}

/**
 * Class definition for prompts which
 * ask questions to the user that lead to the different types of user input.
 */
export class Prompt extends DataEntry {
  value: string;
  translation: string;

  constructor(
    key = '',
    indented = false,
    value = 'Prompt',
    translation = 'Prompt'
  ) {
    super(key, indented);
    this.value = value;
    this.translation = translation;
  }
}

/**
 * Class definition for boolean checkboxes.
 */
export class CheckBox extends DataEntry {
  value: boolean;
  description: string;
  translation: string;

  constructor(
    key = '',
    indented = false,
    value = false,
    description = 'Checkbox description',
    translation = 'Checkbox description'
  ) {
    super(key, indented);
    this.value = value;
    this.description = description;
    this.translation = translation;
  }
}

/**
 * Class definition for radio buttons which are a set of buttons for options
 * with exclusive selection (only one can be selected at a time).
 */
export class RadioButtons extends DataEntry {
  value: string;
  options: string[];
  translations: string[];

  constructor(
    key = '',
    indented = false,
    optStr = 'option',
    translation = 'option'
  ) {
    super(key, indented);
    this.options = [];
    this.translations = [];
    this.options = [...this.options, optStr];
    this.translations = [...this.translations, translation];
    this.value = 'Unselected';
  }

  clearOpts() {
    this.options = [];
  }

  setOpts(options: string[]) {
    this.options = options;
  }

  addOpt(option = 'option', translation = 'option') {
    this.options = [...this.options, option];
    this.translations = [...this.translations, translation];
  }

  setValue(value: number | string) {
    if (typeof value === 'number') {
      this.value = this.options[value];
    } else if (typeof value === 'string') {
      this.value = value;
    }
  }
}

/**
 * Class definition for user input in text fields.
 */
export class TextEntry extends DataEntry {
  value: string;
  description: string;
  translation: string;

  constructor(
    key = '',
    indented = false,
    value = '',
    description = 'TextEntry description',
    translation = 'TextEntry description'
  ) {
    super(key, indented);
    this.value = value;
    this.description = description;
    this.translation = translation;
  }
}

/**
 * Class definition for the condensed version of the Profile object for
 * storage.
 */
export class SerializedProfile {
  baselang: string;
  translang: string;
  name: string;
  nickname: string;
  gender: string;
  photo: string | null;
  superSections: {
    id: string;
    expandedStatus: boolean;
  }[];
  sections: {
    id: string;
    expandedStatus: boolean;
    data: {
      key: string;
      value: string;
    }[];
  }[];

  constructor() {
    this.baselang = 'empty';
    this.translang = 'empty';
    this.name = '';
    this.nickname = '';
    this.gender = '';
    this.photo = '';
    this.superSections = [];
    this.sections = [];
  }
}

/**
 * Maps the language pack JSON objects to a type.
 */
export type LanguagePack = {
  language: string;
  languageTranslations: LanguageTranslations;
  about: LanguageSection;
  author: LanguageSection;
  disclaimer: LanguageSection;
  instructions: LanguageSection;
  sections: LanguageSection[];
  superSections: LanguageSuperSection[];
};

type LanguageTranslations = {
  English: string;
  Japanese: string;
  Korean: string;
  Spanish: string;
  Arabic: string;
  Mandarin: string;
  French: string;
};

/**
 * Current languages that are or will be supported
 */
export type Languages =
  | 'English'
  | 'Japanese'
  | 'Korean'
  | 'Spanish'
  | 'Arabic'
  | 'Mandarin'
  | 'French';

type LanguageSection = {
  id: string;
  title: string;
  data: LanguageData[];
};

type LanguageData = {
  text: string;
};

type LanguageSuperSection = {
  title: string;
};

/**
 * Determine the language pack associated with each optional parameter and the
 * name of each language both in the base language and translated language.
 *
 * For example, if baseValue == 'English' && translationValue == 'French',
 * the following values will be returned:
 *  basePack = EnglishPack;
 *  translationPack = FrenchPack;
 *  baseLangNameForSelf = 'English';
 *  baseLangNameForTrans = 'French';
 *  transLangNameForBase = 'Anglais';
 *  transLangNameForSelf = 'Français';
 *
 * @param baseValue
 * @param translationValue
 */
export const determineLangPacks = (
  baseValue?: Languages,
  translationValue?: Languages
) => {
  let basePack: LanguagePack | undefined = undefined;
  let translationPack: LanguagePack | undefined = undefined;
  let baseLangNameForSelf: string | undefined = undefined;
  let baseLangNameForTrans: string | undefined = undefined;
  let transLangNameForSelf: string | undefined = undefined;
  let transLangNameForBase: string | undefined = undefined;

  if (baseValue) {
    switch (baseValue) {
      case 'Arabic':
        basePack = ArabicPack;
        break;
      case 'Mandarin':
        basePack = MandarinPack;
        break;
      case 'Japanese':
        basePack = JapanesePack;
        break;
      case 'English':
        basePack = EnglishPack;
        break;
      case 'Spanish':
        basePack = SpanishPack;
        break;
      case 'Korean':
        basePack = KoreanPack;
        break;
      case 'French':
        basePack = FrenchPack;
        break;
      default:
        console.log(
          'determineLangPack error: given base language not supported'
        );
    }
  }
  if (baseValue && translationValue) {
    switch (translationValue) {
      case 'Arabic':
        translationPack = ArabicPack;
        break;
      case 'Mandarin':
        translationPack = MandarinPack;
        break;
      case 'Japanese':
        translationPack = JapanesePack;
        break;
      case 'English':
        translationPack = EnglishPack;
        break;
      case 'Spanish':
        translationPack = SpanishPack;
        break;
      case 'Korean':
        translationPack = KoreanPack;
        break;
      case 'French':
        translationPack = FrenchPack;
        break;
      default:
        console.log(
          'determineLangPack error: given translation language not supported'
        );
    }
  }

  if (basePack && baseValue) {
    baseLangNameForSelf = basePack['languageTranslations'][baseValue];
    if (translationValue) {
      baseLangNameForTrans = basePack['languageTranslations'][translationValue];
    }
  }
  if (translationPack && translationValue) {
    transLangNameForSelf =
      translationPack['languageTranslations'][translationValue];
    if (baseValue) {
      transLangNameForBase = translationPack['languageTranslations'][baseValue];
    }
  }

  return {
    basePack,
    translationPack,
    baseLangNameForSelf,
    baseLangNameForTrans,
    transLangNameForBase,
    transLangNameForSelf
  };
};
