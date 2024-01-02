type Data = {
  dataType: 'Prompt' | 'Checkbox' | 'RadioButtons' | 'TextInput';
  indented: boolean;
  id: string;
};

type Section = {
  id: string;
  title: string;
  data: Data[];
};

// Organize into 3 super-sections
//    Section I - Medical History
//    Section II - Current Medical Symptoms
//    Section III - Current Dental Symptoms
export class SuperSections {
  sections: SuperSection[];

  constructor() {
    this.sections = [
      new SuperSection('section1_super', [
        'I',
        'AA',
        'CM',
        'SH',
        'PMR',
        'MHS',
        'HAN',
        'CT',
        'AB',
        'G',
        'FA',
        'PH',
        'MA',
        'MB',
        'S'
      ]),
      new SuperSection('section2_super', [
        'FZ',
        'DF',
        'PRA',
        'ITC',
        'IHA',
        'IA',
        'IG',
        'FB',
        'MC',
        'VM',
        'VS'
      ]),
      new SuperSection('section3_super', ['VDH'])
    ];
  }
}

export class SuperSection {
  id: string;
  sectionIDs: string[];

  constructor(id: string, ids: string[]) {
    this.id = id;
    this.sectionIDs = ids;
  }
}

export class AboutTemplate {
  language: string;
  section: Section;

  constructor() {
    this.language = 'null';
    this.section = {
      id: 'ATB',
      title: 'null',
      data: [
        {
          dataType: 'Prompt',
          indented: false,
          id: 'ATB_1'
        },
        {
          dataType: 'Prompt',
          indented: false,
          id: 'ATB_2'
        },
        {
          dataType: 'Prompt',
          indented: false,
          id: 'ATB_3'
        },
        {
          dataType: 'Prompt',
          indented: false,
          id: 'ATB_4'
        },
        {
          dataType: 'Prompt',
          indented: false,
          id: 'ATB_5'
        },
        {
          dataType: 'Prompt',
          indented: false,
          id: 'ATB_6'
        },
        {
          dataType: 'Prompt',
          indented: false,
          id: 'ATB_7'
        },
        {
          dataType: 'Prompt',
          indented: false,
          id: 'ATB_8'
        }
      ]
    };
  }
}

export class AboutAuthorTemplate {
  language: string;
  section: Section;

  constructor() {
    this.language = 'null';
    this.section = {
      id: 'ATA',
      title: 'null',
      data: [
        {
          dataType: 'Prompt',
          indented: false,
          id: 'ATA_1'
        },
        {
          dataType: 'Prompt',
          indented: false,
          id: 'ATA_2'
        },
        {
          dataType: 'Prompt',
          indented: false,
          id: 'ATA_3'
        },
        {
          dataType: 'Prompt',
          indented: false,
          id: 'ATA_4'
        }
      ]
    };
  }
}

export class DisclaimerTemplate {
  language: string;
  section: Section;

  constructor() {
    this.language = 'null';
    this.section = {
      id: 'D',
      title: 'null',
      data: [
        {
          dataType: 'Prompt',
          indented: false,
          id: 'D_1'
        },
        {
          dataType: 'Prompt',
          indented: false,
          id: 'D_2'
        },
        {
          dataType: 'Prompt',
          indented: false,
          id: 'D_3'
        },
        {
          dataType: 'Prompt',
          indented: false,
          id: 'D_4'
        }
      ]
    };
  }
}

export class InstructionsTemplate {
  language: string;
  section: Section;

  constructor() {
    this.language = 'null';
    this.section = {
      id: 'PI',
      title: 'null',
      data: [
        {
          dataType: 'Prompt',
          indented: false,
          id: 'PI_1'
        },
        {
          dataType: 'Checkbox',
          indented: false,
          id: 'PI_2'
        },
        {
          dataType: 'Checkbox',
          indented: false,
          id: 'PI_3'
        },
        {
          dataType: 'Checkbox',
          indented: false,
          id: 'PI_4'
        },
        {
          dataType: 'Prompt',
          indented: false,
          id: 'PI_5'
        },
        {
          dataType: 'Checkbox',
          indented: false,
          id: 'PI_6'
        },
        {
          dataType: 'Prompt',
          indented: true,
          id: 'PI_7'
        },
        {
          dataType: 'Prompt',
          indented: true,
          id: 'PI_8'
        },
        {
          dataType: 'Checkbox',
          indented: false,
          id: 'PI_9'
        },
        {
          dataType: 'Prompt',
          indented: true,
          id: 'PI_10'
        },
        {
          dataType: 'Prompt',
          indented: true,
          id: 'PI_11'
        },
        {
          dataType: 'Checkbox',
          indented: false,
          id: 'PI_12'
        },
        {
          dataType: 'Prompt',
          indented: true,
          id: 'PI_13'
        },
        {
          dataType: 'Prompt',
          indented: true,
          id: 'PI_14'
        }
      ]
    };
  }
}

export class ProfileTemplate {
  language_1: string;
  language_2: string;
  name: string;
  sections: Section[];

  constructor() {
    this.language_1 = 'null';
    this.language_2 = 'null';
    this.name = 'null';
    this.sections = [
      {
        id: 'GHP',
        title: 'null',
        data: [
          {
            dataType: 'Prompt',
            indented: false,
            id: 'GHP_14'
          },
          {
            dataType: 'TextInput',
            indented: false,
            id: 'GHP_15'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'GHP_16'
          },
          {
            dataType: 'TextInput',
            indented: false,
            id: 'GHP_17'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'GHP_1'
          },
          {
            dataType: 'TextInput',
            indented: false,
            id: 'GHP_2'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'GHP_3'
          },
          {
            dataType: 'TextInput',
            indented: false,
            id: 'GHP_4'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'GHP_5'
          },
          {
            dataType: 'TextInput',
            indented: false,
            id: 'GHP_6'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'GHP_7'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'GHP_8'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'GHP_9'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'GHP_10'
          },
          {
            dataType: 'TextInput',
            indented: false,
            id: 'GHP_11'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'GHP_12'
          },
          {
            dataType: 'TextInput',
            indented: false,
            id: 'GHP_13'
          }
        ]
      },
      {
        id: 'EP',
        title: 'null',
        data: [
          {
            dataType: 'Prompt',
            indented: false,
            id: 'EP_1'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'EP_2'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_15'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_3'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_4'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_5'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_6'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'EP_7'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_16'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_8'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_9'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'EP_10'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_11'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_12'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_13'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_14'
          }
        ]
      },
      {
        id: 'FZ',
        title: 'null',
        data: [
          {
            dataType: 'Prompt',
            indented: false,
            id: 'EP_15'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'EP_16'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'EP_17'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'EP_18'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'EP_19'
          },
          {
            dataType: 'TextInput',
            indented: false,
            id: 'EP_20'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'EP_21'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_22'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_23'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_24'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_25'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'EP_26'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'EP_27'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'EP_28'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'EP_29'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'EP_30'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_31'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_32'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_33'
          }
        ]
      },
      {
        id: 'DF',
        title: 'null',
        data: [
          {
            dataType: 'Prompt',
            indented: false,
            id: 'EP_34'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'EP_35'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'EP_36'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'EP_37'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'EP_38'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'EP_39'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'EP_40'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'EP_41'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'EP_42'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_43'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_44'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_45'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_46'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_47'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_48'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_49'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_50'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'EP_51'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_52'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_53'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_54'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_55'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_56'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_57'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_58'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_59'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'EP_60'
          }
        ]
      },
      {
        id: 'I',
        title: 'null',
        data: [
          {
            dataType: 'Prompt',
            indented: false,
            id: 'I_1'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'I_2'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'I_3'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'I_4'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'I_5'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'I_6'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'I_7'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'I_8'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'I_9'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'I_10'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'I_11'
          },
          {
            dataType: 'Checkbox',
            indented: true,
            id: 'I_12'
          },
          {
            dataType: 'Checkbox',
            indented: true,
            id: 'I_13'
          },
          {
            dataType: 'Checkbox',
            indented: true,
            id: 'I_14'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'I_15'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'I_16'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'I_17'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'I_18'
          }
        ]
      },
      {
        id: 'AA',
        title: 'null',
        data: [
          {
            dataType: 'Prompt',
            indented: false,
            id: 'AA_1'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'AA_2'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'AA_3'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'AA_4'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'AA_5'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'AA_6'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'AA_7'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'AA_8'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'AA_9'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'AA_10'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'AA_11'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'AA_12'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'AA_13'
          },
          {
            dataType: 'TextInput',
            indented: false,
            id: 'AA_14'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'AA_15'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'AA_16'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'AA_17'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'AA_18'
          },
          {
            dataType: 'TextInput',
            indented: false,
            id: 'AA_19'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'AA_20'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'AA_21'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'AA_22'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'AA_23'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'AA_24'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'AA_25'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'AA_26'
          },
          {
            dataType: 'TextInput',
            indented: false,
            id: 'AA_27'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'AA_28'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'AA_29'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'AA_30'
          }
        ]
      },
      {
        id: 'CM',
        title: 'null',
        data: [
          {
            dataType: 'Prompt',
            indented: false,
            id: 'CM_1'
          },
          {
            dataType: 'TextInput',
            indented: false,
            id: 'CM_2'
          },
          {
            dataType: 'TextInput',
            indented: false,
            id: 'CM_3'
          },
          {
            dataType: 'TextInput',
            indented: false,
            id: 'CM_4'
          },
          {
            dataType: 'TextInput',
            indented: false,
            id: 'CM_5'
          },
          {
            dataType: 'TextInput',
            indented: false,
            id: 'CM_6'
          },
          {
            dataType: 'TextInput',
            indented: false,
            id: 'CM_7'
          },
          {
            dataType: 'TextInput',
            indented: false,
            id: 'CM_8'
          },
          {
            dataType: 'TextInput',
            indented: false,
            id: 'CM_9'
          },
          {
            dataType: 'TextInput',
            indented: false,
            id: 'CM_10'
          },
          {
            dataType: 'TextInput',
            indented: false,
            id: 'CM_11'
          }
        ]
      },
      {
        id: 'SH',
        title: 'null',
        data: [
          {
            dataType: 'Prompt',
            indented: false,
            id: 'CM_12'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_13'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_14'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_15'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'CM_16'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_17'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_18'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_19'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'CM_20'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_21'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_22'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_23'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'CM_24'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_25'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_26'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_27'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'CM_28'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_29'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_30'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_31'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'CM_32'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_33'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_34'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_35'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'CM_36'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_37'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_38'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_39'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'CM_40'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_41'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_42'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_43'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'CM_44'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_45'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_46'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_47'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'CM_48'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_49'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_50'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_51'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'CM_52'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_53'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_54'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_55'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'CM_56'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_57'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_58'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_59'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'CM_60'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_61'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_62'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CM_63'
          }
        ]
      },
      {
        id: 'PMR',
        title: 'null',
        data: [
          {
            dataType: 'Prompt',
            indented: false,
            id: 'PMR_1'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_2'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_3'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_4'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'PMR_5'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_6'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_7'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'PMR_8'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_9'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_10'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'PMR_11'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_12'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_13'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_14'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'PMR_15'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_16'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_17'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_18'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'PMR_19'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_20'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_21'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_22'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'PMR_23'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_24'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_25'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_26'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'PMR_27'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_28'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_29'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_30'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'PMR_31'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_32'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_33'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_34'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'PMR_35'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_36'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_37'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_38'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'PMR_39'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_40'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_41'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_42'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'PMR_43'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_44'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_45'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_46'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'PMR_47'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_48'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_49'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_50'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'PMR_51'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_52'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_53'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_54'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'PMR_55'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_56'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_57'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_58'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'PMR_59'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_60'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_61'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'PMR_62'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_63'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_64'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PMR_65'
          }
        ]
      },
      {
        id: 'MHS',
        title: 'null',
        data: [
          {
            dataType: 'Prompt',
            indented: false,
            id: 'MHS_1'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'MHS_2'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'MHS_3'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'MHS_4'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'MHS_5'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'MHS_6'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'MHS_7'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'MHS_8'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'MHS_9'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'MHS_10'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'MHS_11'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'MHS_12'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'MHS_13'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'MHS_14'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'MHS_15'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'MHS_16'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'MHS_17'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'MHS_18'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'MHS_19'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'MHS_20'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'MHS_21'
          }
        ]
      },
      {
        id: 'HAN',
        title: 'null',
        data: [
          {
            dataType: 'Prompt',
            indented: false,
            id: 'HAN_1'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'HAN_2'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'HAN_3'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'HAN_4'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'HAN_5'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'HAN_6'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'HAN_7'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'HAN_8'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'HAN_9'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'HAN_10'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'HAN_11'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'HAN_12'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'HAN_13'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'HAN_14'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'HAN_15'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'HAN_16'
          }
        ]
      },
      {
        id: 'CT',
        title: 'null',
        data: [
          {
            dataType: 'Prompt',
            indented: false,
            id: 'CT_1'
          },
          {
            dataType: 'Prompt',
            indented: true,
            id: 'CT_2'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CT_3'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CT_4'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CT_5'
          },
          {
            dataType: 'Prompt',
            indented: true,
            id: 'CT_6'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CT_7'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CT_8'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'CT_9'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'CT_10'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'CT_11'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'CT_12'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'CT_13'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'CT_14'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'CT_15'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'CT_16'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'CT_17'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'CT_18'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'CT_19'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'CT_20'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'CT_21'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'CT_22'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'CT_23'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'CT_24'
          }
        ]
      },
      {
        id: 'AB',
        title: 'null',
        data: [
          {
            dataType: 'Prompt',
            indented: false,
            id: 'AB_1'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'AB_2'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'AB_3'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'AB_4'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'AB_5'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'AB_6'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'AB_7'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'AB_8'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'AB_9'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'AB_10'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'AB_11'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'AB_12'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'AB_13'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'AB_14'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'AB_15'
          }
        ]
      },
      {
        id: 'G',
        title: 'null',
        data: [
          {
            dataType: 'Prompt',
            indented: false,
            id: 'G_1'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'G_2'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'G_3'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'G_4'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'G_5'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'G_6'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'G_7'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'G_8'
          }
        ]
      },
      {
        id: 'FA',
        title: 'null',
        data: [
          {
            dataType: 'Prompt',
            indented: false,
            id: 'FA_1'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'FA_2'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'FA_3'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FA_4'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FA_5'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'FA_6'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FA_7'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FA_8'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'FA_9'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FA_10'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FA_11'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FA_12'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'FA_13'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FA_14'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FA_15'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'FA_16'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FA_17'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FA_18'
          }
        ]
      },
      {
        id: 'PH',
        title: 'null',
        data: [
          {
            dataType: 'Prompt',
            indented: false,
            id: 'PH_1'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PH_2'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PH_3'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'PH_4'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PH_5'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PH_6'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'PH_7'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PH_8'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PH_9'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'PH_10'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PH_11'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PH_12'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'PH_13'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PH_14'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'PH_15'
          }
        ]
      },
      {
        id: 'MA',
        title: 'null',
        data: [
          {
            dataType: 'Prompt',
            indented: false,
            id: 'MA_1'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'MA_2'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'MA_3'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'MA_4'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'MA_5'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'MA_6'
          }
        ]
      },
      {
        id: 'MB',
        title: 'null',
        data: [
          {
            dataType: 'Prompt',
            indented: false,
            id: 'MB_1'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'MB_2'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'MB_3'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'MB_4'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'MB_5'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'MB_6'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'MB_7'
          }
        ]
      },
      {
        id: 'S',
        title: 'null',
        data: [
          {
            dataType: 'Prompt',
            indented: false,
            id: 'S_1'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'S_2'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'S_3'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'S_4'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'S_5'
          },
          {
            dataType: 'Checkbox',
            indented: true,
            id: 'S_6'
          },
          {
            dataType: 'Checkbox',
            indented: true,
            id: 'S_7'
          },
          {
            dataType: 'Checkbox',
            indented: true,
            id: 'S_8'
          }
        ]
      },
      {
        id: 'PRA',
        title: 'null',
        data: [
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'PRA_1'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'PRA_2'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'PRA_3'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'PRA_4'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'PRA_5'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'PRA_6'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'PRA_7'
          }
        ]
      },
      {
        id: 'ITC',
        title: 'null',
        data: [
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_1'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_2'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_3'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_4'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_5'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'ITC_6'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'ITC_7'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'ITC_8'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'ITC_9'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_10'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_11'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_12'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_13'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_14'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_15'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_16'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_17'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_18'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_19'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_20'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_21'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_22'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_23'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_24'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_25'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_26'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_27'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_28'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_29'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_30'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_31'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_32'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_33'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_34'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_35'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_36'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_37'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_38'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_39'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_40'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_41'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_42'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_43'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_44'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_45'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_46'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_47'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_48'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_49'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_50'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_51'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_52'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_53'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_54'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_55'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_56'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_57'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_58'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_59'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_60'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_61'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'ITC_62'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'ITC_63'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'ITC_64'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_65'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_66'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_67'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_68'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_69'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_70'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'ITC_71'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'ITC_72'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'ITC_73'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'ITC_74'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'ITC_75'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'ITC_76'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'ITC_77'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'ITC_78'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_79'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_80'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_81'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_82'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_83'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_84'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_85'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'ITC_86'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'ITC_87'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_88'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_89'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_90'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_91'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_92'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_93'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_94'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_95'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_96'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_97'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_98'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_99'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_100'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_101'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_102'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_103'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_104'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_105'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_106'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_107'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_108'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_109'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_110'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_111'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_112'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_113'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_114'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'ITC_115'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_116'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_117'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'ITC_118'
          }
        ]
      },
      {
        id: 'IHA',
        title: 'null',
        data: [
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_1'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_2'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_3'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_4'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_5'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_6'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_7'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_8'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_9'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_10'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_11'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_12'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_13'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_14'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_15'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_16'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_17'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_18'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_19'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_20'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_21'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_22'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_23'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_24'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_25'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_26'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_27'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_28'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_29'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_30'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_31'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_32'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_33'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_34'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_35'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_36'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_37'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_38'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_39'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_40'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_41'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_42'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_43'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_44'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'IHA_45'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'IHA_46'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'IHA_47'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'IHA_48'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_49'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_50'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_51'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_52'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_53'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_54'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_55'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_56'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_57'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_58'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_59'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_60'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_61'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_62'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_63'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_64'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_65'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_66'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_67'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_68'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_69'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_70'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_71'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_72'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_73'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_74'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_75'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_76'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_77'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_78'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_79'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_80'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_81'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_82'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_83'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_84'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_85'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_86'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_87'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_88'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_89'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'IHA_90'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'IHA_91'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'IHA_92'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_93'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_94'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_95'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_96'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_97'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_98'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_99'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_100'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_101'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_102'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_103'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_104'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_105'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_106'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_107'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_108'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_109'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_110'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_111'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_112'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IHA_113'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_114'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IHA_115'
          }
        ]
      },
      {
        id: 'IA',
        title: 'null',
        data: [
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IA_1'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_2'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_3'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IA_76'
          },
          {
            dataType: 'TextInput',
            indented: false,
            id: 'IA_4'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IA_5'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_6'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_7'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IA_8'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_9'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_10'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IA_11'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_12'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_13'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_14'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IA_15'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_16'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_17'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IA_18'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_19'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_20'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_21'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IA_22'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_23'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_24'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IA_25'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IA_26'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_27'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_28'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IA_29'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_30'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_31'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_32'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IA_33'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'IA_34'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'IA_35'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IA_36'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_37'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_38'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IA_39'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_40'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_41'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IA_42'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_43'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_44'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_45'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IA_46'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'IA_47'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'IA_48'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'IA_49'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'IA_50'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IA_51'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_52'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_53'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_54'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IA_55'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_56'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_57'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IA_58'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_59'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_60'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IA_61'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_62'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_63'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IA_64'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_65'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_66'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IA_67'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_68'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_69'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IA_70'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_71'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_72'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IA_73'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_74'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IA_75'
          }
        ]
      },
      {
        id: 'IG',
        title: 'null',
        data: [
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IG_1'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IG_2'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IG_3'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IG_4'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IG_5'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IG_6'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IG_7'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IG_8'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IG_9'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IG_10'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IG_11'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IG_12'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IG_13'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IG_14'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IG_15'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IG_16'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IG_17'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'IG_18'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IG_19'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IG_20'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'IG_21'
          }
        ]
      },
      {
        id: 'FB',
        title: 'null',
        data: [
          {
            dataType: 'Prompt',
            indented: false,
            id: 'FB_1'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FB_2'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FB_3'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'FB_4'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FB_5'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FB_6'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FB_7'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'FB_8'
          },
          {
            dataType: 'TextInput',
            indented: false,
            id: 'FB_9'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'FB_10'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FB_11'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FB_12'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'FB_13'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FB_14'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FB_15'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'FB_16'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FB_17'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FB_18'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'FB_19'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FB_20'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FB_21'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'FB_22'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FB_23'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FB_24'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'FB_25'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FB_26'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FB_27'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'FB_28'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FB_29'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FB_30'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'FB_31'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FB_32'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FB_33'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'FB_34'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FB_35'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'FB_36'
          }
        ]
      },
      {
        id: 'MC',
        title: 'null',
        data: [
          {
            dataType: 'Prompt',
            indented: false,
            id: 'MC_1'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'MC_2'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'MC_3'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'MC_4'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'MC_5'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'MC_6'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'MC_7'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'MC_8'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'MC_9'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'MC_10'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'MC_11'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'MC_12'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'MC_13'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'MC_14'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'MC_15'
          }
        ]
      },
      {
        id: 'VM',
        title: 'null',
        data: [
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VM_1'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VM_2'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VM_3'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VM_4'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'VM_5'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'VM_6'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'VM_7'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'VM_8'
          },
          {
            dataType: 'Checkbox',
            indented: true,
            id: 'VM_9'
          },
          {
            dataType: 'Checkbox',
            indented: true,
            id: 'VM_10'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'VM_11'
          },
          {
            dataType: 'Checkbox',
            indented: true,
            id: 'VM_12'
          },
          {
            dataType: 'Checkbox',
            indented: true,
            id: 'VM_13'
          },
          {
            dataType: 'Checkbox',
            indented: true,
            id: 'VM_14'
          },
          {
            dataType: 'Checkbox',
            indented: true,
            id: 'VM_15'
          },
          {
            dataType: 'Checkbox',
            indented: true,
            id: 'VM_16'
          },
          {
            dataType: 'Checkbox',
            indented: true,
            id: 'VM_17'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'VM_18'
          },
          {
            dataType: 'Checkbox',
            indented: true,
            id: 'VM_19'
          },
          {
            dataType: 'Checkbox',
            indented: true,
            id: 'VM_20'
          },
          {
            dataType: 'Checkbox',
            indented: true,
            id: 'VM_21'
          },
          {
            dataType: 'Checkbox',
            indented: true,
            id: 'VM_22'
          },
          {
            dataType: 'Checkbox',
            indented: true,
            id: 'VM_23'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'VM_24'
          },
          {
            dataType: 'Checkbox',
            indented: true,
            id: 'VM_25'
          },
          {
            dataType: 'Checkbox',
            indented: true,
            id: 'VM_26'
          },
          {
            dataType: 'Checkbox',
            indented: true,
            id: 'VM_27'
          },
          {
            dataType: 'Checkbox',
            indented: true,
            id: 'VM_28'
          },
          {
            dataType: 'Checkbox',
            indented: true,
            id: 'VM_29'
          },
          {
            dataType: 'Checkbox',
            indented: true,
            id: 'VM_30'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'VM_31'
          },
          {
            dataType: 'Checkbox',
            indented: true,
            id: 'VM_32'
          },
          {
            dataType: 'Checkbox',
            indented: true,
            id: 'VM_33'
          },
          {
            dataType: 'Checkbox',
            indented: true,
            id: 'VM_34'
          },
          {
            dataType: 'Checkbox',
            indented: true,
            id: 'VM_35'
          },
          {
            dataType: 'Checkbox',
            indented: true,
            id: 'VM_36'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VM_37'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VM_38'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VM_39'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VM_40'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VM_41'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VM_42'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VM_43'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VM_44'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VM_45'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VM_46'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VM_47'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VM_48'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VM_49'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VM_50'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VM_51'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VM_52'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VM_53'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VM_54'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VM_55'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VM_56'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VM_57'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VM_58'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VM_59'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VM_60'
          }
        ]
      },
      {
        id: 'VS',
        title: 'null',
        data: [
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VS_1'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VS_2'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VS_3'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VS_4'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VS_5'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VS_6'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VS_7'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VS_8'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VS_9'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VS_10'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VS_11'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VS_12'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VS_13'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VS_14'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VS_15'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VS_16'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VS_17'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VS_18'
          },
          {
            dataType: 'TextInput',
            indented: false,
            id: 'VS_19'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VS_20'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VS_21'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VS_22'
          }
        ]
      },
      {
        id: 'VDH',
        title: 'null',
        data: [
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VDH_1'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VDH_2'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VDH_3'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VDH_4'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VDH_5'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VDH_6'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VDH_7'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VDH_8'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VDH_9'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VDH_10'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VDH_11'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VDH_12'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VDH_13'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VDH_14'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VDH_15'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VDH_16'
          },
          {
            dataType: 'TextInput',
            indented: false,
            id: 'VDH_17'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VDH_18'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VDH_19'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VDH_20'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VDH_21'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VDH_22'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VDH_23'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VDH_24'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VDH_25'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VDH_26'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VDH_27'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'VDH_28'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'VDH_29'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'VDH_30'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'VDH_31'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VDH_32'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'VDH_33'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'VDH_34'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'VDH_35'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VDH_36'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VDH_37'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VDH_38'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VDH_39'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VDH_40'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VDH_41'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VDH_42'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VDH_43'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VDH_44'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VDH_45'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'VDH_46'
          },
          {
            dataType: 'Checkbox',
            indented: false,
            id: 'VDH_47'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VDH_48'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VDH_49'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VDH_50'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VDH_51'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VDH_52'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VDH_53'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VDH_54'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VDH_55'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VDH_56'
          },
          {
            dataType: 'Prompt',
            indented: false,
            id: 'VDH_57'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VDH_58'
          },
          {
            dataType: 'RadioButtons',
            indented: false,
            id: 'VDH_59'
          }
        ]
      }
    ];
  }
}
