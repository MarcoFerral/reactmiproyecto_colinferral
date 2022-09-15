import { FavsProvider } from "./components/Context/FavsContext"
import RickandMortyContainer from "./components/RickandMorty/RickandMortyContainer"

const RMortyApp = () => {
  return (
    <div>
        <FavsProvider>
          <RickandMortyContainer/>
        </FavsProvider>
    </div>
  )
}
export default RMortyApp