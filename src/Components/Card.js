import './Card.css'
import { useState } from 'react';

const Card = ({id, name, info, price, image, removeTour}) => {

  const [readmore,setReadmore] = useState(false);
  
  const description = readmore ? info : `${info.substring(0,200)}....`
  
  const readmoreHandler = () => {
    setReadmore(!readmore);
  }

  return (
    <div className="card">
      <img src={image} className='image' alt=''/>
      <div className='tour-details'>
          <h4 className='tour-price'>
            {price}
          </h4>
          <h4 className='tour-name'>
            {name}
          </h4>
          <div className='description'>
            {description}
            <span className='read-more' onClick={readmoreHandler}>
              {readmore ? 'show less' : 'read more'}
            </span>
          </div>
          <button className='btn' onClick={() => removeTour(id)}>
            Not interested  
          </button>
      </div>
    </div>
  )
}

export default Card;