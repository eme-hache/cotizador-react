import { getYearDiff, calculateBrand, calculatePlan, formatCurrency } from '../helpers'
import { createContext, useState } from 'react'

const InsuranceContext = createContext()

const InsuranceProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState(0)
    const [error, setError] = useState('')
    const [data, setData] = useState({
        brand: '',
        year: '',
        plan: ''
    })
    
    const handleOnChange = evt => {
        setData({
            ...data,
            [evt.target.name]: evt.target.value
        })
    }

    const quoteInsurance = () => {
        setLoading(true)

        // Base price
        let result = 2000
        const { brand, year, plan } = data

        // Get the difference between the current year and the selected year
        const diff = getYearDiff(year)
        
        // Substract 3% per year of difference
        result -= ((diff * 3) * result) / 100

        // Americano 15%
        // Europeo 30%
        // Asiatico 5%
        result *= calculateBrand(brand)
        
        // Basic Plan 20%
        // Complete Plan 50%
        result *= calculatePlan(plan)
        
        // Format the result
        result = formatCurrency(result)

        setTimeout(() => {
            setResult(result)
            setLoading(false)
        }, 3000);
    }

    return (
        <InsuranceContext.Provider
            value={{
                data,
                error,
                result,
                loading,
                setError,
                handleOnChange,
                quoteInsurance
            }}
        >
            {children}
        </InsuranceContext.Provider>
    )
}

export {
    InsuranceProvider
}

export default InsuranceContext