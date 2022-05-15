import { InsuranceProvider } from './context/InsuranceProvider'
import AppInsurance from './components/AppInsurance'

const App = () => {
  return (
    <InsuranceProvider>
      <AppInsurance />
    </InsuranceProvider>
  )
}

export default App
