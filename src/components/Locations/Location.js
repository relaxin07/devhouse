import React, { Component } from 'react'
import './location.scss'

class Location extends Component {
  state = { data: [] }
  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({ data: this.prepareData(this.props.data) })
    }
  }
  prepareData = (data) => {
    if (!Array.isArray(data)) {
      return false
    }
    let { maxItemInColumn } = this.props
    let result = []
    data.map((item, i) => {
      if (i === 0) {
        result.push(data.slice(i, i + maxItemInColumn))
      } else if (i % maxItemInColumn === 0) {
        result.push(data.slice(i, i + maxItemInColumn))
      }
    })

    return result
  }
  renderData = (data) => {
    if (data.length < 1) {
      return false
    }
    return data.map((item, i) => {
      return (
        <div key={i} className="location__items">
          {item.map((itemChild, i) => {
            return (
              <div key={i} className="location__item">
                {itemChild}
              </div>
            )
          })}
        </div>
      )
    })
  }
  render() {
    const { data } = this.state
    const renderResult = this.renderData(data)
    return (
      <div className="s-location">
        <h2 className="location-title">Our most popular location</h2>
        <div className="location">{renderResult}</div>
      </div>
    )
  }
}

export default Location
