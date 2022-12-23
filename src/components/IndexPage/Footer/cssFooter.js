import styled from 'styled-components';

const StyleTotal = styled.div`
.footer_contact{
    margin: auto;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    padding: 10px 8.5% 40px 8.5%;
}

.h3_common{
    font-size: 1rem;
    font-weight: 700;
    margin-top: 1.4rem;
    margin-bottom: 1.4rem;
}
.wh_icon{
    width: 35px;
    height: 35px;
}

/* CONTACT US  */

.contact_Us{
    width: 20%;
}
.contact_Us .total{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 65%;
}
.contact_Us .address .title{
    font-size: 0.8rem;
    font-weight: 600;
}
.contact_Us .address .content{
    font-size: 0.8rem;
    font-weight: 400;
    margin-left: 1rem;
}
.contact_Us .email .title{
    font-size: 0.8rem;
    font-weight: 600;
}
.contact_Us .email .content{
    font-size: 0.8rem;
    font-weight: 400;
    margin-left: 1rem;
}

/* About EVA */

.about_EVA{
    width: 20%;
}

.about_EVA .total{
    font-size: 0.8rem;
    line-height: 25px;
}

/* Customer service */

.customer_Service{
    width: 20%;
}

.customer_Service .total{
    font-size: 0.8rem;
    line-height: 25px;
}

/* Payment & Shipping */

.payment_Shipping{
    width: 20%;
}

.payment_Shipping .total{
    font-size: 0.8rem;
    line-height: 25px;
}

/* Usage Guide */

.usage_Guide{
    width: 20%;
}

.usage_Guide .total{
    font-size: 0.8rem;
    line-height: 25px;
}



.footer_payment{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20% 20px 10%;
}

.footer_payment .connect{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.footer_payment .connect .social img{
    margin-right: 15px;
    width: 40px;
    height: 40px;
    cursor: pointer;
}
.footer_payment .payment img{
    width: 40px;
    height: 40px;
    margin-right: 15px;
    cursor: pointer;
}
.footer_line{
    background-color: #2196F3;
    height: 50px;
}
`;

export default StyleTotal;