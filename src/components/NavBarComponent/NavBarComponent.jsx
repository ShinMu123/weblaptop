import React from "react";
import { WrapperLableText, WrapperContent, WrapperTextValue } from "./style";
import { Checkbox, Row, Col, Rate } from "antd";
import { WrapperTextPrice } from "./style";


const NavbarComponent = () => {
    const onChange = (checkedValues) => {
      console.log('checked = ', checkedValues);
    };

    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option, index) => (
                    <WrapperTextValue key={index}>{option}</WrapperTextValue>
                ));
            case 'checkbox':
                return(
                  <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'coloumn', gap: '12px'}} onChange={onChange} >
                        {options.map((option, index) => (
                          <Col span={24} key={index}> 
                            <Checkbox style={{ marginLeft: 0}} value={option.value}>{option.label}</Checkbox>
                          </Col>
                        ))} 
                    </Checkbox.Group> 
                );
                case 'star':
               
                       return  options.map((option) => {
                        console.log('check',option)
                         return (

                         <div style={{display: 'flex', alignItems: 'center', gap: '8px'}} key={option}>
                            <Rate style={{ fontSize: '12px'}} disabled defaultValue={option} />
                             <span>{`Từ ${option} Sao`}</span> 
                        </div>
                           
                        )
                    })
            case 'price':
                return options.map((option) => {
                    return(
                        <WrapperTextPrice>  {option}  </WrapperTextPrice>
                    )
                })


            default:
                return {}
        }
    };

    return (
        <div >
            <WrapperLableText>Danh Mục Sản Phẩm</WrapperLableText>
            <WrapperContent>
                {renderContent('text', ['LapTop Mới Nhất', 'Laptop Cũ', 'Laptop Giá Rẻ','Phụ Kiện LapTop','LapTop Văn Phòng','LapTop Gaming'])}
                </WrapperContent>

        </div>
    );
};

export default NavbarComponent;
