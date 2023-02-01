import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptoCurrencyTracker extends Component {
  render() {
    return (
      <div className="app-container">
        <CryptocurrenciesList />
      </div>
    )
  }
}
export default CryptoCurrencyTracker
