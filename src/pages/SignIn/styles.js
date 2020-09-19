import styled from 'styled-components';

export const Frame = styled.div`
    height: 400px;
    width: 400px;
    margin: 0;
    padding: 0;
    position: relative;

    > img {
        height: 100%;
        width: 100%;
        height: auto;
        margin: 0;
        padding: 0;
    }

    > div {
        height: 70px;
        background: rgba(255, 255, 255, .8);
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        
        img {
            width: 107px;
            height: 55px;
            margin-left: 20px;
        }

        div {
            margin-left: 20px;

            span {
                font-weight: 300;
                font-size: 22px;
                color: #1f1f1f;
                display: block;
            }

            strong {
                font-weight: 700;
                font-size: 24px;
                color: #646060;
            }
        }
    }
`;

export const Button = styled.button`
    margin-top: 10px;
`;
