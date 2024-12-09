import styled from "styled-components";

export const Container_header  = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    padding: 3vh 3vh;
    background-color: #000;

    .icon-menu {
        font-size: 6vh;
    }

    .logo {
        flex:1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2vh;

        h1 {
            font-size: 5vh;
            font-weight: bold;
        }

        p {
            font-size: 3.5vh;
            font-weight: bold;
            color: #FF6600;
        }
    }

`