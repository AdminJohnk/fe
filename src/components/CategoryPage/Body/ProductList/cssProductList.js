import styled from 'styled-components';

const StyleTotal = styled.div`
.productList{
    width: 73%;
    margin-left: 18%;
    margin-top: 15px;
    padding: 0px 15px 25px 15px;
    background-color: white;
    border-radius: 6px;
    display: flex;
    flex-wrap: wrap;
    .card{
        width: 23%;
        padding: 3px 3px 0px 3px;
        margin: 0px 8px 15px 0px;
        cursor: pointer;
        img{
            /* width: 250px;
            height: 300px; */
        }
        :hover{
            .card-title{
                text-decoration: underline;
                transition: 0.6s;
            }
        }
        .card-body{
            padding: 0.5rem 0.5rem;
            .card-title{
                font-size: 16px;
            }
            .star{
                font-size: 13px;
                color: #FFC107;
                margin-bottom: 7px;
                display: inline-block;
            }
            .card-text{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 5px;
            }
            .time{
                font-size: 15px;
                margin-bottom: 0px;
                text-align: right;
            }
        }
    }
}
`;

export default StyleTotal;