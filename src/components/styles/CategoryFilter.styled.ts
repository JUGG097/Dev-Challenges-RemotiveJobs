import styled from "styled-components";

export const StyledCategoryFilter = styled.div`
	background: url("./images/backgroundImg.png");
	background-size: cover;
	padding: 35px 0;
	border-radius: 10px;
	color: white;
	display: flex;
	justify-content: center;

	.search-div {
		background-color: white;
		width: 80%;
		padding: 5px 0;
		border-radius: 5px;
	}

	.search-div input {
		width: 100%;
		height: 50px;
		padding: 0 5px 0 25px;
		border: none;
		font-size: 12px;
	}

	/* .search-div input::placeholder {
		color: #b9bdcf;
		font-size: 12px;
	} */

	.search-div button {
		width: 100%;
		height: 100%;
	}

	.search-div .search-relative {
		position: relative;
	}

	.search-div svg {
		color: #b9bdcf;
		position: absolute;
		top: 18px;
		left: 18px;
	}

	@media (max-width: 768px) {
		.search-div input {
			height: 100%;
		}

		.search-div button {
			font-size: 0.5rem;
			padding: 5px;
		}

		.search-div svg {
			top: 6px;
			left: 18px;
		}
	}

	@media (max-width: 424px) {
		.search-div {
			width: 90%;
		}
	}

	@media (max-width: 321px) {
		.search-div button {
			font-size: 0.4rem;
			padding: 4px;
		}
	}
`;
