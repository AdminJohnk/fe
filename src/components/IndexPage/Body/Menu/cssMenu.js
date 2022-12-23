import styled from 'styled-components';

const StyleTotal = styled.div`
a{
    text-decoration: none;
    color: #000;
}
.menu{
    padding: 10px;
    display: flex;
    justify-content: center;
    background-color: white;
}
.menu ul{
    list-style: none;
    display: flex;
    margin-bottom: 0;
}
.menu ul li{
    padding: 4px 10px;
    cursor: pointer;
}
.menu ul li:hover{
    color: #0d2191;
    transition: all .5s;
    border-bottom: 1px solid #0d2191;
}
.menu ul li.active{
    font-weight: 700;
}
.menu ul li.active:hover{
    border: none;
    color: #000;
}
.menu ul .active::after{
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: #000;
}
`;

export default StyleTotal;