import React from 'react'
import './App.css'
import Bakeries from './components/Bakeries/BakeriesContainer'
import LocationsContainer from './components/Locations/LocationsContainer'

class App extends React.Component {
  script = async () => {
    const res = await fetch('http://api.dev.cakeiteasy.no/api/store/bakeries/?country_code=no')
    const response = await res.json()

    const scheduleAll = response.map(({ schedule }) => schedule)
    let newArr = []
   
    console.log(newArr)
  }
  render() {
    this.script()
    return (
      <div className="App">
        <Bakeries />
        <LocationsContainer />
      </div>
    )
  }
}

export default App
