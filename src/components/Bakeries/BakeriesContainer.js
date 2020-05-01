import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import * as actions from '../../store/modules/bakers'
import { connect } from 'react-redux'
import deepEqual from 'deep-equal'
import BakeriesSlider from './BakeriesSlider'
import BakeriesAdvantages from './BakeriesAdvantages'

class BakeriesContainer extends Component {
  state = {
    data: [],
  }
  componentDidMount() {
    this.props.getBakeriesAsync()
  }
  componentDidUpdate(prevProps) {
    if (!deepEqual(prevProps.bakeries, this.props.bakeries)) {
      this.setState(() => ({ data: this.handlerGetImages(this.props.bakeries) }))
    }
  }
  handlerGetImages = (bakeriesList) => {
    return bakeriesList
      .filter(({ picture }) => typeof picture == 'number')
      .map(({ picture }) => {
        return this.handlerGetUrlImg(picture)
      })
  }

  handlerGetUrlImg(id) {
    return `http://api.dev.cakeiteasy.no/api/store/images/${id}/?size=small_url&compress_type=webp`
  }

  render() {
    const { data } = this.state
    return (
      <>
        <BakeriesSlider data={data} />
        <BakeriesAdvantages />
      </>
    )
  }
}

const mapState = ({ bakers }) => {
  const { bakeries } = bakers
  return { bakeries }
}
const mapDispatch = (dispatch) => {
  const { getBakeriesAsync } = bindActionCreators(actions, dispatch)
  return { getBakeriesAsync }
}

export default connect(mapState, mapDispatch)(BakeriesContainer)
