import React from "react";
import { StyleNameProduct, WrapperReporText, WrapperPriceText, WrapperDiscountText, WrapperCardStyle } from "./style";
import {StarFilled} from '@ant-design/icons';
import logo from '../../assets/images/logo.jpg';
import { Image } from "antd";

const CardComponent  = () => {
    return (
        <WrapperCardStyle
        hoverable
        headStyle={{ width: '200px' , height: '200px'}}
        style={{ width: 200}}
        bodyStyle={{ padding: '10px' }}
        cover={
            <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
        }
        >
            <img src={logo} style={{ width: '68px', height: '14px', position: 'absolute', top: -1, left:-1, borderTopLeftRadius: '3px'}}/>
            <StyleNameProduct>LapTop Gaming</StyleNameProduct>
            <WrapperReporText>
                <span style={{marginRight: '4px'}}>
                <span>4.96</span><StarFilled style={{ fontSize: '12px', color: 'yellow'}}/>
                </span>
                <span>| Đã bán 1000+</span>
                
            </WrapperReporText>
            <WrapperPriceText>1.000.000 Đ
                <WrapperDiscountText>
                    -5%
                </WrapperDiscountText >
            </WrapperPriceText>
        </WrapperCardStyle>
    )
}
export default CardComponent;