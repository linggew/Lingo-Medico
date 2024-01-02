import {
  AboutAuthorTemplate,
  AboutTemplate,
  DisclaimerTemplate,
  InstructionsTemplate,
  ProfileTemplate,
  SuperSections
} from '../src/constants/Templates';
import { LanguagePack } from '../src/utils/Types';
import {
  EnglishPack,
  JapanesePack,
  ArabicPack,
  MandarinPack,
  SpanishPack,
  KoreanPack,
  FrenchPack
} from '../src/constants';

/**
 *
 * Check the compliancy of language packs
 *
 * Validates that sections are in the correct order and arrays are of the correct length according to src/constants/Templates.ts
 * Does not validate correctness of language data
 * @param languagepack
 */
export const ValidateLanguagePack = (
  languagepack: LanguagePack
): { valid: boolean; error: string[] } => {
  const superSections: SuperSections = new SuperSections();
  const aboutTemplate: AboutTemplate = new AboutTemplate();
  const aboutAuthorTemplate: AboutAuthorTemplate = new AboutAuthorTemplate();
  const disclaimerTemplate: DisclaimerTemplate = new DisclaimerTemplate();
  const instructionsTemplate: InstructionsTemplate = new InstructionsTemplate();
  const profileTemplate: ProfileTemplate = new ProfileTemplate();

  const results: { valid: boolean; error: string[] } = {
    valid: true,
    error: []
  };
  // Validate language name / id
  if (languagepack.language === '') {
    results.valid = false;
    results.error.push(`Language Pack Error: invalid language id`);
  }

  // Validate SuperSection object
  if (languagepack.superSections.length !== superSections.sections.length) {
    results.valid = false;
    results.error.push(
      `Language Pack Error: invalid number of 'super sections'`
    );
  }

  // Validate About object
  if (languagepack.about.data.length !== aboutTemplate.section.data.length) {
    results.valid = false;
    results.error.push(
      `Language Pack Error: invalid number of 'about' data entries`
    );
  }

  // Validate About Author object
  if (
    languagepack.author.data.length !== aboutAuthorTemplate.section.data.length
  ) {
    results.valid = false;
    results.error.push(
      `Language Pack Error: invalid number of 'author' data entries`
    );
  }

  // Validate Disclaimer object
  if (
    languagepack.disclaimer.data.length !==
    disclaimerTemplate.section.data.length
  ) {
    results.valid = false;
    results.error.push(
      `Language Pack Error: invalid number of 'disclaimer' data entries`
    );
  }

  // Validate Instructions object
  if (
    languagepack.instructions.data.length !==
    instructionsTemplate.section.data.length
  ) {
    results.valid = false;
    results.error.push(
      `Language Pack Error: invalid number of 'instructions' data entries`
    );
  }

  // Validate Sections array
  if (languagepack.sections.length !== profileTemplate.sections.length) {
    results.valid = false;
    results.error.push(
      `Language Pack Error: invalid number of 'profile' sections`
    );
  }

  // Validate each section object and section order
  let sectionidx = 0;
  for (const section of profileTemplate.sections) {
    if (languagepack.sections[sectionidx].id !== section.id) {
      results.valid = false;
      results.error
        .push(`Language Pack Error: section id ${languagepack.sections[sectionidx].id} 
        does not match the template id ${section.id}`);
    }
    if (languagepack.sections[sectionidx].data.length !== section.data.length) {
      results.valid = false;
      results.error.push(
        `Language Pack Error: invalid number of data entries in ${languagepack.sections[sectionidx].id}`
      );
    }
    sectionidx++;
  }
  return results;
};

const main = () => {
  console.log('~~~~~~~~~ Validate Language Packs ~~~~~~~~~');
  try {
    const result = ValidateLanguagePack(ArabicPack);
    if (result) console.log('ArabicPack results: ', result);
  } catch (e) {
    console.log('ArabicPack not properly initialized');
  }
  try {
    const result = ValidateLanguagePack(EnglishPack);
    if (result) console.log('EnglishPack results: ', result);
  } catch (e) {
    console.log('EnglishPack not properly initialized');
  }
  try {
    const result = ValidateLanguagePack(JapanesePack);
    if (result) console.log('JapanesePack results: ', result);
  } catch (e) {
    console.log('JapanesePack not properly initialized');
  }
  try {
    const result = ValidateLanguagePack(KoreanPack);
    if (result) console.log('KoreanPack results: ', result);
  } catch (e) {
    console.log('KoreanPack not properly initialized');
  }
  try {
    const result = ValidateLanguagePack(FrenchPack);
    if (result) console.log('FrenchPack results: ', result);
  } catch (e) {
    console.log('FrenchPack not properly initialized');
  }
  try {
    const result = ValidateLanguagePack(MandarinPack);
    if (result) console.log('MandarinPack results: ', result);
  } catch (e) {
    console.log('MandarinPack not properly initialized');
  }
  try {
    const result = ValidateLanguagePack(SpanishPack);
    if (result) console.log('SpanishPack results: ', result);
  } catch (e) {
    console.log('SpanishPack not properly initialized');
  }
};

main();
