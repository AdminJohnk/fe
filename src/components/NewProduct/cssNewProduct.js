import styled from 'styled-components';

const StyleTotal = styled.div`
h2{
    padding: 15px;
}
h4{
    padding: 15px;
}
.width20 {
    width: 20%!important;
}
.width30 {
    width: 30%!important;
}

    .newProduct{
        width: 73%;
        margin: auto;
        background-color: #f4f4f4;
        .diplayFlex{
            display: flex;
            align-items: center;
        }
        .forminput {
            width: 50%;
            border-radius: 5px;
            padding: 15px;
            .form-group {
                margin-bottom: 20px;
                label {
                    display: block;
                    font-size: 14px;
                    font-weight: bold;
                    margin-bottom: 5px;
                }
                input {
                    width: 100%;
                    height: 40px;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    padding: 0 10px;
                    font-size: 14px;
                    outline: none;
                    :focus {
                        outline: none;
                        border: 1px solid #3665f3;
                        box-shadow: none;
                    }
                }
            }
        }
        .Dropdown{
            position: relative;
            padding: 15px;

            label{
                position: absolute;
                top: -9px;
                left: 16px;
                font-size: 14px;
                font-weight: bold;
            }
            .formDropdown{
            font-size: 16px;
            padding: 7px;
            border: 1px solid #ccc;
            border-radius: 5px;
            position: relative;
            display: block;
            width: 100%;
            }
        }
        .description_title{
            padding: 15px;
            .textDescription{
                font-size: 14px;
                font-weight: bold;
                margin-bottom: 5px;
            }
            textarea{
                height: 200px;
            }
            button{
                margin-top: 20px; 
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                background-color: #3665f3;
                color: #fff;
                font-size: 16px;
                cursor: pointer;
                
                right: 0;
                :hover{
                    background-color: #2a4db7;
                    transition: 0.5s;
                }
            }
        }
    }
`;

export default StyleTotal;