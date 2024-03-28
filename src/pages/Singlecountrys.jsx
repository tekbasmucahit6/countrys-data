import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loadings from '../component/Loadings'
import Country from '../component/Country'
import Header from '../component/Header'

function Singlecountrys() {
    // header tarafındaki parametrelerin alınması
    const params = useParams()
    const [loading,setLoading] = useState(false)
    const [apiData,setApiData] = useState([])
    // ! parametreye göre ülkenin bilgilerinin çekilmesi
    useEffect(() => {
        const countryFunc = async() => {
                setLoading(true)
            const {data} = await axios.get(`https://restcountries.com/v3.1/name/${params.countryName}`)
            console.log(data)
            setApiData(data)
            setLoading(false)
        }
        countryFunc()
    },[])

    console.log(apiData)

    return (
        loading ? <Loadings />:
        <>
        <Header />
        <div>
            {
                apiData.map((dt,i) => (
                    <Country countryName={dt.name.official} countryPopulation={dt.population} countryFlag={dt.flags.png} key={i}/>
                    ))
                }
      </div>
    </>
  )
}

export default Singlecountrys
