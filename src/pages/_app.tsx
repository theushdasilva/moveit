import { ChallengesProvider } from '../Contexts/ChallengesContexts'
import '../Styles/globol.css'


function MyApp({ Component, pageProps }) {
  return(
    <ChallengesProvider>
          <Component {...pageProps} /> 
    </ChallengesProvider>
    )
    
}

export default MyApp
