import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, button, input {
        font-family: 'Anek Malayalam', sans-serif;
    }

    :root {
        --bg-header: #212529;
        --text-color: #ffffff;
        --button-color: #ffc107;
        --black: #000000;
        --feature-text: #f7f1e3;
        --bg-footer: #212529;
        --mask: linear-gradient(to bottom,#0000 0,#0000 5%,#000 40%,#0000 95%,#0000 0)100% 50%/100% 100% repeat-x;
    }

    body {
        background-color: var(--black);
    }

    .slick-prev,
    .slick-next {
       visibility: hidden;
    }

    .not-selected {
        filter: grayscale(100%);
    }

    a {
        transition: all 0.400s ease;
    }

    a:hover {
        transform: scale(110%);
    }
`
