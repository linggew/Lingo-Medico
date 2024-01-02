"""
Used to Clear extra spaces.

The Lines to Modify:
    
"""
import os.path
import json
import codecs

def Remove_Spaces(og_template):
    modified_template = {}
    
    #Take language
    modified_template['language'] = og_template.copy().get('language')
    
    ######################################
    #Step through about - dict
    about_dict = og_template.copy().get('about')
    new_about_dict = {}
    new_about_dict['id'] = about_dict.copy().get('id')
    about_dict_data_list = []
    for entry in about_dict.copy().get('data'):
        data = entry.get('text')
        
        if data:
            if data[0] == " ":
                data = data[1:]
            
            if data[-1] == " ":
                data = data[:-1]
            
        data_entry = {}
        data_entry['text'] = data
        about_dict_data_list.append(data_entry)
    
    new_about_dict['data'] = about_dict_data_list    
    modified_template['about'] = new_about_dict
    
    ######################################
    #Step through disclaimer - dict
    disc_dict = og_template.copy().get('disclaimer')
    new_disc_dict = {}
    new_disc_dict['id'] = disc_dict.copy().get('id')
    disc_dict_data_list = []
    for entry in disc_dict.copy().get('data'):
        data = entry.get('text')
        
        if data:
            if data[0] == " ":
                data = data[1:]
            
            if data[-1] == " ":
                data = data[:-1]
            
        data_entry = {}
        data_entry['text'] = data
        disc_dict_data_list.append(data_entry)
    
    new_disc_dict['data'] = disc_dict_data_list     
    modified_template['disclaimer'] = disc_dict
    
    ######################################
    #Step through instructions - dict
    inst_dict = og_template.copy().get('instructions')
    new_inst_dict = {}
    new_inst_dict['id'] = inst_dict.copy().get('id')
    inst_dict_data_list = []
    for entry in inst_dict.copy().get('data'):
        data = entry.get('text')
        
        if data:
            if data[0] == " ":
                data = data[1:]
            
            if data[-1] == " ":
                data = data[:-1]
            
        data_entry = {}
        data_entry['text'] = data
        inst_dict_data_list.append(data_entry)
    
    new_inst_dict['data'] = inst_dict_data_list
    modified_template['instructions'] = inst_dict
    
    ######################################
    #Step through sections - list
    sections = og_template.copy().get('sections')
    modified_sections = []
    for ind_sec in sections:
        section_dict = {}
        
        section_dict['id'] = ind_sec.copy().get('id')
        hold = ind_sec.copy().get('title')
        if hold:
            if hold[0] == " ":
                hold = hold[1:]
            
            if hold[-1] == " ":
                hold = hold[:-1]
            
        section_dict['title'] = hold
        section_data_list = []
        for entry in ind_sec.copy().get('data'):
            section_ind_data = {}
            data = entry.get('text')
            
            if data:
                if data[0] == " ":
                    data = data[1:]
                    
                if data[-1] == " ":
                    data = data[:-1]
                    
            section_ind_data['text'] = data           
            section_data_list.append(section_ind_data)
        section_dict['data'] = section_data_list
        modified_sections.append(section_dict)
    
    modified_template['sections'] = modified_sections
    
    return modified_template

if __name__ == '__main__':
    
#Pull the Template
    #build path for english file
    base_path = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

    #build path for JSON extraction
    json_loc = base_path + '/scripts/language_to_template/French_Template.json'
    #Open the Json file, and then load it
    with codecs.open(json_loc, 'r', encoding='utf-8') as data_file:
        Original_Template = json.load(data_file)
        
    Original_Template_Modified = Remove_Spaces(Original_Template)
        
#Export the Template
    #build path for english file
    base_path = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

    with open('French_Template_Finished.json', 'w', encoding = 'utf-8') as jsonFile:
        json.dump(Original_Template_Modified, jsonFile, ensure_ascii = False)
    jsonFile.close()