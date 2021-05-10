import React from 'react'
import { useQuery } from 'react-query'
import { useAppClient } from '@client/useAppClient'
import { PersonProps } from '@features/person/components/Person/interface'
import { PersonModel } from '@model/Person/PersonModel'

const withPerson = (Component: React.FC<PersonProps>) => {
  function Hoc(props: PersonModel) {
    const newProps = {
      ...props,
    }

    return <Component {...props} />
  }

  return Hoc
}

export { withPerson }
