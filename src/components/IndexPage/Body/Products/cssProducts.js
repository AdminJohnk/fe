import styled from 'styled-components';

const StyleTotal = styled.div`
.products{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 83%;
    margin: auto;
    margin-top: 5px;
    padding-bottom: 80px;
    background-color: transparent;

}
.item{
    width: 16.2%;
    padding: 10px 10px;
    background-color: white;
    cursor: pointer;
    border-radius: 5px;
    margin: 0px 5px 15px 0px;
}
.item:hover .title{
    text-decoration: underline;
    transition: all .5s;
}
.item >img{
    width: 100%;
    height: 200px;
    margin-bottom: 7px;

}
.item .title{
    font-size: 0.9rem;
    line-height: 18px;
    margin-bottom: 6px;
    height: 45px;
}
.item .star{
    font-size: 12px;
    margin-right: 30px;
    margin-bottom: 6px;
}
.item .star .icon{
    margin-right: 3px;
}
.item .star .icon i{
    color: #f5bd03;
}
.item .star .number{
    color: rgb(0, 132, 255);
}
.item .price{
    font-size: 1rem;
    font-weight: 700;
    color: rgb(223, 44, 44);
}
`;

export default StyleTotal;