import { Image, Message, UnavailableContainer } from "./Unavailable.style"
import upset1 from '../../../../assets/images/upset/1.gif'
import upset2 from '../../../../assets/images/upset/2.gif'
import upset3 from '../../../../assets/images/upset/3.gif'

const Unavailable: React.FC = () => {
  const randomImage = () => {
    const images = [upset1, upset2, upset3]
    const num = Math.floor(Math.random() * 3)
    return images[num]
  }
  return (
    <UnavailableContainer>
      <Message>Forecast Unavailable</Message>
      <Image src={randomImage()} />
    </UnavailableContainer>
  )
}

export default Unavailable
