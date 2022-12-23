import styled from 'styled-components';

const StyleTotal = styled.div`
.casousel{
    width: 83%;
    margin: auto;
    height: 270px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.casousel_content{
    width: 67%;
    position: relative;
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
}
.casousel_content .pre_button span{
    position: absolute!important;
    top: 50%;
    left: 0;
}
.casousel_content .next_button span{
    position: absolute!important;
    top: 50%;
    right: 0;
}
.casousel_information{
    width: 32.5%;
    height: 100%;
    background-color: #FDD835;
    margin: 0;
    padding: 20px 40px;
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
}
.casousel_information .title{
    font-size: 35px;
    font-weight: 600;
    color: #000;
    font-weight: 700;
    line-height: 40px;
    margin-bottom: 20px;
}
.casousel_information .content{
    font-size: 17px;
    margin-bottom: 40px;
}
.casousel_information button{
    border: 1px solid #000;
    background-color: transparent;
    padding: 10px 20px;

}
.casousel_information button i{
    font-size: 20px;
    background-color: transparent;
}
`;

export default StyleTotal;