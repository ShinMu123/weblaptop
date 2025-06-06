import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperTypeProduct, WrapperTypeProducts } from './style'
import LapTop from '../../assets/images/LapTop.jpg'
import LapTop2 from '../../assets/images/LapTop2.jpg'
import LapTop3 from '../../assets/images/LapTop3.jpg'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";



const HomePage = () => {
  const arr = ['LapTop Mới Nhất',  'Laptop Giá Rẻ','Phụ Kiện LapTop','LapTop Văn Phòng','LapTop Gaming']
  const arrImages = [LapTop, LapTop2, LapTop3]
  
  const products = [
  ];

  return (
    <>
      <div style={{ backgroundColor: '#efefef', width: '100%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <WrapperTypeProduct>
            {arr.map((item) => (
              <TypeProduct name={item} key={item} />
            ))}
          </WrapperTypeProduct>
          <SliderComponent arrImage={arrImages}/>
          <WrapperTypeProducts>

            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            
          </WrapperTypeProducts>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
            <WrapperButtonMore textButton="Xem Thêm" type="outline" styleButton={{
               border: '1px solid rgb(11, 116, 229)', color: 'rgb(11, 116, 229)',
               width: '240px', height: '38px', borderRadius: '4px '
            }}
            styleTextButton={{ fontWeight: 500 }}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage