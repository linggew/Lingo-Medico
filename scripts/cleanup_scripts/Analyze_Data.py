"""
Use to count the number of entries within each data, as well as the empty texts

The Lines to Modify:
    
"""
import os.path
import json
import codecs

def Cycle_Through(Template):
    ####About Section
    about_dict = Template.copy().get('about')
    total = 0
    empty = 0
    for entry in about_dict.copy().get('data'):
        total = total + 1
        if not entry.get('text'):
            empty = empty + 1
            
    print('About section has ', total, ' entries, ', empty, ' of which are empty.')
    
    ####Disclaimer Section
    disc_dict = Template.copy().get('disclaimer')
    total = 0
    empty = 0
    for entry in disc_dict.copy().get('data'):
        total = total + 1
        if not entry.get('text'):
            empty = empty + 1
            
    print('Disc section has ', total, ' entries, ', empty, ' of which are empty.')
    
    ####Instructions Section
    inst_dict = Template.copy().get('instructions')
    total = 0
    empty = 0
    for entry in inst_dict.copy().get('data'):
        total = total + 1
        if not entry.get('text'):
            empty = empty + 1
            
    print('Inst section has ', total, ' entries, ', empty, ' of which are empty.')
    
    ####Step through sections
    sections = Template.copy().get('sections')
    for ind_sec in sections:
        title = ind_sec.copy().get('id')
        total = 0
        empty = 0
        for entry in ind_sec.copy().get('data'):
            total = total + 1
            if not entry.get('text'):
                empty = empty + 1
                
        print(title, ' section has ', total, ' entries, ', empty, ' of which are empty.')
    
    
if __name__ == '__main__':
    
#Pull the Template
    #build path for english file
    base_path = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

    #build path for JSON extraction
    json_loc = base_path + '/scripts/cleanup_scripts/English_Template_Finished.json'
    
    #Open the Json file, and then load it
    with codecs.open(json_loc, 'r', encoding='utf-8') as data_file:
        Template = json.load(data_file)
        
    Cycle_Through(Template)    