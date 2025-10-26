import "./index.css"

const Ceremony = () => {
  return (
    <div className="ceremony-container">
      <div className="ceremony-content">
        <h2 className="ceremony-title">Local da Cerimônia</h2>
        <p className="ceremony-description">
          Nosso casamento será realizado no quiosque do clube Penapolense, um
          lugar aconchegante e charmoso, local que marcará o ínicio da nossa
          nova jornada juntos.
        </p>
      </div>

      <div className="ceremony-images">
        <div className="ceremony-image-container">
          <div className="ceremony-image ceremony-image-front"></div>
          <p className="ceremony-image-caption">Frente do Quiosque</p>
        </div>

        <div className="ceremony-image-container">
          <div className="ceremony-image ceremony-image-side"></div>
          <p className="ceremony-image-caption">Vista interna</p>
        </div>
      </div>

      <div className="ceremony-map-container">
        <h3 className="ceremony-map-title">Como Chegar</h3>
        <div className="ceremony-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1857.0786668219614!2d-50.081062!3d-21.42306!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949601683adb5c43%3A0xfde500ecb1db5013!2sClube%20Penapolense!5e0!3m2!1spt-BR!2sbr!4v1761179558565!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Ceremony
