import styled from 'styled-components';

const StyleTotal = styled.div`
.shop-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin: 2rem 0 1rem 15%;
    padding: 2rem 4rem;
    background-color: #f0ebeb;
    .details {
        h2.shop-name {
            font-size: 22px;
            font-weight: bold;
        }

        .feedback,
        .items-sold {
            display: flex;
            align-items: center;
            margin-bottom: 10px;

            .count {
                font-size: 18px;
                font-weight: bold;
                margin-right: 10px;
            }

            .label {
                font-size: 14px;
                color: #666;
            }
        }
    }

    .actions {
    display: flex;
    flex-direction: column;

    button {
        padding: 10px 4rem;
        border: none;
        border-radius: 25px;
        cursor: pointer;
        margin-bottom: 10px; /* adds 10px of space between buttons */
        :first-child {
            background-color: #3665F3;
            color: #fff;
            font-weight: bold;
            &:hover {
            background-color: #3461E9;
        }
        }
        :last-child {
            border: 1px solid #3665F3;
            color: #3665F3;
            &:hover {
            background-color: #d6d2d2;
        }
        }
        
    }

}

}

`;

export default StyleTotal;