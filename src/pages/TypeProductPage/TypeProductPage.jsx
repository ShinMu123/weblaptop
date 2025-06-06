import React from 'react';
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent';
import CardComponent from '../../components/CardComponent/CardComponent';
import { Pagination, Row, Col } from 'antd';
import { WrapperTypeProducts } from './style';
import { WrapperProducts } from './style';
import { WrapperNavbar } from './style';

const TypeProductPage = () => {
    const onchange = () => {};
    
    return (
        <div style={{ padding: '0 120px', background: '#efefef' }}>
            <Row style={{ flexWrap: 'nowrap', paddingTop: '10px' }}>
                <WrapperNavbar span={4}>
                    <NavBarComponent />
                </WrapperNavbar>
                <Col span={20}>
                    <WrapperProducts>
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                    </WrapperProducts>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Pagination 
                        defaultCurrent={2} 
                        total={100} 
                        onChange={onchange} 
                        style={{ textAlign: 'center', marginTop: '10px' }} 
                    />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default TypeProductPage;