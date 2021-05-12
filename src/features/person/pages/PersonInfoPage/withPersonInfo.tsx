import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { PersonInfoProps } from '@features/person/pages/PersonInfoPage/interface'
import { useAppClient } from '@client/useAppClient'
import { initialValues } from '@constant/form/PersonInitial'

const withPersonInfo = (Component: React.FC<PersonInfoProps>) => {
  function Hoc() {
    const { id } = useParams()
    const appClient = useAppClient()
    // const [primaryShip, setPrimaryShip] = useState()

    const { data, isLoading } = useQuery(['person', id], () =>
      appClient?.person.getPerson(id)
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
        height: data.height,
        gender: data.gender,
        hair_color: data.hair_color,
        eye_color: data.eye_color,
        birth_year: data.birth_year,
        skin_color: data.skin_color,
        primary_starship: data.primary_starship,
        primary_vehicle: data.primary_vehicle,
      },
      handleOnSubmit,
    }

    return <Component {...newProps} />
  }

  return Hoc
}

export { withPersonInfo }
