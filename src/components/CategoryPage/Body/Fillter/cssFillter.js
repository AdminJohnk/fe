import styled from 'styled-components';

const StyleTotal = styled.div`
.fillter{
    width: 83%;
    margin: auto;
    margin-top: 15px;
    padding: 0px 15px 10px 15px;
    background-color: white;
    border-radius: 6px;
    .path{
        font-size: 14px;
        span:first-child{
            cursor: pointer;
        }
        span:last-child{
            cursor: pointer;
        }
    }
    .minsize{
        width: 81%;
        margin-left: 12%;
        .categoryName{
            margin-top: 30px;
            font-size: 30px;
            font-weight: 700;
        }
        .ResultFillter1{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 30px;
            .dropdown{
                #dropdownMenuButton1{
                    border-radius: 20px;
                    background-color: #EEE;
                    border: none;
                    color: black;
                    font-size: 14px;
                    :focus{
                        outline: none;
                        border: none;
                        box-shadow: none;
                    }
                    :hover{
                        background-color: #DDD;
                    }
                }
            }
        }
        .filler2{
            display: flex;
            align-items: center;
            margin-top: 25px;
            margin-bottom: -10px;
            flex-wrap: wrap;
            .dropdown{
                margin-right: 10px;
                margin-bottom: 10px;
                #dropdownMenuButton1{
                    border-radius: 20px;
                    background-color: #EEE;
                    border: none;
                    color: black;
                    font-size: 14px;
                    :focus{
                        outline: none;
                        border: none;
                        box-shadow: none;
                    }
                    :hover{
                        background-color: #DDD;
                    }
                }
            }
        }
        
    }
    
}


`;

export default StyleTotal;