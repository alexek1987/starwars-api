import React from 'react'

interface Props {
  name: string
}

const Starship: React.FC<Props> = ({ name }) => {
  return <div>{name}</div>
}

export default Starship
