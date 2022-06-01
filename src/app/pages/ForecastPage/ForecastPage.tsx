import React, { useEffect, useState } from "react"
import { DAYS } from "../../constants"
import Forecast from "../../interfaces/forecast"
import { OpenWeatherAPIType } from "../../services/OpenWeather"
import ForecastDisplay from "./components/ForecastDisplay/ForecastDisplay"
import Location from "./components/Location/Location"
import {
  ContentContainers,
  ForecastPageContainer,
  Title,
} from "./ForecastPage.style"

type ForecastPageType = {
  openWeatherAPI: OpenWeatherAPIType
}

const ForecastPage: React.FC<ForecastPageType> = ({ openWeatherAPI }) => {
  const [location, setLocation] = useState<string>('')
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
    if (location.length > 0) getForecast()
  }, [location])
  
  return (
    <ForecastPageContainer>
      <Title>Forecast for {DAYS.toString()} days</Title>
      {!!forecast ? <p>Forecast available</p>: <p>Forecast Unavailable</p>}
      <ContentContainers>
        <Location
          location={location}
          setLocation={(newLoc: string) => setLocation(newLoc)}
        />
        <ForecastDisplay />
      </ContentContainers>
    </ForecastPageContainer>
  )
}

export default ForecastPage
