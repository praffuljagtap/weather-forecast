import { useEffect, useState } from "react"
import Forecast from "../../interfaces/forecast"
import { OpenWeatherAPIType } from "../../services/OpenWeather"

type ForecastPageType = {
  openWeatherAPI: OpenWeatherAPIType
}

const ForecastPage: React.FC<ForecastPageType> = ({ openWeatherAPI }) => {
  const [location, setLocation] = useState<string>('paris')
  const [forecast, setForecast] = useState<Forecast| null>(null)

  const getForecast = () => {
    const forecast: Promise<Forecast> = openWeatherAPI.getForecastByLocation(location)
    forecast
      .then((forecastInfo: Forecast) => {
        setForecast(forecastInfo)
        console.log(forecastInfo)
      })
      .catch(error => {
        setForecast(null)
        console.error(error)
      })
  }

  useEffect(() => {
    getForecast()
  }, [location])
  
  return !!forecast ? <p>Forecast available</p>: <p>Forecast Unavailable</p>
}

export default ForecastPage
