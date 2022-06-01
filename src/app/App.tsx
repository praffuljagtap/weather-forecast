import { ForecastPage } from './pages'
import OpenWeatherAPIService, { OpenWeatherAPIType } from './services/OpenWeather'
import './App.css'

const App: React.FC = () =>  {
  const openWeatherAPI: OpenWeatherAPIType = OpenWeatherAPIService.getInstance()
  return <ForecastPage openWeatherAPI={openWeatherAPI} />
}

export default App
