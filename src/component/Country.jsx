import React from 'react'
import {useNavigate} from "react-router-dom"

function Country({countryFlag,countryPopulation,countryName,i}) {
    const navigate = useNavigate()
  return (
    <div>
      <div className='flex  rounded-xl max-h-60 min-h-60 w-full gap-5 p-10  justify-center items-center' key={i}>
            
            <div className='grid grid-cols-2 justify-center items-center gap-10'>

                <div>
                    <img className='max-w-40 max-h-30 min-h-30 border border-gray-500 rounded-lg' src={countryFlag} alt="" />
                </div>

                <div className='grid grid-rows-3 justify-center items-center'>
                    <div>
                        <strong>ülke: </strong>
                        {countryName}
                    </div>
                    <div>
                        <strong>nüfus: </strong>
                        {countryPopulation}
                    </div>
                    
                    <div>
                        <button onClick={() => navigate(`/country/${countryName}`)} className='bg-blue-600 p-2 rounded-lg text-center hover:bg-blue-800 text-white transition-colors hover:animate-pulse'>Daha fazlası</button>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Country
