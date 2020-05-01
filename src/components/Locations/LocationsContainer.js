import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import * as actions from '../../store/modules/bakers'
import { connect } from 'react-redux'
import deepEqual from 'deep-equal'
import Location from './Location'

class LocationsContainer extends Component {
  maxItemInColumn = 5
  state = {
    data: {},
    imagesList: [],
  }

  componentDidMount() {
    this.props.getCitiesAsync()
  }

  componentDidUpdate(prevProps) {
    if (!deepEqual(prevProps.cities, this.props.cities)) {
      this.setState(() => ({ data: this.handlerGetCityList(this.props.cities) }))
    }
  }
  handlerGetCityList = (citiesList) => {
    return citiesList.map(({ name }) => name)
  }

  render() {
    const { data } = this.state
    return <Location data={data} maxItemInColumn={this.maxItemInColumn} />
  }
}

const mapState = ({ bakers }) => {
  const { cities } = bakers
  return { cities }
}
const mapDispatch = (dispatch) => {
  const { getCitiesAsync } = bindActionCreators(actions, dispatch)
  return {
    getCitiesAsync,
  }
}

export default connect(mapState, mapDispatch)(LocationsContainer)
