import styled from "styled-components";

export const StyledToApply = styled.div`
	font-size: 14px;

	a {
		text-decoration: none;
		color: #1e86ff;

		span {
			margin-left: 10px;
		}

		&:hover {
			opacity: 0.8;
		}
	}

	h5 {
		font-size: 14px;
		font-weight: 700;
		color: #b9bdcf;
	}
`;

export const StyledJobDescription = styled.div`
	font-family: "Roboto", sans-serif;
	span:nth-child(1) {
		font-size: 24px;
		color: #334680;
		font-weight: 700;
	}
	span:nth-child(2) {
		font-size: 12px;
		text-align: center;
		border: 2px solid #334680;
		width: 70px;
		border-radius: 5px;
		padding: 5px;
		margin-left: 5px;
	}

	.time-stamp {
		font-size: 12px;
		font-weight: 500;
		color: #b7bcce;
	}

	.company-details {
		display: flex;

		img {
			width: 70px;
			height: 70px;
			border-radius: 5px;
		}

		div {
			margin-left: 10px;

			p {
				font-size: 18px;
				font-weight: 700;
				color: #334680;
			}

			.location {
				list-style: none;
				font-size: 12px;
				font-weight: 500;
				color: #b9bdcf;
			}
		}
	}

	@media (max-width: 768px) {
		span:nth-child(2) {
			display: block;
			margin-left: 0;
		}
	}
`;
