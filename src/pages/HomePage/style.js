import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    justify-content: space-between;
    border-bottom: 1px solid red;
    height: 44px;
    
    `


export const WrapperButtonMore = styled(ButtonComponent)`
    &:hover {
    
        color: #fff;
        background-color: rgb(13, 92, 182);
        
         span {
     color: #fff;
         }
    },
    width: 100%;
    text-align: center;
`
export const WrapperTypeProducts = styled.div`
    display: flex;
    gap: 50px;
    justify-content: center;
    margin-top: 20px;
    flex-wrap: wrap;
    
    
`   
