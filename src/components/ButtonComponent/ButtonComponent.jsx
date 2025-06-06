import React from 'react'
import { Button } from 'antd'
import {SearchOutlined} from '@ant-design/icons';

const ButtonComponent = ({ size, styleButton, styleTextButton, textButton, icon, ...rests }) => {
  return (
    <Button
       size={size}
       style={{...styleButton, ...styleTextButton}}
       icon={icon}
       {...rests}
    >
        {textButton}
    </Button>

  )
}

export default ButtonComponent
