import Popup from 'reactjs-popup'

import {AiOutlineSearch} from 'react-icons/ai'
import {BiFilter} from 'react-icons/bi'

import './index.css'

import {
  FilterMainSection,
  FilterIconSection,
  SearchButton,
  FilterButton,
  FilterOptionSection,
  HeadingFilter,
  TypeText,
  CheckBoxSection,
  SeperateCheckbox,
  SelectText,
  OptionText,
  FilterApplySection,
  ApplyButton,
  InputCheckBox,
  ClearButton,
  LabelValue,
  InputSearch,
} from './styledComponent'

const FilterPage = props => {
  const {
    searchValueData,

    submitValue,
    ChangeCardholder,
    changeSearchInput,
    ChangeSearch,
    ChangeSubscription,
    ChangeBurner,
    searchShowValue,
  } = props

  const onChangeSearch = event => {
    ChangeSearch(event.target.value)
  }

  const onChangeSubscription = event => {
    ChangeSubscription(event.target.value)
  }

  const onChangeBurner = event => {
    ChangeBurner(event.target.value)
  }

  const searchButton = () => {
    changeSearchInput()
  }

  const onChangeCardholder = event => {
    ChangeCardholder(event.target.value)
  }

  const onSubmitButton = () => {
    submitValue()
  }

  return (
    <FilterMainSection>
      <FilterIconSection>
        {searchShowValue && (
          <InputSearch
            type="search"
            placeholder="Search"
            value={searchValueData}
            onChange={onChangeSearch}
          />
        )}
        <SearchButton onClick={searchButton} type="button">
          <AiOutlineSearch className="search-icon" />
        </SearchButton>
        <Popup
          trigger={
            <FilterButton>
              <BiFilter />
              Filter
            </FilterButton>
          }
          position="bottom right"
        >
          <FilterOptionSection>
            <HeadingFilter>Filter</HeadingFilter>

            <TypeText>Type</TypeText>
            <CheckBoxSection>
              <SeperateCheckbox>
                <InputCheckBox
                  type="checkbox"
                  value="subscription"
                  onChange={onChangeSubscription}
                />
                <LabelValue>Subscription</LabelValue>
              </SeperateCheckbox>
              <SeperateCheckbox>
                <InputCheckBox
                  type="checkbox"
                  value="burner"
                  onChange={onChangeBurner}
                />
                <LabelValue>Burner</LabelValue>
              </SeperateCheckbox>
            </CheckBoxSection>
            <TypeText>Cardholder</TypeText>
            <SelectText onChange={onChangeCardholder} value="Select Cardholder">
              <OptionText value="Credit Card Account">Credit Card</OptionText>
              <OptionText value="Money Market Account">
                Money Market Card
              </OptionText>
              <OptionText value="Personal Loan Account">
                Personal Loan Card
              </OptionText>
              <OptionText value="Auto Loan Account">Auto Loan Card</OptionText>
              <OptionText value="Checking Account">
                Checking Account Card
              </OptionText>
              <OptionText value="Savings Account">
                Savings Account Card
              </OptionText>
            </SelectText>
            <FilterApplySection>
              <ApplyButton onClick={onSubmitButton} type="button">
                Apply
              </ApplyButton>
              <ClearButton type="button">ClearButton</ClearButton>
            </FilterApplySection>
          </FilterOptionSection>
        </Popup>
      </FilterIconSection>
    </FilterMainSection>
  )
}

export default FilterPage
