import { ReactElement } from 'react';

// CARD COMPONENT UTILS
interface ICardProps {
	clickHandler: (value: number) => void;
	value: number;
}

// CARD COMPONENT
const Card = ({ clickHandler, value }: ICardProps): ReactElement => {
	/* Render */
	return (
		<div
			onClick={() => clickHandler(value)}
			style={{
				border: '2px solid white',
				borderRadius: 10,
				cursor: 'pointer',
				display: 'inline-flex',
				justifyContent: 'center',
				marginRight: 10,
				padding: '30px 0',
				width: 60,
			}}
		>
			{value}
		</div>
	);
};

export default Card;
