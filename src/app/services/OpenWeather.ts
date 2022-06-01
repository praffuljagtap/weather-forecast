import { DAYS } from "../constants"
import Forecast from "../interfaces/forecast"
import HttpResponseHandler from "../utils/httpResponseHandler"

export type OpenWeatherAPIType = {
  getForecastByLocation: (location: string) => Promise<Forecast>
}

export type OpenWeatherAPIServiceType = {
  getInstance: () => OpenWeatherAPIType
}

const OpenWeatherAPI = (): OpenWeatherAPIType => {
  try {
    const BASE_URL: string = 'https://api.openweathermap.org/data/2.5/forecast'
    const APP_ID: string = process.env.REACT_APP_OPEN_WEATHER_MAP_API || ''

    const getForecastByLocation = (location: string): Promise<Forecast> => {
      return fetch(`${BASE_URL}?${new URLSearchParams({
        q: location || '',
        cnt: DAYS.toString(),
        appId: APP_ID
      })}`)
      .then((response: Response) => {
        const httpStatus = HttpResponseHandler(response) // Doesn't do much but it ideally should
        if (httpStatus) return response.json()
        throw Error('Invalid API Call')
      })
      .catch((errorMessage) => { throw Error(errorMessage) })
    }
    return { getForecastByLocation }
  } catch (_) {
    throw Error('Error while using OpernWeatherAPI')
  }
}

const OpenWeatherAPIService: OpenWeatherAPIServiceType = (() => {
  let instance: OpenWeatherAPIType;
  const createInstance = () => instance = OpenWeatherAPI()

  return {
    getInstance: (): OpenWeatherAPIType => {
      if (!instance) instance = createInstance()
      return instance
    }
  }
})()

export default OpenWeatherAPIService
