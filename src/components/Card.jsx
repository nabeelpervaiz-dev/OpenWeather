import React from 'react'

const Card = ({Data}) => {


 return (
  <div className="Content rounded-2xl bg-white p-6 shadow-lg sm:p-8">

    {/* Location */}
    <div className="flex items-center gap-2">
      <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
      <p className="text-sm font-medium text-gray-500">
        {Data.name}, {Data.sys.country}
      </p>
    </div>

    {/* Temperature */}
    <div className="mt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-7xl font-bold tracking-tight text-gray-900 sm:text-8xl">
          {(Data.main.temp).toFixed(2)}
          <span className="text-4xl font-medium text-gray-500"> °C</span>
        </h2>

        {/* Weather Icon */}
        <div className="flex h-28 w-28 items-center justify-center">
          <img
            src={`https://openweathermap.org/img/wn/${Data.weather[0].icon}@2x.png`}
            alt="Weather icon"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <div className="mt-3">
        <p className="text-xl font-semibold capitalize text-gray-800">
          {Data.weather[0].description}
        </p>
        <p className="mt-1 text-sm text-gray-500">
          Feels like {(Data.main.feels_like ).toFixed(2)}
        </p>
      </div>
    </div>

    {/* Weather Details */}
    <div className="mt-8 grid grid-cols-2 gap-y-6 border-t border-gray-200 pt-6 sm:grid-cols-4">

      <div className="sm:border-r sm:border-gray-200 sm:pr-4">
        <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
          Humidity
        </p>
        <h3 className="mt-2 text-2xl font-bold text-gray-800">
          {Data.main.humidity}%
        </h3>
      </div>

      <div className="sm:border-r sm:border-gray-200 sm:pl-4 sm:pr-4">
        <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
          Wind
        </p>
        <h3 className="mt-2 text-2xl font-bold text-gray-800">
          {Data.wind.speed}
        </h3>
        <p className="mt-1 text-xs text-gray-400">km/h</p>
      </div>

      <div className="sm:border-r sm:border-gray-200 sm:pl-4 sm:pr-4">
        <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
          Visibility
        </p>
        <h3 className="mt-2 text-2xl font-bold text-gray-800">
          {Data.visibility / 1000} km
        </h3>
      </div>

      <div className="sm:pl-4">
        <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
          Pressure
        </p>
        <h3 className="mt-2 text-2xl font-bold text-gray-800">
          {Data.main.pressure}
        </h3>
        <p className="mt-1 text-xs text-gray-400">hPa</p>
      </div>

    </div>
  </div>
)
}

export default Card