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
          <div key={i} style={{ margin: 10 + 'px' }}>
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
      className: 'bakeries-slider',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    }
    const renderResult = loading ? (
      <Slider {...settings}>{this.renderItems(this.props.data)}</Slider>
    ) : (
      <CircularProgress />
    )
    return (
      <div className="s-bakeries">
        <h3 className="bakeries-title">The best bakeries</h3>
        <div className="bakeries-slider-wrap"> {renderResult}</div>
      </div>
    )
  }
}
export default BakeriesSlider
