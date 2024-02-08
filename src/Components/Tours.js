import './Tours.css'
import Card from './Card'

const Tours = ({tours, removeTour}) => {
  return (
    <div className='tours'>
      <div className="style-0">
        <h2 className="style-1">Plan With Love</h2>
      </div>
      <div>
        {
          tours.map(  tours => {
            return <Card {...tours} removeTour={removeTour} />
          } 
          )
        }
      </div>
    </div>
    
  )
}
export default Tours ;