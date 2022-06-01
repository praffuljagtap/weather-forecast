import throttleFunction from "../../../../utils/throttle"
import { Input, LocationContainer } from "./Location.style"

type LocationType = {
  location: string
  setLocation: (newLocation: string) => void
}

const Location: React.FC<LocationType> = ({ location, setLocation }) => {
  let throttle: boolean = false;
  const updateLocation = (event: any) => {
    const newVal: string = event.target.value
    if (newVal !== location) setLocation(newVal)
  }
  return (
    <LocationContainer>
      <Input
        placeholder="Enter a location..."
        onKeyDown={(event) => throttleFunction(throttle, () => updateLocation(event), 1000)}
      />
    </LocationContainer>
  )
}

export default Location
