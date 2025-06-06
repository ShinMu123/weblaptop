import React from "react";
import {Col, Row, Image} from "antd";
import imagesProduct from "../../assets/images/test.jpg"; // Adjust the path as necessary
import imagesProductSmall from "../../assets/images/img.jpg";
const ProductDetailsComponent = () => {
    return (
        <Row>
           <Col span={10}>
               <Image src={ imagesProduct} alt="image product" preview="false"/>
               <div>
                   <Image src={imagesProductSmall}alt="imagesProductSmall" preview="false"/>
               </div>
           </Col>
           <Col span={14}>col-12</Col>
        </Row>
    );
}
export default ProductDetailsComponent;