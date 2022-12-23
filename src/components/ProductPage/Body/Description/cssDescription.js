import styled from 'styled-components';

const StyleTotal = styled.div`
.product-description {
    font-family: sans-serif;
    font-size: 14px;
    width: 50%;
    margin: 6rem 0 4rem 15%;

    h2 {
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 2rem;
    }

    h3 {
        font-size: 19px;
        font-weight: bold;
        margin: 2rem 0 0.5rem 0;
    }

    table {
        width: 100%;
        border-collapse: collapse;

        td {
            padding: 5px 10px;
            border: 1px solid #ccc;

            &:first-child {
                width: 30%;
                font-weight: bold;
            }

            &:last-child {
                width: 70%;
            }
        }
    }
}


`;

export default StyleTotal;