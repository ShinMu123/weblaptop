import { Card } from 'antd';
import styled from 'styled-components';

export const WrapperCardStyle  = styled(Card)`
    width: 200px;
    &img {
        width: 200%;
        height: 200px;
    }
        position: relative;
`
export const StyleNameProduct = styled.div`
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: rgb(56, 56, 61)
    font-weight: 400;
    !important

`;

export const WrapperReporText = styled.div`
   font-size: 11px;
   color: rgb(128, 128, 137);
   display: flex;
   align-items: center;
   margin: 6px 0 0px;
`

export const WrapperPriceText = styled.div`
    color: rgb(255, 66, 78);
    font-size: 16px;
    font-weight: 500;
    

`
export const WrapperDiscountText = styled.span`
    color: rgb(255, 66, 78);
    font-size: 12px;
    font-weight: 500;

`