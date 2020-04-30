import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './BakeriesSlider.scss'
import { CircularProgress } from '@material-ui/core'

class BakeriesSlider extends Component {
  state = { loading: false }
  componentDidUpdate(prevProps) {
    if (prevProps.data === this.props.data) {
      this.setState({ loading: true })
    }
  }

  renderItems = (arr) => {
    if (Array.isArray(arr)) {
      return arr.map((item, i) => {
        return (
          <div key={i}>
            <img src={`${item}`} alt="" />
          </div>
        )
      })
    }
  }
  render() {
    const { loading } = this.state
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    }
    const renderResult = loading ? (
      <Slider {...settings}>{this.renderItems(this.props.data)}</Slider>
    ) : (
      <CircularProgress />
    )
    return (
      <div>
        <h3>The best bakeries</h3>
        {renderResult}
      </div>
    )
  }
}
export default BakeriesSlider
