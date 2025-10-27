import "./index.css"
import { useState, useEffect } from "react"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import image5 from "../../assets/image5.png"
import image6 from "../../assets/image6.png"
import image7 from "../../assets/image7.png"
import image8 from "../../assets/image8.png"
import image9 from "../../assets/image9.png"
import image10 from "../../assets/image10.png"
import image11 from "../../assets/image11.png"
import image12 from "../../assets/image12.png"
import image13 from "../../assets/image13.png"
import image14 from "../../assets/image14.png"
import image15 from "../../assets/image15.png"
import image16 from "../../assets/image16.png"
import image17 from "../../assets/image17.png"
import image18 from "../../assets/image18.png"
import pixCode from "../../assets/pix/pix1.png"
import nubankLogo from "../../assets/nubanklogo.png"
import { pixKeys } from "../../assets/pix/pixkeys"
import copyIcon from "../../assets/copypaste.svg"
import checkIcon from "../../assets/check.svg"

const GiftList = () => {
  const [selectedGift, setSelectedGift] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)

  const handleBuyClick = (giftId: number) => {
    setSelectedGift(giftId)
    setCopied(false)
  }

  const closePixSection = () => {
    setSelectedGift(null)
    setCopied(false)
  }

  const handleCopyPixCode = (giftId: number) => {
    const pixKey = `pix${giftId}` as keyof typeof pixKeys
    const code = pixKeys[pixKey]

    if (code) {
      navigator.clipboard.writeText(code)
      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    }
  }

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePixSection()
      }
    }

    if (selectedGift) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [selectedGift])

  const giftItems = [
    {
      id: 1,
      image: image1,
      title: "",
      description: "Taxa para a noiva não jogar o buquê para sua namorada",
      price: "R$ 211,00",
      store: "Magazine Luiza",
    },
    {
      id: 2,
      image: image2,
      title: "",
      description: "Kit de pedido de desculpas para depois de uma DR",
      price: "R$ 287,00",
      store: "Casas Bahia",
    },
    {
      id: 3,
      image: image3,
      title: "",
      description: "Taxa para despachar a mala da noiva na lua de mel",
      price: "R$ 354,00",
      store: "Americanas",
    },
    {
      id: 4,
      image: image4,
      title: "",
      description: "Ajuda para a primeira compra de supermercado do casal",
      price: "R$ 441,00",
      store: "Magazine Luiza",
    },
    {
      id: 5,
      image: image5,
      title: "",
      description:
        "Uma caixa de rojão para soltar quando a noiva assumir que está errada",
      price: "R$ 529,00",
      store: "Casas Bahia",
    },
    {
      id: 6,
      image: image6,
      title: "",
      description: "Viagem de lua de mel dos noivos",
      price: "R$ 642,00",
      store: "Americanas",
    },
    {
      id: 7,
      image: image7,
      title: "",
      description: "Aluguel da limousine para entrada da noiva",
      price: "R$ 783,00",
      store: "Magazine Luiza",
    },
    {
      id: 8,
      image: image8,
      title: "",
      description: "Tapa ouvidos para a noiva aguentar o ronco do noivo",
      price: "R$ 954,00",
      store: "Casas Bahia",
    },
    {
      id: 9,
      image: image9,
      title: "",
      description: "Cadeado reforçado para a porta da sala gamer do noivo",
      price: "R$ 1.187,00",
      store: "Americanas",
    },
    {
      id: 10,
      image: image10,
      title: "",
      description:
        "Chinelo da razão, quem estiver com ele, tem razão. (só cabe no pé da noiva)",
      price: "R$ 1.456,00",
      store: "Magazine Luiza",
    },
    {
      id: 11,
      image: image11,
      title: "",
      description: "Manual de como entender a noiva",
      price: "R$ 1.773,00",
      store: "Casas Bahia",
    },
    {
      id: 12,
      image: image12,
      title: "",
      description: "Dinheiro pro noivo comprar um eletrodoméstico misterioso",
      price: "R$ 2.168,00",
      store: "Americanas",
    },
    {
      id: 13,
      image: image13,
      title: "",
      description: "Make da noiva",
      price: "R$ 2.645,00",
      store: "Magazine Luiza",
    },
    {
      id: 14,
      image: image14,
      title: "",
      description: "Ajuda para viagem de lua de mel dos noivos",
      price: "R$ 3.228,00",
      store: "Casas Bahia",
    },
    {
      id: 15,
      image: image15,
      title: "",
      description: "SPA para a noiva (por tempo indeterminado)",
      price: "R$ 3.938,00",
      store: "Americanas",
    },
    {
      id: 16,
      image: image16,
      title: "",
      description:
        "Utensílio de cozinha com dupla finalidade. (Amassar pão ou acalmar o noivo)",
      price: "R$ 4.006,00",
      store: "Americanas",
    },
    {
      id: 17,
      image: image17,
      title: "",
      description: "Segurança residencial especializado",
      price: "R$ 4.167,00",
      store: "Americanas",
    },
    {
      id: 18,
      image: image18,
      title: "",
      description: "Pra não dizer que não dei nada",
      price: "Você escolhe",
      store: "Americanas",
    },
  ]

  return (
    <div className="gift-list-container">
      <div className="gift-list-content">
        <h2 className="gift-list-title">Lista de Presentes</h2>
        <p className="gift-list-subtitle">
          Escolha um presente especial para nós
        </p>

        {selectedGift && (
          <div className="pix-modal-overlay">
            <div className="pix-modal-content">
              <button className="pix-close-button" onClick={closePixSection}>
                ×
              </button>

              <div className="pix-logo-container">
                <img src={nubankLogo} alt="Nubank" className="pix-logo" />
              </div>

              <p className="pix-transfer-text">
                Transfira{" "}
                {giftItems.find((item) => item.id === selectedGift)?.price} para
                Mariana Sophia Apparício
              </p>

              <p className="pix-instruction-title">
                Use o QR Code do Pix para pagar
              </p>

              <p className="pix-instruction-text">
                Abra o app em que vai fazer a transferência, escaneie a imagem
                ou cole o código do QR Code
              </p>

              <div className="pix-code-container">
                <img
                  src={pixCode}
                  alt="Código PIX"
                  className="pix-code-image"
                />
              </div>

              <p className="pix-price-value">
                {giftItems.find((item) => item.id === selectedGift)?.price}
              </p>

              <button
                className="pix-copy-button"
                onClick={() => handleCopyPixCode(selectedGift)}
              >
                {copied ? (
                  <>
                    COPIADO
                    <img src={checkIcon} alt="Copied" className="pix-icon" />
                  </>
                ) : (
                  <>
                    COPIAR CÓDIGO DO QR CODE
                    <img src={copyIcon} alt="Copy" className="pix-icon" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        <div className="gift-grid">
          {giftItems.map((item) => (
            <div key={item.id} className="gift-card">
              <div className="gift-card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="gift-card-content">
                <p className="gift-card-description">{item.description}</p>
                <div className="gift-card-details">
                  <span className="gift-card-price">{item.price}</span>
                </div>
                <button
                  className="gift-card-button"
                  onClick={() => handleBuyClick(item.id)}
                >
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="gift-list-note">
          <p>
            <em>
              "As melhores coisas da vida não são coisas. As melhores coisas da
              vida são as pessoas que amamos, os lugares por onde passamos, e as
              memórias que criamos juntos ao longo do caminho."
            </em>
          </p>
        </div>
      </div>
    </div>
  )
}

export default GiftList
