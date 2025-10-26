import "./index.css"

const PresenceConfirmation = () => {
  return (
    <div className="presence-confirmation-container">
      {/* <h1 className="presence-confirmation-title">Confirm Your Presence</h1>
      <p className="presence-confirmation-subtitle">
        Please let us know you'll be joining us
      </p> */}

      {/* Google Forms embed */}
      <div className="google-form-container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSd5DYzbR0BwJNq_UufZ2xfEp5_rZK6tZx3B_L0jVKVCZ1gflQ/viewform?embedded=true"
          width="100%"
          height="600"
          frameBorder="0"
          //@ts-ignore
          marginHeight="0"
          //@ts-ignore
          marginWidth="0"
        >
          Carregando…
        </iframe>
      </div>
    </div>
  )
}

export default PresenceConfirmation
