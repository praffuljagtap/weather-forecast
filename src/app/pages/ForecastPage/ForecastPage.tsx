import React, { useEffect, useState } from "react"
import Forecast from "../../interfaces/forecast"
import { OpenWeatherAPIType } from "../../services/OpenWeather"
import ForecastDisplay from "./components/ForecastDisplay/ForecastDisplay"
import Location from "./components/Location/Location"
import Unavailable from "./components/Unavailable/Unavailable"
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
  const [forecast, setForecast] = useState<Forecast>()

  const getForecast = () => {
    const forecast: Promise<Forecast> = openWeatherAPI.getForecastByLocation(location)
    forecast
      .then((forecastInfo: Forecast) => setForecast(forecastInfo))
      .catch(error => {
        setForecast(undefined)
        console.error(error)
      })
  }

  useEffect(() => {
    let timer: any;
    if (location.length > 0) timer = setInterval(getForecast, 200)
    return () => clearInterval(timer)
  }, [getForecast, location])
  
  return (
    <ForecastPageContainer>
      <Title>Forecast every 3 hours</Title>
      <ContentContainers>
        <Location
          location={location}
          setLocation={(newLoc: string) => setLocation(newLoc)}
        />
        {
          !!forecast
            ? <ForecastDisplay forecast={forecast} />
            : <Unavailable />
        }
      </ContentContainers>
    </ForecastPageContainer>
  )
}

export default ForecastPage
