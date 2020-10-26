import React from 'react'
import ProfileMaster from './pages/ProfileMaster'
import GlobalStyle from './styles/global'

const ExampleComponent = ({...rest}) => {
  return (
    <div>
      <ProfileMaster {...rest}/>
      <GlobalStyle />
    </div>
  )
}

export default ExampleComponent;
