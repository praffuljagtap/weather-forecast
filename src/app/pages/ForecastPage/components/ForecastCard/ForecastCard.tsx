import { DailyForecast } from "../../../../interfaces/forecast"
import convertToDate from "../../../../utils/date"
import { DateTime, DateTimeContainer, ForecastCardContainer, Temperature, WeatherContainer, WeatherDetails, WeatherIcon } from "./ForecastCard.style"

type ForecastCardType = {
  dailyForecast: DailyForecast
}

const ForecastCard: React.FC<ForecastCardType> = ({ dailyForecast }) => {
  const { dt_txt, weather, main } = dailyForecast || {}
  const { id, description } = weather[0] || {}
  const { temp_max, temp_min } = main || {}

  const date = convertToDate(dt_txt).toDateString()
  const time = convertToDate(dt_txt).toLocaleTimeString()
  const iconClass = `wi wi-owm-${id}`
  
  return (
    <ForecastCardContainer>
      <DateTimeContainer>
        <DateTime>{date}</DateTime>
        <DateTime>{time}</DateTime>
      </DateTimeContainer>
      <WeatherContainer>
        <WeatherIcon className={iconClass} />
        <Temperature>{temp_max.toFixed(1).toString()} / {temp_min.toFixed(1).toString()}&#176; C</Temperature>
      </WeatherContainer>
      <WeatherDetails>{description}</WeatherDetails>
    </ForecastCardContainer>
  )
}

export default ForecastCard
