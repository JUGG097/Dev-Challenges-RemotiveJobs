import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background: #F6F7FB;
        font-family: 'Poppins', sans-serif;
    }

    input::placeholder {
		color: #b9bdcf;
		font-size: 12px;
	}
`;
