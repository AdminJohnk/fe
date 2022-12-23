import styled from 'styled-components';

const StyleTotal = styled.div`
.signup-form {
    width: 400px;
    margin: 0 auto;
    background-color: #f4f4f4;
    border-radius: 5px;
    padding: 20px;

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
            :focus{
                outline: none;
                border: 1px solid #3665F3;
                box-shadow: none;
            }
        }
    }

    .btn {
        width: 100%;
        height: 40px;
        border-radius: 5px;
        background-color: #3665F3;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        margin-top: 10px;
        :hover {
            background-color: #3461E9;
            transition: all 0.5s;
        }
    }
    .social-login {
    margin-top: 15px;
    text-align: center;

    a {
        display: inline-block;
        margin: 0 5px;
        text-decoration: none;
        color: #666;

        i {
            font-size: 24px;
        }

        &:hover {
            color: #333;
        }
    }
}

.sign-up {
    margin-top: 15px;
    text-align: center;

    a.sign-up-link {
        color: #08c;
        text-decoration: none;

        &:hover {
            color: #005580;
        }
    }
}



}

`;

export default StyleTotal;