import {
  SuperSection,
  ProfileEntry,
  determineLangPacks,
  Languages
} from './Types';
import { setLanguages } from './Storage';
import { constructSuperSections, constructProfile } from './ConstructObjects';

/**
 * Type definition for profile objects. Includes a constructor that can
 * be used as a default or a copy constructor.
 */
export class Profile {
  name = '';
  baseLang = '';
  transLang = '';
  nickname = '';
  gender = '';
  superSections: SuperSection[] = [];
  sections: ProfileEntry[] = [];
  photo: string | null = null;

  constructor(src?: Profile) {
    if (src) {
      this.name = src.name;
      this.baseLang = src.baseLang;
      this.transLang = src.transLang;
      this.nickname = src.nickname;
      this.gender = src.gender;
      this.photo = src.photo;
      const languages = determineLangPacks(
        this.baseLang as Languages,
        this.transLang as Languages
      );
      if (languages.basePack && languages.translationPack)
        setLanguages(languages.basePack, languages.translationPack, this, src);
    } else {
      this.superSections = constructSuperSections();
      this.sections = constructProfile();
    }
  }
}
