import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {statusItem} = props
  switch (statusItem) {
    case 'NoActiveEvent':
      return (
        <div className="cont">
          <p className="para1">
            Click on an event, to view its registration details
          </p>
        </div>
      )

    case 'REGISTERED':
      return (
        <div className="cont1">
          <img
            className="success"
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
          />
          <h1 className="heading1">
            You have already registered for the event
          </h1>
        </div>
      )
    case 'YET_TO_REGISTER':
      return (
        <div className="cont1">
          <img
            className="yet-to-register"
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            alt="yet to register"
          />
          <p className="para2">
            A live performance brings so much to your relationship with dance.
            Seeing the dance live can after make you fall totally in the love
            with this beautiful art form.
          </p>
          <button type="button" className="btn1">
            Register Here
          </button>
        </div>
      )
    case 'REGISTRATIONS_CLOSED':
      return (
        <div className="cont1">
          <img
            className="registration-closed"
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
            alt="registrations closed"
          />
          <h1 className="heading1">Registrations Are Closed Now!</h1>
          <p className="para2">
            Stay tuned. We will reopen the registrations soon!
          </p>
        </div>
      )

    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
