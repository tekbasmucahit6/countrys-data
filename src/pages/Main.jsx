import React from 'react'
import Header from '../component/Header'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import Loadings from '../component/Loadings'
import Country from '../component/Country'
function Main() {


    // ! çekilen ülke verilerinin tutulacak olan state'i
    const [countrys,setCountrys] = useState([])

    // ! loading animasyonu için state tanımlaması
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        // ! axios ile api üzerinden ülke verilerinin çekilmesi
        const dataFunc = async() => {
            setLoading(true)
            const {data} = await axios.get("https://restcountries.com/v3.1/all")
            setLoading(false)
            console.log(data)
            setCountrys(data)
        }
        // yazdığımız dataFunc fonksiyonunun çağırılması
        dataFunc()
    },[])

  return (
    <div >
      <Header/>

      <div className='flex container mx-auto mt-10'>
        {
        loading? <Loadings /> :
        <div className='flex justify-center items-center'>
            <div className='grid lg:grid-cols-3 gap-3 md:grid-cols-2 sm:grid-cols-1'>
                {
                    countrys.map((ct,i) => (
                        <Country countryName={ct.name.official} countryPopulation={ct.population} countryFlag={ct.flags.png} key={i}/>
                    ))
                }
            </div>
        </div>
        }
      </div>

    </div>
  )
}

export default Main
