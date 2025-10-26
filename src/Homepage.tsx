import {
  Countdown,
  BigPicture,
  Parallax,
  AboutUs,
  ParallaxTwo,
  Ceremony,
  GiftList,
  PresenceConfirmation,
} from "./components"

const Homepage = () => {
  return (
    <div>
      <BigPicture />
      <Countdown />
      <AboutUs />
      <Parallax />
      <Ceremony />
      <ParallaxTwo />
      <GiftList />
      <PresenceConfirmation />
    </div>
  )
}

export default Homepage
