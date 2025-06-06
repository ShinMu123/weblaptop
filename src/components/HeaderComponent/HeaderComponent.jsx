import { Badge, Col } from 'antd'
import 'antd/lib/transfer/search'
import React from 'react'
import { WrapperHeader, WrapperHeaderAccout, WrapperTextHeader, WrapperTextHeaderSmall } from './style'
import {
  UserOutlined,  
  CaretDownOutlined,
  ShoppingCartOutlined  
  } from '@ant-design/icons';
  import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch'

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader gutter = {16}>
        <Col span={6} style={{ alignItems: 'center' , display: 'flex', gap: '10px' }}>
        <WrapperTextHeader>Bán LapTop</WrapperTextHeader>
        </Col>
        <Col span={12}>
        <ButtonInputSearch
          size="large"
          bordered={false}
          textButton="Tìm kiếm"
          placeholder="Tim kiếm sản phẩm"
          
        />
        </Col>
        <Col span={6} style={{ display: 'flex', gap: '40px', alignItems: 'center'  }}>
          <WrapperHeaderAccout>
          
              <UserOutlined style={{ fontSize: '30px'}}/>
            
            <div>
              <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
              <div>
                 <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                < CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccout>
          <div>
            <Badge count={4} size="small">
              <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }}/>
           </Badge>
              <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent