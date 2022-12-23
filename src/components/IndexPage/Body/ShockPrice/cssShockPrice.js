import styled from 'styled-components';

const StyleTotal = styled.div`
.shockPrice{
    width: 83%;
    margin: auto;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px;
    background-color: transparent;
}
.product{
    width: 67%;
    background-color: white;
    padding: 15px 25px;
}
.product .text{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}
.product .text .left{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.product .text .left >span:first-child{
    font-size: 25px;
    color: rgba(250, 90, 0, 0.89);
    font-weight: 700;
    margin-right: 5px;
}
.product .text .left >img{
    margin-right: 15px;
}
.product .text .left .hour .time{
    background-color: #EA333F;
    color: white;
    font-weight: 700;
    padding: 2px 3px;
    border-radius: 5px;
}
.product .text .left .hour .gap{
    font-weight: 700;
    
}
.product .text .right{
    color: rgba(11, 116, 229, 0.7);
    font-weight: 700;
    font-size: 17px;
    cursor: pointer;
}
.product .text .right:hover{
    color: #0B74E5;
    transition: all .5s;
}
.product .productItem .item {
    width: 150px;
}
.product .productItem .item img{
    width: 150px;
    height: 150px;
}
.product .productItem .item .price{
    font-size: 16px;
    font-weight: 700;
    margin-top: 15px;
    margin-bottom: 10px;
}
.product .productItem .item .old_Price{
    display: flex;
    justify-content: space-between;
}
.product .productItem .item .old_Price >span:first-child{
    font-size: 10px;
    
    text-decoration: line-through;
}
.product .productItem .item .old_Price >span:last-child{
    font-size: 10px;
}
.pattern_product{
    width: 32.5%;
    background-color: white;
    height: 100%;

}
.pattern_product img{
    height: 327px;
    width: 100%;
}
`;

export default StyleTotal;