import { Button, Input } from "antd";
import React from "react";
import {SearchOutlined} from '@ant-design/icons';
import ButtonComponent from "../ButtonComponent/ButtonComponent";


const ButtonInputSearch = (props) => {
    const {
            size, placeholder, textButton,
            bordered, backgroundColorInput = '#fff',
            backgroundColorButton= 'rgb(38, 197, 236)',
            colorButton = '#ff'
        } = props
           
     
    return (
        <div style={{ display: 'flex', gap: '10px' ,}}>
            <Input
               size={size} 
               placeholder={placeholder}
               bordered={false}
               style={{ backgroundColor: backgroundColorInput}} 
              />
            <ButtonComponent
                size={size}
                style={{ background: backgroundColorButton, border: !bordered && 'none' }}
                icon={<SearchOutlined color={ colorButton} style={{ color: '#fff'}}/>}
                textButton={textButton}
                styleTextButton={{ color: colorButton}}
            />
        </div>
    )
}
 
export default ButtonInputSearch