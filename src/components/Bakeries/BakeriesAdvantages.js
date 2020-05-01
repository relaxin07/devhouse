import React from 'react'
import './BakeriesAdvantages.scss'

const BakeriesAdvantages = () => {
  return (
    <div className="advantages">
      <div className="advantages__item">
        <div className="advantages__img">
          <img src="http://pngimg.com/uploads/chef/chef_PNG130.png" alt="" />
        </div>
        <div className="advantages__descrp">Hand made by local bakeries</div>
      </div>
      <div className="advantages__item">
        <div className="advantages__img">
          <img src="http://pngimg.com/uploads/chef/chef_PNG130.png" alt="" />
        </div>
        <div className="advantages__descrp">Same price as from bakery - but simpler</div>
      </div>
      <div className="advantages__item">
        <div className="advantages__img">
          <img src="http://pngimg.com/uploads/chef/chef_PNG130.png" alt="" />
        </div>
        <div className="advantages__descrp">Send cakes anywhere</div>
      </div>
    </div>
  )
}

export default BakeriesAdvantages
