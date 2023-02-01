import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptoCurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoList: [], isLoading: true}

  componentDidMount() {
    this.getCryptosList()
  }

  getCryptosList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({cryptoList: updatedData, isLoading: false})
  }

  render() {
    const {cryptoList, isLoading} = this.state
    return (
      <div className="main-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />{' '}
          </div>
        ) : (
          <div className="crypto-list-container">
            <h1 className="crypto-heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="bg-logo"
            />
            <div className="crypto-table">
              <div className="table-heading-card">
                <p className="table-heading-text">Coin Type</p>
                <div className="country-names">
                  <p className="table-heading-text">USD</p>
                  <p className="table-heading-text">EURO</p>
                </div>
              </div>
              <ul className="cryptos-list-container">
                {cryptoList.map(eachItem => (
                  <CryptoCurrencyItem
                    cryptoDetails={eachItem}
                    key={eachItem.currencyName}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
