import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { PlanetInfoProps } from '@features/planet/pages/PlanetInfoPage/interface'
import { useAppClient } from '@client/useAppClient'
import { initialValues } from '@constant/form/PlanetInitial'

const withPlanetInfo = (Component: React.FC<PlanetInfoProps>) => {
  function Hoc() {
    const { id } = useParams()
    const appClient = useAppClient()

    const { data, isLoading } = useQuery(['planet', id], () =>
      appClient?.planet.getPlanet(id)
    )

    const handleOnSubmit = (formValue: any) => {
      console.log('formValue', formValue)
    }

    if (!data) {
      return <div>Loading...</div>
    }

    console.log(data)

    const newProps = {
      data,
      isLoading,
      initialValues: {
        ...initialValues,
        name: data.name,
        terrain: data.terrain,
        gravity: data.gravity,
        climate: data.climate,
      },

      handleOnSubmit,
    }

    return <Component {...newProps} />
  }

  return Hoc
}

export { withPlanetInfo }
