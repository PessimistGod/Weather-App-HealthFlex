import React from 'react'
import Cloud from './Cloud'
import Rain from './Rain'
import Moon from './Moon'
import Sun from './Sun'

const WeatherIcon = ({cloudCover,precipitationProbability,isNight}) => {
  return (
    cloudCover >= 80 ? (
      <Cloud />
    ) :
    precipitationProbability > 0 ? (
      <Rain />
    ) : isNight ? (
      <Moon fill={"#FFFFFF"} />
    ) : (
      <Sun />
    )
  )
}

export default WeatherIcon