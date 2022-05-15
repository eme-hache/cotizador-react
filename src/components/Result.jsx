import useInsurance from '../hooks/useInsurance'
import { BRANDS, PLAN } from '../constants'
import { useCallback, useRef } from 'react'

const Result = () => {
    const { result, data } = useInsurance()
    const { brand, year, plan } = data
    const yearRef = useRef(year)

    const [ filteredBrand ] = useCallback(BRANDS.filter(b => b.id === Number(brand)), [result])
    const [ filteredPlan ] = useCallback(PLAN.filter(p => p.id === Number(plan)), [result])

    if (result === 0) return null

    return (
        <div className='bg-gray-100 text-center mt-10 p-5 shadow'>
            <h2 className='text-gray-600 text-3xl font-black'>
                Resumen
            </h2>

            <p className='my-2'>
                <span className='font-bold'>Marca: </span>
                {filteredBrand.name}
            </p>

            <p className='my-2'>
                <span className='font-bold'>Plan: </span>
                {filteredPlan.name}
            </p>

            <p className='my-2'>
                <span className='font-bold'>Año: </span>
                {yearRef.current}
            </p>

            <p className='my-2 text-2xl'>
                <span className='font-bold'>Total Cotización: </span>
                {result}
            </p>
        </div>
    )
}

export default Result