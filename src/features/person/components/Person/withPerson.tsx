import React, { useState, useEffect } from 'react'
import { PersonProps } from '@features/person/components/Person/interface'
import { PersonModel } from '@model/Person/PersonModel'

const withPerson = (Component: React.FC<PersonProps>) => {
  function Hoc(person: PersonProps) {
    return <Component {...person} />
  }

  return Hoc
}

export { withPerson }
