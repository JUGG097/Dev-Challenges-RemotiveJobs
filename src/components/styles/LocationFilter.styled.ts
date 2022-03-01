import styled from "styled-components";

export const StyledLocationFilter = styled.div`
	font-size: 14px;
	color: #334680;

	.select-fulltime {
		display: flex;
		align-items: center;
		padding: 0 10px;

		label {
			margin-left: 5px;
		}
	}

	.location-search {
		position: relative;
		h5 {
			font-size: 14px;
			font-weight: 700;
			color: #b9bdcf;
		}

		input[type="search"] {
			width: 100%;
			height: 40px;
			padding: 0 5px 0 25px;
			border: none;
			box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
			border-radius: 4px;
		}

		svg {
			position: absolute;
			top: 38px;
			left: 8px;
			color: #b9bdcf;
		}
	}

	.location-radio {
		padding: 0 10px;
		font-size: 14px;
		div {
			display: flex;
			align-items: center;

			label {
				margin-left: 5px;
			}
		}
	}
`;
