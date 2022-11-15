import {Component} from 'react'

import {AllPageSection, CardDisplaySection} from './styledComponent'

import Header from '../Header'
import FilterPage from '../FilterPage'
import CardItems from '../CardItems'

class YourPage extends Component {
  state = {
    selectedData: [],
  }

  componentDidMount() {
    this.getApiCall()
  }

  gettingSpentValue = items => ({
    value: items.value,
    currency: items.currency,
  })

  getApiCall = async () => {
    const response = await fetch(
      'https://63725255078587786190f3cb.mockapi.io/card',
    )

    const data = await response.json()

    if (response.ok === true) {
      const dataList = data.map(eachObject => ({
        name: eachObject.name,
        companyName: eachObject.company_name,
        budgetName: eachObject.budget_name,
        ownerId: eachObject.owner_id,
        spent: this.gettingSpentValue(eachObject.spent),
        availableToSpend: this.gettingSpentValue(eachObject.available_to_spend),
        cardType: eachObject.card_type,
        expiry: eachObject.expiry,
        limit: eachObject.limit,
        status: eachObject.status,
        id: eachObject.id,
      }))
      this.setState({selectedData: dataList})
    }
  }

  render() {
    const {selectedData} = this.state

    const ownerId = 71119

    const resultList = selectedData.filter(each => each.ownerId === ownerId)

    return (
      <AllPageSection>
        <Header />
        <FilterPage />

        <CardDisplaySection>
          {resultList.map(eachValue => (
            <CardItems key={eachValue.ownerId} EachCard={eachValue} />
          ))}
        </CardDisplaySection>
      </AllPageSection>
    )
  }
}

export default YourPage
