import styled from 'styled-components'

export const ForecastCardContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0px 0px 5px -2px gray;
  display: flex;
  flex-direction: row;
  padding: 15px;
  gap: 20px;
`

export const DateTimeContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const DateTime = styled.span`
  font-size: 12px;
  font-weight: 600;
`

export const WeatherContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`
export const WeatherIcon = styled.i`
  font-size: 30px;
`

export const Temperature = styled.span`
  font-size: 13px;
`

export const WeatherDetails = styled.p`
  flex: 1;
  text-align: right;
  font-size: 12px;
  font-weight: 300;
`
