import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: rgb(12,12,61);
    background: linear-gradient(0deg, rgba(12,12,61,1) 0%, rgba(0,0,0,1) 100%);
`

export const Title = styled.h1`
    font-size: 60px;
    color: white;
    animation: flipTitle 2s;

    @keyframes flipTitle {
        from {
            transform: rotateX(90deg);
        }
        to {
            transform: rotateX(0deg);
        }
    }
`

export const ContainerInput = styled.div`
    background-color: rgba(255, 255, 255, 0.2);
    padding: 15px;
    margin: 34px 0;
    display: flex;
    border-radius: 8px;
    box-shadow: 1px 3px 8px rgba(0,0,0, 0.5);

    input {
        background-color: transparent;
        border: 0;
        width: 320px;
        font-size: 20px;
        color: white;
        outline: none;
        margin-right: 8px;
    }

    button {
        background-color: transparent;
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: transform 0.5s;
    }

    button:hover {
        transform: scale(1.2);
    }
`

export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 18px;
    border-radius: 8px;
    width: 350px;
    padding: 20px;
    margin-top: 20px;
    background-color: white;
`