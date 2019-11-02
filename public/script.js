const searchElement = document.querySelector('[data-city-search]')
const searchBox = new google.maps.places.SearchBox(searchElement)
searchBox.addListener('places_changed', () => {
  const place = searchBox.getPlaces()[0]
  if (place == null) return
  const latitude = place.geometry.location.lat()
  const longitude = place.geometry.location.lng()
  fetch('/weather', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      latitude: latitude,
      longitude: longitude
    })
  }).then(res => res.json()).then(data => {
    setWeatherData(data, place.formatted_address)
  })
})

const icon = new Skycons({color: '#222'})
const locationElement = document.querySelector('[data-status]')
const windElement = document.querySelector('[data-wind]')
const humidityElement = document.querySelector('[data-humidity]')
const dewElement = document.querySelector('[data-dew]')
const temperatureElement = document.querySelector('[data-temperature]')
const precipitationElement = document.querySelector('[data-precipitation]')
const bearingElement = document.querySelector('[data-bearing]')

function setWeatherData(data, place) {
  locationElement.textContent = data.summary
  temperatureElement.textContent = data.temperature
  windElement.textContent = data.windSpeed
  bearingElement.textContent = data.windBearing
  dewElement.textContent = data.dewPoint
  precipitationElement.textContent = data.precipProbability
  icon.set('icon', data.icon)
  icon.play()
}

