import InsuranceContext from '../context/InsuranceProvider'
import { useContext } from 'react'

const useInsurance = () => {
   return useContext(InsuranceContext) 
}

export default useInsurance