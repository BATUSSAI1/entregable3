import './style/LocationCard.css'

const LocationCard = ({ location }) => {



  return (
    <article className='dimension'>
      <h2 className='dimension__name'>{location?.name}</h2>
      <ul className='dimension__list'>
        <li className='dimension__type'>
          <span className='dimension__item'>Type</span>
          <span className='dimension__label'> {location?.type}</span>
        </li>
        <li className='dimension__type'>
          <span className='dimension__item'>Dimension</span>
          <span className='dimension__label'> {location?.dimension}</span>
        </li>
        <li className='dimension__type'>
          <span className='dimension__item'>Population</span>
          <span className='dimension__label'> {location?.residents.length}</span>
        </li>
      </ul>
    </article>
  )
}

export default LocationCard