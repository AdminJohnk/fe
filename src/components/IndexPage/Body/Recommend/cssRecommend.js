import styled from 'styled-components';

const StyleTotal = styled.div`
.recommend{
    width: 83%;
    margin: auto;
    margin-top: 30px;
}
.title{
    font-size: 1.24rem;
    font-weight: 500;
    padding: 10px 15px;
    border-radius: 6px;
    background-color: white;
    margin-bottom: 3px;
}
.product{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.item{
    width: 12.2%;
    text-align: center;
    background-color: white;
    border-radius: 3px;
    padding: 3px 0;
    cursor: pointer;
}
.product .active{
    border: 1px solid #0f09c4;
}
.item img{
    width: 30%;
}
.product_name{
    margin-top: 5px;
    font-size: 0.9rem;
}
`;

export default StyleTotal;