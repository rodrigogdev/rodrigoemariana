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

const GiftList = () => {
  const [selectedGift, setSelectedGift] = useState<number | null>(null)

  const handleBuyClick = (giftId: number) => {
    setSelectedGift(giftId)
  }

  const closePixSection = () => {
    setSelectedGift(null)
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
      price: "R$ 152,74",
      store: "Magazine Luiza",
    },
    {
      id: 2,
      image: image2,
      title: "",
      description: "Kit de pedido de desculpas para depois de uma DR",
      price: "R$ 247,32",
      store: "Casas Bahia",
    },
    {
      id: 3,
      image: image3,
      title: "",
      description: "Taxa para despachar a mala da noiva na lua de mel",
      price: "R$ 377,12",
      store: "Americanas",
    },
    {
      id: 4,
      image: image4,
      title: "",
      description: "Ajuda para a primeira compra de supermercado do casal",
      price: "R$ 544,92",
      store: "Magazine Luiza",
    },
    {
      id: 5,
      image: image5,
      title: "",
      description:
        "Uma caixa de rojão para soltar quando a noiva assumir que está errada",
      price: "R$ 891,76",
      store: "Casas Bahia",
    },
    {
      id: 6,
      image: image6,
      title: "",
      description: "Viagem de lua de mel dos noivos",
      price: "R$ 1.359,04",
      store: "Americanas",
    },
    {
      id: 7,
      image: image7,
      title: "",
      description: "Aluguel da limousine para entrada da noiva",
      price: "R$ 2.031,68",
      store: "Magazine Luiza",
    },
    {
      id: 8,
      image: image8,
      title: "",
      description: "Tapa ouvidos para a noiva aguentar o ronco do noivo",
      price: "R$ 3.074,40",
      store: "Casas Bahia",
    },
    {
      id: 9,
      image: image9,
      title: "",
      description: "Cadeado reforçado para a porta da sala gamer do noivo",
      price: "R$ 4.754,80",
      store: "Americanas",
    },
    {
      id: 10,
      image: image10,
      title: "",
      description:
        "Chinelo da razão, quem estiver com ele, tem razão. (só cabe no pé da noiva)",
      price: "R$ 5.119,60",
      store: "Magazine Luiza",
    },
    {
      id: 11,
      image: image11,
      title: "",
      description: "Manual de como entender a noiva",
      price: "R$ 5.829,44",
      store: "Casas Bahia",
    },
    {
      id: 12,
      image: image12,
      title: "",
      description: "Dinheiro pro noivo comprar um eletrodoméstico misterioso",
      price: "R$ 6.849,28",
      store: "Americanas",
    },
    {
      id: 13,
      image: image13,
      title: "",
      description: "Make da noiva",
      price: "R$ 7.073,60",
      store: "Magazine Luiza",
    },
    {
      id: 14,
      image: image14,
      title: "",
      description: "Ajuda para viagem de lua de mel dos noivos",
      price: "R$ 7.588,80",
      store: "Casas Bahia",
    },
    {
      id: 15,
      image: image15,
      title: "",
      description: "SPA para a noiva (por tempo indeterminado)",
      price: "R$ 7.898,40",
      store: "Americanas",
    },
    {
      id: 16,
      image: image16,
      title: "",
      description:
        "Utensílio de cozinha com dupla finalidade. (Amassar pão ou acalmar o noivo)",
      price: "R$ 8.577,60",
      store: "Americanas",
    },
    {
      id: 17,
      image: image17,
      title: "",
      description: "Segurança residencial especializado",
      price: "R$ 8.856,40",
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
          <div className="pix-modal-overlay" onClick={closePixSection}>
            <div className="pix-modal" onClick={(e) => e.stopPropagation()}>
              <div className="pix-header">
                <h3 className="pix-title">Código PIX para Pagamento</h3>
                <button className="pix-close" onClick={closePixSection}>
                  ×
                </button>
              </div>
              <div className="pix-content">
                <div className="pix-code-container">
                  <img
                    src={pixCode}
                    alt="Código PIX"
                    className="pix-code-image"
                  />
                </div>
                <p className="pix-instructions">
                  Use o app do seu banco para escanear o código PIX e finalizar
                  o pagamento
                </p>
              </div>
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
              "The best things in life aren't things. The best things in life
              are the people we love, the places we've been, and the memories
              we've made along the way."
            </em>
          </p>
        </div>
      </div>
    </div>
  )
}

export default GiftList
