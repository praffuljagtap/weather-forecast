interface Weather {
  id: Number
  main: String
  description: String
  icon: String // Use this for showing icons
}

interface Main {
  temp: Number
  feels_like: Number
  temp_min: Number
  temp_max: Number
  pressure: Number
  humidity: Number
  sea_level: Number
  grnd_level: Number
  temp_kf: Number
}

interface Wind {
  speed: Number
  deg: Number
  gust: Number
}

interface Clouds {
  all: Number
}

interface Sys {
  pod: String
}

interface DailyForecast {
  dt: Number
  main: Main
  weather: Weather[]
  clouds: Clouds
  wind: Wind
  visibility: Number
  pop: Number
  sys: Sys
  dt_txt: String
}

interface Forecast {
  cod: String
  cnt?: Number
  message: String
  list?: DailyForecast[]
}

export default Forecast
