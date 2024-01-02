import React from 'react';
import {
  Expandable,
  TextInputComponent,
  RadioComponent,
  PromptComponent,
  CheckboxComponent
} from '../components/ProfileDocument';
import {
  CheckBox,
  RadioButtons,
  Prompt,
  TextEntry,
  ProfileEntry
} from './Types';
import { Profile } from './Profile';
import { View } from 'react-native';
import { PassportBox } from '../components/HomePage';

/**
 * Builds an array of JSX elements from the data in a Profile object in order
 * of appearance. This includes super sections, sections, prompts and input
 * components. Currently only rendered on the Home screen.
 *
 * @param profile - Profile object.
 * @param handleChange - Function to update the Profile object.
 */
export const generateProfile = (
  profile: Profile,
  handleChange: (
    sectionID: string,
    dataID: string,
    value: boolean | string
  ) => void
) => {
  if (profile === null) return;

  const elements = [];
  const supsects = profile.superSections;
  const supsectElems = [];
  for (let i = 0; i < supsects.length; i++) {
    const array: JSX.Element[] = [];
    supsectElems.push(array);
  }

  // Loop through the section entries in the current profile
  for (const section of profile.sections) {
    const dataElements: JSX.Element[] = [];
    // Loop through data entries in the current section
    if (section.id === 'GHP') {
      elements.push(
        <View key={section.id}>
          <PassportBox
            data={section.data}
            handleChange={handleChange}
            profilePic={profile.photo}
          />
        </View>
      );
    } else {
      for (const data of section.data) {
        // If this data entry is a prompt, render it like this:
        if (data instanceof Prompt) {
          dataElements.push(<PromptComponent data={data} key={data.key} />);
        }
        // If this data entry is a checkbox, render it like this:
        if (data instanceof CheckBox) {
          dataElements.push(
            <CheckboxComponent
              sectionID={section.id}
              data={data}
              handleChange={handleChange}
              key={data.key}
            />
          );
        }
        // If this data entry is a radio button, render it like this:
        if (data instanceof RadioButtons) {
          dataElements.push(
            <RadioComponent
              sectionID={section.id}
              data={data}
              handleChange={handleChange}
              key={data.key}
            />
          );
        }
        if (data instanceof TextEntry) {
          dataElements.push(
            <TextInputComponent
              sectionID={section.id}
              data={data}
              handleChange={handleChange}
              key={data.key}
            />
          );
        }
      }
    }
    if (section.id.includes('EP')) {
      elements.push(
        <Expandable
          handleChange={handleChange}
          id={section.id}
          title={section.title}
          translation={section.translation}
          expandedStatus={section.expandedStatus}
          data={dataElements}
          key={section.id}
        />
      );
    }

    for (let i = 0; i < supsects.length; i++) {
      if (supsects[i].data.includes(section.id)) {
        section.supId = supsects[i].id;
        supsectElems[i].push(
          <Expandable
            handleChange={handleChange}
            id={section.id}
            title={section.title}
            translation={section.translation}
            expandedStatus={section.expandedStatus}
            data={dataElements}
            key={section.id}
          />
        );
      }
    }
  }

  for (let i = 0; i < supsects.length; i++) {
    const data = supsectElems[i];
    elements.push(
      <Expandable
        handleChange={handleChange}
        id={supsects[i].id}
        title={supsects[i].title}
        translation={supsects[i].translation}
        expandedStatus={supsects[i].expandedStatus}
        data={data}
        key={supsects[i].id}
      />
    );
  }
  return elements;
};

/**
 * Builds an array of JSX elements from the data for a section of a Profile
 * object in order of appearance. This includes the section header and any
 * prompt or input components. Used for the About, Disclaimer, and other
 * screens.
 *
 * @param section - Section object (pulled from the Profile object).
 * @param handleChange - Function to update the Profile object.
 */
export const generateSection = (
  section: ProfileEntry,
  handleChange?: (
    sectionID: string,
    dataID: string,
    value: boolean | string
  ) => void
) => {
  // Array of JSX elements to render to the screen
  const elements = [];
  // Loop through data entries in the current section
  for (const data of section.data) {
    // If this data entry is a prompt, render it like this:
    if (data instanceof Prompt) {
      elements.push(<PromptComponent data={data} key={data.key} />);
    }
    // If this data entry is a checkbox, render it like this:
    if (data instanceof CheckBox) {
      if (handleChange) {
        elements.push(
          <CheckboxComponent
            sectionID={section.id}
            data={data}
            handleChange={handleChange}
            key={data.key}
          />
        );
      }
    }
    // If this data entry is a radio button, render it like this:
    if (data instanceof RadioButtons) {
      if (handleChange) {
        elements.push(
          <RadioComponent
            sectionID={section.id}
            data={data}
            handleChange={handleChange}
            key={data.key}
          />
        );
      }
    }
    if (data instanceof TextEntry) {
      if (handleChange) {
        elements.push(
          <TextInputComponent
            sectionID={section.id}
            data={data}
            handleChange={handleChange}
            key={data.key}
          />
        );
      }
    }
  }
  return elements;
};
