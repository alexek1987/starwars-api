import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import {
  Iship,
  Ivehicle,
  PersonInfoProps,
} from '@features/person/pages/PersonInfoPage/interface'
import { useAppClient } from '@client/useAppClient'
import { PersonInfoModel } from '@model/Person/PersonInfoModel'
// import { PersonInfoProps } from '@features/person/pages/PersonInfoPage/interface'

const withPersonInfo = (Component: React.FC<PersonInfoProps>) => {
  function Hoc({ ...props }) {
    const appClient = useAppClient()

    // const personData = appClient?.person

    const params = useParams()

    const [personInfo, setPersonInfo] = useState<PersonInfoModel | object>({})

    // fetch the the person from params.id

    const fetchPerson = async fetchUrl => {
      const res = await fetch(fetchUrl)
      return res.json()
    }

    useEffect(() => {
      ;(async () => {
        const res = await fetchPerson(
          `https://swapi.dev/api/people/${params.id}`
        )
        setPersonInfo(prev => ({ ...prev, res }))
      })()
    }, [params])

    // setPersonInfo(personData)

    // fetch person's ships

    const [ships, setShips] = useState<Iship[]>([])
    const [favShip, setFavShip] = useState<string>()

    const fetchStarship = async fetchUrl => {
      const res = await fetch(fetchUrl)
      return res.json()
    }

    const handleStarshipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // e.preventDefault()
      setFavShip(e.currentTarget.value)
    }

    useEffect(() => {
      personInfo.forEach(person => {
        for (let i = 0; i < person.starships.length; i += 1) {
          ;(async () => {
            const res = await fetchStarship(person.starships[i])
            setShips(prev => [...prev, res])
          })()
        }
      })
    }, [personInfo])

    // fetch person's vechicles

    const [vechicles, setVehicles] = useState<Ivehicle[]>([])
    const [favVehicle, setFavVehicle] = useState()

    const fetchVechicles = async fetchUrl => {
      const res = await fetch(fetchUrl)
      return res.json()
    }

    const handleVechicleChange = e => {
      setFavVehicle(e.currentTarget.value)
    }

    useEffect(() => {
      personInfo.forEach(person => {
        for (let i = 0; i < person.vehicles.length; i += 1) {
          ;(async () => {
            const res = await fetchVechicles(person.vehicles[i])
            setVehicles(prev => [...prev, res])
          })()
        }
      })
    }, [personInfo])

    const newProps = {
      ...props,
      personInfo,
      ships,
      favShip,
      handleStarshipChange,
      vechicles,
      favVehicle,
      sliceUrl,
      handleVechicleChange,
    }

    return <Component {...newProps} />
  }

  return Hoc
}

export { withPersonInfo }
