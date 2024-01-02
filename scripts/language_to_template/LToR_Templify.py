"""
Used to Templify Left to Right Languages.

The Lines to Modify:
    
"""
import os.path
import json
import codecs

#Variables that are language specific
LtoR_Text = 'French_Text'
Language = "French"

def Combine_Langs(Eng_List, LtoR_List):
    combined = []
    for entry in Eng_List:
        for entryy in LtoR_List:
            if entry.get('ID') == entryy.get('ID'):
                combined_entry = {}
                combined_entry['Eng_Text'] = entry.get('Text')
                combined_entry[LtoR_Text] = entryy.get('Text')
                combined.append(combined_entry)
    
    return combined

def Create_Template(Comb_List, Eng_Template):
    LtoR_Template = {}
    LtoR_Template['language'] = Language
    LtoR_Sections= []
    From_Sections = Eng_Template.get('Sections')
    for entry in From_Sections:
        LtoR_Section = {}
        LtoR_Section['id'] = entry.copy().get('Section_ID')
        for comb_entry in Comb_List:
            if comb_entry.copy().get('Eng_Text') == entry.copy().get('Title'):
                LtoR_Section['title'] = comb_entry.copy().get(LtoR_Text)
        LtoR_Data_List = []
        for data in entry.get('Data'):
            data_entry = {}
            for comb_entry in Comb_List:
                if comb_entry.copy().get('Eng_Text') == data.get('Text'):
                    data_entry['text'] = comb_entry.copy().get(LtoR_Text)
                    #data_entry['Sub_ID'] = data.get('Sub_ID')
            LtoR_Data_List.append(data_entry)
        LtoR_Section['data'] = LtoR_Data_List
        LtoR_Sections.append(LtoR_Section)
    
    LtoR_Template['sections'] = LtoR_Sections
    return LtoR_Template

def Fix_Empty(LtoR_Template):
    for entry in LtoR_Template.get('sections'):
        for data in entry.get('data'):
            if not data:
                data_entry = {}
                data_entry['text'] = ""
                data.update(data_entry)
                
    return LtoR_Template

def Rearrange(LtoR_Template):
    index = 0
    index_list = []
    for entry in LtoR_Template.get('sections'):
        if entry.get('id') == "ATB":
            LtoR_Template['about'] = entry
            index_list.append(index)
        if entry.get('id') == "D":
            LtoR_Template['disclaimer'] = entry
            index_list.append(index)
        if entry.get('id') == "PI":
            LtoR_Template['instructions'] = entry
            index_list.append(index)
        index += 1
    
    index_list.reverse()
    for index in index_list:
        del LtoR_Template.get('sections')[index]
    
    hold_list = LtoR_Template.copy().get('sections')
    del LtoR_Template['sections']
    LtoR_Template['sections'] = hold_list
    return LtoR_Template

if __name__ == '__main__':
#Pull Final English JSON file
    #build path for english file
    base_path = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

    #build path for JSON extraction
    json_loc = base_path + '/scripts/isolate_language/Manual_Eng_Finish.json'
    
    #Open the Json file, and then load it
    with codecs.open(json_loc, 'r', encoding='utf-8') as data_file:
        Eng = json.load(data_file)
        
#Pull Final English JSON file
    #build path for english file
    base_path = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

    #build path for JSON extraction
    json_loc = base_path + '/scripts/isolate_language/Eng_Template.json'
    
    #Open the Json file, and then load it
    with codecs.open(json_loc, 'r', encoding='utf-8') as data_file:
        Eng_Template = json.load(data_file)
        
#Export Final Version Template JSON file
    #build path for english file
    base_path = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

    #build path for JSON extraction
    json_loc = base_path + '/scripts/isolate_language/French_NonTemplified.json'
    
    #Open the Json file, and then load it
    with codecs.open(json_loc, 'r', encoding='utf-8') as data_file:
        LtoR = json.load(data_file)
        
    combined_list = Combine_Langs(Eng, LtoR)
    LtoR_Template = Create_Template(combined_list, Eng_Template)
    LtoR_Template = Fix_Empty(LtoR_Template)
    Rearrange(LtoR_Template)
    
    with open('French_Template.json', 'w', encoding = 'utf-8') as jsonFile:
        json.dump(LtoR_Template, jsonFile, ensure_ascii = False)
    jsonFile.close()