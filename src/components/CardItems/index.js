import {HiFire} from 'react-icons/hi'
import {FiRefreshCw} from 'react-icons/fi'
import {
  LiCard,
  CardTopSection,
  NameSection,
  CompanyTitle,
  PersonDetailSection,
  NameText,
  LiBugetType,
  IconDateSection,
  IconContainer,
  TextValue,
  PercentageSection,
  SpendSection,
  AvailableSection,
  DataValueSection,
  SpendValueSection,
  SpentPara,
  LiSpend,
  ValueContainer,
  AvailableValueSection,
  ColorRed,
  ColorGreen,
  CardButton,
} from './styledComponent'

import './index.css'

const CardItems = props => {
  const {EachCard} = props

  const {
    name,
    companyName,
    budgetName,

    spent,
    availableToSpend,
    cardType,
    expiry,
    limit,
  } = EachCard

  return (
    <LiCard>
      <CardTopSection>
        <NameSection>
          <CompanyTitle>{companyName}</CompanyTitle>
          <PersonDetailSection>
            <NameText>{name}</NameText>
            <LiBugetType>{budgetName}</LiBugetType>
          </PersonDetailSection>
          <CardButton>
            {cardType === 'burner' ? 'BURNER' : 'SUBSCRIPTION'}
          </CardButton>
        </NameSection>
        <IconDateSection>
          <IconContainer>
            {cardType === 'burner' ? (
              <HiFire className="card-icon" />
            ) : (
              <FiRefreshCw className="card-icon" />
            )}
          </IconContainer>
          {cardType === 'burner' ? (
            <TextValue>Expires: {expiry}</TextValue>
          ) : (
            <TextValue>limit: {limit} </TextValue>
          )}
        </IconDateSection>
      </CardTopSection>
      <PercentageSection>
        <SpendSection value={spent.value}>.</SpendSection>
        <AvailableSection value={availableToSpend.value}>.</AvailableSection>
      </PercentageSection>
      <DataValueSection>
        <SpendValueSection>
          <LiSpend>
            <ColorRed>.</ColorRed>
            <SpentPara>Spent</SpentPara>
          </LiSpend>
          <ValueContainer>
            {spent.value} {spent.currency}
          </ValueContainer>
        </SpendValueSection>
        <AvailableValueSection>
          <LiSpend>
            <ColorGreen>.</ColorGreen>
            <SpentPara>Available to Spend</SpentPara>
          </LiSpend>
          <ValueContainer>
            {availableToSpend.value} {availableToSpend.currency}
          </ValueContainer>
        </AvailableValueSection>
      </DataValueSection>
    </LiCard>
  )
}

export default CardItems
