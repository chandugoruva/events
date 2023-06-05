import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {eventDetails} = props

  switch (eventDetails) {
    case 'YET_TO_REGISTER':
      return (
        <div className="yet-to-register">
          <div className="yet-to-register">
            <img
              src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
              alt="yet to register"
              className="yet-to-register-img"
            />

            <p className="yet-to-register-paragraph">
              A live performance brings so much to your relationship with dance.
              Seeing dance live can often make you fall totally in love with
              this beautiful art form.
            </p>
            <button type="button" className="registration-button">
              Register Here
            </button>
          </div>
        </div>
      )

    case 'REGISTERED':
      return (
        <div className="registered">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
            className="registered-img"
          />
          <h1 className="registration-closed-heading">
            You have already registered for the event
          </h1>
        </div>
      )

    case 'REGISTRATIONS_CLOSED':
      return (
        <div className="registration-closed">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            alt="registrations closed"
            className="registration-closed-img"
          />
          <h1 className="registered-heading">Registrations Are Closed Now!</h1>
          <p className="registrations-closed-paragraph">
            Stay tuned. We will reopen
          </p>
        </div>
      )

    default:
      return null
  }
}
export default ActiveEventRegistrationDetails
