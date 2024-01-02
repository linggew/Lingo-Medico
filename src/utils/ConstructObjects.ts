import {
  CheckBox,
  RadioButtons,
  Prompt,
  TextEntry,
  LanguagePack,
  DataEntry,
  ProfileEntry,
  SerializedProfile,
  SuperSection
} from './Types';
import {
  AboutAuthorTemplate,
  AboutTemplate,
  DisclaimerTemplate,
  InstructionsTemplate,
  ProfileTemplate,
  SuperSections
} from '../constants/Templates';

/**
 * Instantiate array of ProfileEntry objects to be rendered on the home screen
 * that will contain the input labels copied from the language pack parameters
 * as well as user inputs. If a serialized profile is provided, user input
 * values are copied. If not, a blank profile object is constructed.
 *
 * @param lang1 - Base language pack.
 * @param lang2 - Translation language pack.
 * @param values - Profile object data from storage.
 */
export const constructProfile = (
  lang1?: LanguagePack,
  lang2?: LanguagePack,
  values?: SerializedProfile
) => {
  const template: ProfileTemplate = new ProfileTemplate();
  const sectionArr = [];
  let radioAddition = false;
  let sectionidx = 0;

  for (const sections of template.sections) {
    let valuesidx = 0;
    let dataidx = 0;
    const newSection = new ProfileEntry(
      sections.id,
      lang1 ? lang1.sections[sectionidx].title : undefined,
      lang2 ? lang2.sections[sectionidx].title : undefined,
      values ? values.sections[sectionidx].expandedStatus : undefined
    );
    let newData: DataEntry = new Prompt();

    for (const data of sections.data) {
      if (data.dataType === 'Prompt') {
        if (values && newData instanceof RadioButtons) {
          newData.setValue(
            values.sections[sectionidx].data[valuesidx - 1].value
          );
        }
        valuesidx--;
        newData = new Prompt(
          data.id,
          data.indented ? true : false,
          lang1 ? lang1.sections[sectionidx].data[dataidx].text : undefined,
          lang2 ? lang2.sections[sectionidx].data[dataidx].text : undefined
        );
      } else if (data.dataType === 'Checkbox') {
        let value = false;
        if (values) {
          if (newData instanceof RadioButtons) {
            newData.setValue(
              values.sections[sectionidx].data[valuesidx - 1].value
            );
          }
          if (values.sections[sectionidx].data[valuesidx].value === 'true') {
            value = true;
          } else {
            value = false;
          }
        }
        newData = new CheckBox(
          data.id,
          data.indented ? true : false,
          value,
          lang1 ? lang1.sections[sectionidx].data[dataidx].text : undefined,
          lang2 ? lang2.sections[sectionidx].data[dataidx].text : undefined
        );
      } else if (data.dataType === 'RadioButtons') {
        if (newData instanceof RadioButtons) {
          radioAddition = true;
          newData.addOpt(
            lang1 ? lang1.sections[sectionidx].data[dataidx].text : undefined,
            lang2 ? lang2.sections[sectionidx].data[dataidx].text : undefined
          );
        } else {
          newData = new RadioButtons(
            data.id,
            data.indented,
            lang1 ? lang1.sections[sectionidx].data[dataidx].text : undefined,
            lang2 ? lang2.sections[sectionidx].data[dataidx].text : undefined
          );
        }
      } else if (data.dataType === 'TextInput') {
        let value = '';
        if (values) {
          if (newData instanceof RadioButtons) {
            newData.setValue(
              values.sections[sectionidx].data[valuesidx - 1].value
            );
          }
          value = values.sections[sectionidx].data[valuesidx].value;
        }
        newData = new TextEntry(
          data.id,
          data.indented,
          value,
          lang1 ? lang1.sections[sectionidx].data[dataidx].text : undefined,
          lang2 ? lang2.sections[sectionidx].data[dataidx].text : undefined
        );
      }
      if (!radioAddition) {
        if (values) {
          valuesidx++;
        }
        newSection.data.push(newData);
      } else {
        radioAddition = false;
      }

      dataidx++;
      if (
        values &&
        sections.data.length === dataidx &&
        newData instanceof RadioButtons
      ) {
        newData.setValue(values.sections[sectionidx].data[valuesidx - 1].value);
      }
    }
    sectionArr.push(newSection);
    sectionidx++;
  }
  return sectionArr;
};

/**
 * Construct the array of super sections (e.g. Emergency Phrases, Section I.,
 * etc.) which are rendered on the Home screen.
 *
 * @param lang1 - Base language pack.
 * @param lang2 - Translation language pack.
 * @param values - Profile object data from storage.
 */
export const constructSuperSections = (
  lang1?: LanguagePack,
  lang2?: LanguagePack,
  values?: SerializedProfile['superSections']
) => {
  const template = new SuperSections();
  const superSections = [];

  let idx = 0;
  for (const section of template.sections) {
    superSections.push(
      new SuperSection(
        section.id,
        lang1 ? lang1.superSections[idx].title : undefined,
        lang2 ? lang2.superSections[idx].title : undefined,
        values ? values[idx].expandedStatus : undefined,
        section.sectionIDs
      )
    );
    idx++;
  }
  return superSections;
};

/**
 * Construct an individual ProfileEntry section that is rendered by itself
 * (e.g. the Author section rendered on the About screen).
 *
 * @param template - Section template.
 * @param lang1 - Base language pack.
 * @param lang2 - Translation language pack.
 */
export const constructSection = (
  template: AboutTemplate | DisclaimerTemplate | InstructionsTemplate,
  lang1?: LanguagePack,
  lang2?: LanguagePack
) => {
  let templateType: 'about' | 'author' | 'disclaimer' | 'instructions';
  if (template instanceof AboutTemplate) {
    templateType = 'about';
  } else if (template instanceof AboutAuthorTemplate) {
    templateType = 'author';
  } else if (template instanceof DisclaimerTemplate) {
    templateType = 'disclaimer';
  } else {
    templateType = 'instructions';
  }

  let radioAddition = false;
  let dataidx = 0;

  const newSection = new ProfileEntry(
    template.section.id,
    lang1 ? lang1[templateType].title : undefined,
    lang2 ? lang2[templateType].title : ''
  );
  let newData: DataEntry = new Prompt();
  for (const data of template.section.data) {
    if (data.dataType === 'Prompt') {
      newData = new Prompt(
        data.id,
        data.indented ? true : false,
        lang1 ? lang1[templateType].data[dataidx].text : undefined,
        lang2 ? lang2[templateType].data[dataidx].text : ''
      );
    } else if (data.dataType === 'Checkbox') {
      newData = new CheckBox(
        data.id,
        data.indented ? true : false,
        false,
        lang1 ? lang1[templateType].data[dataidx].text : undefined,
        lang2 ? lang2[templateType].data[dataidx].text : ''
      );
    } else if (data.dataType === 'RadioButtons') {
      if (newData instanceof RadioButtons) {
        radioAddition = true;
        newData.addOpt(
          lang1 ? lang1[templateType].data[dataidx].text : undefined,
          lang2 ? lang2[templateType].data[dataidx].text : ''
        );
      } else {
        newData = new RadioButtons(
          data.id,
          data.indented,
          lang1 ? lang1[templateType].data[dataidx].text : undefined,
          lang2 ? lang2[templateType].data[dataidx].text : ''
        );
      }
    } else if (data.dataType === 'TextInput') {
      newData = new TextEntry(
        data.id,
        data.indented,
        undefined,
        lang1 ? lang1[templateType].data[dataidx].text : undefined,
        lang2 ? lang2[templateType].data[dataidx].text : ''
      );
    }
    if (!radioAddition) {
      newSection.data.push(newData);
    } else {
      radioAddition = false;
    }
    dataidx++;
  }
  return newSection;
};
