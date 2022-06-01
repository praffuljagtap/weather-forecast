import Forecast, { DailyForecast } from "../../../../interfaces/forecast"
import ForecastCard from "../ForecastCard/ForecastCard"
import { CardList, ForecastDisplayContainer, LatLongText, LocationText } from "./ForecastDisplay.style"

type ForecastDisplayType = {
  forecast?: Forecast
}

const ForecastDisplay: React.FC<ForecastDisplayType> = ({ forecast }) => {
  if (!forecast) return null
  const { city, list } = forecast || {}
  const { name, country, coord } = city || {}
  const { lat, lon } = coord || {}
  return (
    <ForecastDisplayContainer>
      <LocationText>{name}, {country}</LocationText>
      <LatLongText>Lat <b>{lat.toString()}</b>&#176; Long <b>{lon.toString()}</b>&#176;</LatLongText>
      <CardList>
        {!!list && list.map((dailyForecast: DailyForecast, index: number) => {
          return <ForecastCard key={index} dailyForecast={dailyForecast} />
        })}
      </CardList>
    </ForecastDisplayContainer>
  )
}

export default ForecastDisplay
