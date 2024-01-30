import './index.css'

const EventItem = props => {
  const {listItem, onChangeStatus} = props
  const {imageUrl, name, location, registrationStatus} = listItem

  const changeStatus = () => {
    onChangeStatus(registrationStatus)
  }

  return (
    <li className="list-cont">
      <button type="button" className="btn" onClick={changeStatus}>
        <img src={imageUrl} alt="event" className="event-img" />
      </button>
      <p className="head">{name}</p>
      <p className="para">{location}</p>
    </li>
  )
}
export default EventItem
