import styled from 'styled-components';

const StyleTotal = styled.div`
.featuredCategory{
    width: 83%;
    margin: auto;
    margin-top: 30px;
    padding: 25px 15px 25px 15px;
    background-color: white;
    border-radius: 6px;
}
.title{
    font-size: 1.23rem;
    font-weight: 500;
    margin-bottom: 30px;
}
.content{
    display: flex;
    flex-wrap: wrap;
    
}
.item{
    width: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.item img{
    width: 50%;
    object-fit: cover;
}
.NameOfProduct{
    display: block;
    width: 100%;
    text-align: center;
    font-size: 0.85rem;
    margin-top: 10px;
    width: 80%;
}
`;

export default StyleTotal;