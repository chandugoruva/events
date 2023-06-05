import './index.css'

const EventItem = props => {
  const {each, clickedEvent} = props
  const {id, imageUrl, name, location, registrationStatus} = each
  return (
    <li className="event-item">
      <button
        type="button"
        className="button"
        onClick={() => clickedEvent(registrationStatus)}
      >
        <img src={imageUrl} alt="event" className="img" />
      </button>
      <p className="name">{name}</p>
      <p className="location-name">{location}</p>
    </li>
  )
}
export default EventItem
