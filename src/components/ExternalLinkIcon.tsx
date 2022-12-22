import React from 'react'

interface Prop {
  link: string
  icon: string 
}
const ExternalLinkIcon: React.FC <Prop>  = ({link, icon}) => {
  return (
    <a href={link} target="_blank">
        <i className={icon}></i>
    </a>
  )
}

export default ExternalLinkIcon