import React, { useState, useEffect } from 'react'
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
