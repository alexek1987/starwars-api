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

    const { data, isLoading } = useQuery(['person', id], () =>
      appClient?.person.getPerson(id)
    )

    const handleOnSubmit = (formValue: any) => {
      console.log('formValue', formValue)
    }

    if (!data) {
      return <div>loading...</div>
    }

    const newProps = {
      data,
      isLoading,
      initialValues: {
        ...initialValues,
        name: data.name,
        height: data.height,
        gender: data.gender,
      },
      handleOnSubmit,
    }

    return <Component {...newProps} />
  }

  return Hoc
}

export { withPersonInfo }
