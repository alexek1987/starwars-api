import React, { useState, useEffect } from 'react'
import { PersonProps } from '@features/person/components/Person/interface'
import { PersonModel } from '@model/Person/PersonModel'

const withPerson = (Component: React.FC<PersonProps>) => {
  function Hoc(person: any) {
    const newProps = {
      ...person,
    }

    return <Component {...newProps} />
  }

  return Hoc
}

export { withPerson }
