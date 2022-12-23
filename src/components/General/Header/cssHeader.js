import styled from 'styled-components';

const StyleTotal = styled.div`
.header {
    background-color: #1a94ff;
    padding: 20px 120px;
    box-sizing: border-box;
}
.top {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 40px;
    margin-bottom: 5px;
}
.logo img {
    width: 60px;
    height: 100%;
}
.search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}
.search input {
    width: 590px;
    padding: 8px 20px;
    font-size: 15px;
}
.search button {
    background-color: #2523be;
    color: white;
    border: none;
    width: 140px;
    height: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.search button span {
    color: white;
}
.account_cart{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.account .login {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.account .login .login_account {
    display: flex;
    flex-direction: column;
    font-size: 13px;
}
.account .login img {
    width: 33px;
    height: 33px;
}
.cart {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}
.cart .images_cart::after{
    content: '0';
    position: absolute;
    background-color: #FDD835;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border-radius: 50%;
    font-size: 13px;
    font-weight: 500;
    top: -1px;
    left: 24px;
}
.cart img {
    width: 33px;
    height: 33px;
    position: relative;
}

.cart span {
    color: white;
    font-size: 13px;
    position: absolute;
    top: 15px;
    right: -35px;
}
.bottom{
    margin-left: 200px;
}
.bottom span{
    color: white;
    font-size: 13px;
    margin-right: 20px;
}
`;

export default StyleTotal;