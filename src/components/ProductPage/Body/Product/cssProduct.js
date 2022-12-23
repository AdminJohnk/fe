import styled from 'styled-components';

const StyleTotal = styled.div`
.Product {
    width: 83%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */

    .ProductImage {
        width: 50%;
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .minImage {
            width: 10%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            .up {
                width: 50px;
                height: 50px;
                text-align: center;
                line-height: 50px;
                border: 1px solid #ccc;
                margin-bottom: 10px;
                :hover {
                    cursor: pointer;
                    border-color: #000;
                    transition: all 0.5s;
                }
            }
            .down {
                width: 50px;
                height: 50px;
                text-align: center;
                line-height: 50px;
                border: 1px solid #ccc;
                :hover {
                    cursor: pointer;
                    border-color: #000;
                    transition: all 0.5s;
                }
            }
            .image {
                width: 50px;
                height: 50px;
                border: 1px solid #ccc;
                margin-bottom: 10px;
                :hover {
                    cursor: pointer;
                    border-color: #000;
                    transition: all 0.5s;
                }
                
            }
        }
        .maxImage {
            width: 85%;
            border: 1px solid #ccc;
            position: relative;
            .prev{
                position: absolute;
                width: 33px;
                height: 115px;
                left: 0;
                top: 38%;
                border: 1px solid #ccc;
                border-left: none;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .next{
                position: absolute;
                width: 33px;
                height: 115px;
                right: 0;
                top: 38%;
                border: 1px solid #ccc;
                border-right: none;
                display: flex;
                justify-content: center;
                align-items: center;

            }
            img{

            }
        }
    }
    .ProductInfo {
        width: 50%;
        margin: 50px 0px 0px 20px;
        .name{
            font-size: 20px;
            font-weight: 600;
            margin: 0px 0px 0px 10px
        }
        .condition_Quantity{
            .Condition{
                margin: 0px 0px 10px 50px;
                span:first-child{
                    font-weight: 600;
                    margin-right: 20px;
                }
                span:last-child{
                    font-weight: 400;
                }
            }
            .Quantity{
                margin: 0px 0px 10px 50px;
                display: flex;
                align-items: center;
                .left{
                    margin-right:30px;
                    span{
                        margin-right: 30px;
                        font-weight: 600;
                    }
                    input{
                        width: 50px;
                        border-radius: 5px;
                    }
                }
                .right{
                    div:last-child{
                        span:nth-child(1){
                            color: red;
                        }
                        span:nth-child(2){
                            margin: 0px 5px;
                        }
                        span:nth-child(3){
                            color: blue;
                        }
                    }
                }
            }

        }
        .price{
            display: flex;
            justify-content: space-around;
            .left{
                display: flex;

                .priceText{
                    margin: 0px 0px 10px 50px;
                    font-size: 17px;
                }
                .priceDetail{
                    margin: 0px 0px 0px 15px;
                    div:nth-child(1){
                        font-size: 25px;
                        font-weight: 600;
                    }
                    div:nth-child(2){
                        font-size: 15px;
                    }
                    div:nth-child(3){
                        font-weight: 600;
                        color: gray;
                        font-size: 17px;
                    }
                }
            }
            .right{
                div:nth-child(1){
                    margin: 0px 0px 10px 0px;
                    font-size: 17px;
                    font-weight: 600;
                    color: white;
                    background-color: #0053A0;
                    padding: 10px 50px;
                    border-radius: 20px;
                }
                div:nth-child(2){
                    margin: 0px 0px 10px 0px;
                    font-size: 17px;
                    font-weight: 600;
                    color: white;
                    background-color: #3498CA;
                    padding: 10px 50px;
                    border-radius: 20px;
                }
                div:nth-child(3){
                    margin: 0px 0px 0px 0px;
                    font-size: 17px;
                    color: #3498CA;
                    text-align: center;
                    border-radius: 20px;
                    border: 1px solid #3498CA;
                    padding: 10px;
                }
            }
        }
        .sold{
            display: flex;
            justify-content: space-around;
            align-items: center;
            text-align: center;
            span{
                width: 33.33%;
            }
            .soldNumber{
                border-right: 1px solid #ccc;
                div:nth-child(1){
                    font-size: 21px;
                    color: #3498CA;
                }
                div:nth-child(2){

                }
            }
            .watcherNumber{
                border-left: 1px solid #ccc;
                div:nth-child(1){
                    font-size: 21px;
                    color: #3498CA;
                }
                div:nth-child(2){

                }
            }
        }
        .return{
            .ReturnText{
                margin: 0px 10px 10px 50px;
                font-size: 17px;
                font-weight: 600;
            }
        }
        .payment{
            .paymentText{
                margin: 0px 10px 10px 50px;
                font-size: 17px;
                font-weight: 600;
            }
            .paymentImage{
                .img_1{
                    width: 200px;
                }
                .img_2{
                    width: 50px;
                }
            }
        }
    }
}


`;

export default StyleTotal;