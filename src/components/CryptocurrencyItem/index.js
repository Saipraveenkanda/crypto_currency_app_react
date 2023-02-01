import './index.css'

const CryptoCurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyName, currencyLogo, usdValue, euroValue} = cryptoDetails

  return (
    <li className="crypto-list-item">
      <div className="logo-name-card">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="name">{currencyName}</p>
      </div>
      <div className="values-card">
        <p className="value">{usdValue}</p>
        <p className="value">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptoCurrencyItem
