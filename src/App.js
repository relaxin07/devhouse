import React from 'react'
import './App.css'
import Bakeries from './components/Bakeries/BakeriesContainer'
import LocationsContainer from './components/Locations/LocationsContainer'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Bakeries />
        <LocationsContainer />
      </div>
    )
  }
}

export default App
