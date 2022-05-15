import { BRANDS, YEARS, PLAN } from '../constants'
import useInsurance from '../hooks/useInsurance'
import { Fragment } from 'react'
import Error from './Error'

const Form = () => {
    const { data, error, setError, handleOnChange, quoteInsurance } = useInsurance()

    const handleSubmit = evt => {
        evt.preventDefault()
        
        if (Object.values(data).includes('')) {
            setError('Todos los campos son obligatorios')
            return
        }

        setError('')
        quoteInsurance()
    }

    return (
        <Fragment>
            {error && <Error />}

            <form onSubmit={handleSubmit}>
                <div className='my-5'>
                    <label
                        htmlFor="brand"
                        className='block mb-3 font-bold text-gray-400 uppercase'
                    >
                        Marca
                    </label>
                    <select
                        name="brand"
                        id="brand"
                        className='w-full p-3 bg-white border border-gray-200'
                        onChange={handleOnChange}
                        value={data.brand}
                    >
                        <option value="">-- Selecciona Marca --</option>
                        {BRANDS.map(brand => (
                            <option
                                key={brand.id}
                                value={brand.id}
                            >
                                {brand.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='my-5'>
                    <label
                        htmlFor="year"
                        className='block mb-3 font-bold text-gray-400 uppercase'
                    >
                        Año
                    </label>
                    <select
                        name="year"
                        id="year"
                        className='w-full p-3 bg-white border border-gray-200'
                        onChange={handleOnChange}
                        value={data.year}
                    >
                        <option value="">-- Selecciona Año --</option>
                        {YEARS.map(year => (
                            <option
                                key={year}
                                value={year}
                            >
                                {year}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='my-5'>
                    <label
                        htmlFor="plan"
                        className='block mb-3 font-bold text-gray-400 uppercase'
                    >
                        Elige un Plan
                    </label>
                    <div className='flex gap-3 items-center'>
                        {PLAN.map(plan => (
                            <Fragment key={plan.id}>
                                <label>
                                    {plan.name}
                                </label>

                                <input
                                    type="radio"
                                    name="plan"
                                    value={plan.id}
                                    onChange={handleOnChange}
                                />
                            </Fragment>
                        ))}
                    </div>
                </div>

                <input 
                    type="submit"
                    className='mt-6 w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold'
                    value="Cotizar"
                />
            </form>
        </Fragment>
    )
}

export default Form