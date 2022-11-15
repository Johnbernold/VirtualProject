import {Component} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import {AllPageSection, CardDisplaySection} from './styledComponent'

import Header from '../Header'
import FilterPage from '../FilterPage'
import CardItems from '../CardItems'

class BlockedPage extends Component {
  state = {
    optionsState: 'Select Cardholder',
    searchShow: false,
    searchValue: '',
    checkBoxSub: '',
    checkBoxBur: '',
    items: [],
    isMore: true,
    page: 2,
    finalSub: '',
    finalBur: '',
    dropDowm: '',
  }

  componentDidMount() {
    this.getApiCall()
  }

  gettingSpentValue = valueItems => ({
    value: valueItems.value,
    currency: valueItems.currency,
  })

  getApiCall = async () => {
    const response = await fetch(
      'https://63725255078587786190f3cb.mockapi.io/card?page=1&limit=10',
    )

    const data = await response.json()
    console.log(response)
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
      this.setState({items: dataList})
    }
  }

  ChangeSearch = value => {
    this.setState({searchValue: value})
  }

  ChangeSubscription = value => {
    const {checkBoxSub} = this.state

    if (checkBoxSub === '') {
      this.setState({checkBoxSub: value})
    } else {
      this.setState({checkBoxSub: ''})
    }
  }

  ChangeBurner = value => {
    const {checkBoxBur} = this.state
    if (checkBoxBur === '') {
      this.setState({checkBoxBur: value})
    } else {
      this.setState({checkBoxBur: ''})
    }
  }

  changeSearchInput = () => {
    this.setState(prevState => ({searchShow: !prevState.searchShow}))
  }

  ChangeCardholder = value => {
    this.setState({optionsState: value})
  }

  submitValue = () => {
    const {optionsState, checkBoxSub, checkBoxBur} = this.state

    this.setState({
      finalSub: checkBoxSub,
      finalBur: checkBoxBur,
      dropDowm: optionsState,
    })
  }

  onClickClearButton = () => {
    this.setState({
      finalSub: '',
      finalBur: '',
      dropDowm: '',
    })
  }

  fetchNewData = async () => {
    const {page} = this.state
    const response = await fetch(
      `https://63725255078587786190f3cb.mockapi.io/card?page=${page}&limit=10`,
    )

    const data = await response.json()

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

    return dataList
  }

  fetchMoreData = async () => {
    const moreData = await this.fetchNewData()

    console.log(moreData)

    this.setState(prevState => ({
      items: [...prevState.items, ...moreData],
      page: prevState.page + 1,
    }))

    if (moreData.length === 0 || moreData.length < 10) {
      this.setState({isMore: false})
    }
  }

  render() {
    const {
      optionsState,
      searchValue,
      searchShow,
      finalSub,
      finalBur,
      dropDowm,
      items,
      isMore,
    } = this.state

    console.log(items)

    const onlyBlockedCards = items.filter(
      eachCard => eachCard.status === 'inactive',
    )

    let finalFilter

    if (finalBur !== '' && finalSub === '') {
      finalFilter = onlyBlockedCards.filter(
        eachList => eachList.cardType === finalBur,
      )
    } else if (finalBur === '' && finalSub !== '') {
      finalFilter = onlyBlockedCards.filter(
        eachList => eachList.cardType === finalSub,
      )
    } else {
      finalFilter = onlyBlockedCards
    }

    let dropDownValue

    if (dropDowm !== '') {
      dropDownValue = finalFilter.filter(
        eachList => eachList.budgetName === dropDowm,
      )
    } else {
      dropDownValue = finalFilter
    }

    const searchResults = dropDownValue.filter(eachUser =>
      eachUser.name.includes(searchValue),
    )

    console.log(searchResults)

    return (
      <AllPageSection>
        <Header />
        <FilterPage
          searchShowValue={searchShow}
          searchValueData={searchValue}
          optionsStateData={optionsState}
          submitValue={this.submitValue}
          ChangeCardholder={this.ChangeCardholder}
          changeSearchInput={this.changeSearchInput}
          ChangeBurner={this.ChangeBurner}
          ChangeSearch={this.ChangeSearch}
          ChangeSubscription={this.ChangeSubscription}
          onClickClearButton={this.onClickClearButton}
        />

        <InfiniteScroll
          dataLength={items.length}
          next={this.fetchMoreData}
          hasMore={isMore}
          loader={<h4>Loading...</h4>}
        >
          <CardDisplaySection>
            {searchResults.map(eachValue => (
              <CardItems key={eachValue.ownerId} EachCard={eachValue} />
            ))}
          </CardDisplaySection>
        </InfiniteScroll>
      </AllPageSection>
    )
  }
}

export default BlockedPage
