import React from 'react';
import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import CountryList from '../../constants/countries.json';
import {
  GlobalColor,
  DropDownStyles,
  DropdownBKColor,
  DropdownTextColor
} from '../../constants/GlobalStyles';

type Props = {
  isMultiple: boolean;
  setUp: boolean;
  id?: string;
  value: string | string[];
  selector?: string;
  onChange?(id: string, value: string, selector: string): void;
  onChange2?(value: string): void;
  editable?: boolean;
};

/**
 * This component is a dropdown that contains all the countries. The drop down
 * can either allow for multiple selections or a single selection. The multiple
 * dropdown will list each country as badges. The single will just display the
 * selected country. The dropdowns are searchable.
 *
 * Note: Parameters are messy and the component needs a rework.
 *
 * @param IsMultiple Boolean flag to return a drop down with only one country
 * selection or multiple country selections.
 * @returns If IsMultiple is true, return a DropDowmPicker with props that
 * allow for picking multiple countries. If IsMultiple is false, drop down will
 * only allow one country selection.
 */
export default function CountryDropdown({
  isMultiple,
  setUp,
  id,
  value,
  selector,
  onChange,
  onChange2,
  editable
}: Props) {
  //Using hooks for drop down data.
  const [open, setOpen] = useState(false);
  const items = CountryList;
  DropDownPicker.setListMode('SCROLLVIEW');

  if (isMultiple) {
    const [pvalue, setPValue] = useState(Array.isArray(value) ? value : []);

    return (
      <DropDownPicker
        open={open}
        value={pvalue}
        items={items}
        setOpen={setOpen}
        setValue={setPValue}
        style={[
          DropDownStyles.dropdown,
          GlobalColor().TextInputColor,
          { backgroundColor: DropdownBKColor() }
        ]}
        searchable={true}
        placeholder="Select multiple countries"
        containerStyle={DropDownStyles.container}
        multiple={true}
        mode="BADGE"
        disabled={!editable}
        showBadgeDot={false}
        extendableBadgeContainer={true}
        badgeProps={{ disabled: true }}
        onChangeValue={(item) => {
          const temp = item?.join(',');
          onChange?.(id ? id : '', temp ? temp : '', selector ? selector : '');
        }}
        listItemLabelStyle={{
          color: DropdownTextColor()
        }}
        listItemContainerStyle={{
          backgroundColor: DropdownBKColor()
        }}
        selectedItemLabelStyle={{
          fontWeight: 'bold'
        }}
        selectedItemContainerStyle={{
          backgroundColor: 'blue'
        }}
        textStyle={{
          color: DropdownTextColor(),
          backgroundColor: DropdownBKColor()
        }}
        searchContainerStyle={{
          backgroundColor: DropdownBKColor()
        }}
        searchPlaceholderTextColor={DropdownTextColor()}
        searchTextInputStyle={{
          color: DropdownTextColor()
        }}
        showArrowIcon={true}
      />
    );
  } else {
    const [pvalue, setPValue] = useState(
      typeof value === 'string' ? value : ''
    );

    return (
      <DropDownPicker
        open={open}
        value={pvalue}
        items={items}
        setOpen={setOpen}
        setValue={setPValue}
        style={[
          DropDownStyles.dropdown,
          GlobalColor().TextInputColor,
          { backgroundColor: DropdownBKColor() }
        ]}
        autoScroll={true}
        closeAfterSelecting={true}
        searchable={true}
        placeholder="Select a country"
        containerStyle={DropDownStyles.container}
        disabled={!editable}
        onChangeValue={(item) => {
          setUp
            ? onChange2?.(item ? item : '')
            : onChange?.(
                id ? id : '',
                item ? item : '',
                selector ? selector : ''
              );
        }}
        listItemLabelStyle={{
          color: DropdownTextColor()
        }}
        listItemContainerStyle={{
          backgroundColor: DropdownBKColor()
        }}
        selectedItemLabelStyle={{
          fontWeight: 'bold'
        }}
        selectedItemContainerStyle={{
          backgroundColor: 'blue'
        }}
        textStyle={{
          color: DropdownTextColor()
        }}
        searchContainerStyle={{
          backgroundColor: DropdownBKColor()
        }}
        searchPlaceholderTextColor={DropdownTextColor()}
        searchTextInputStyle={{
          color: DropdownTextColor()
        }}
        showArrowIcon={true}
      />
    );
  }
}
