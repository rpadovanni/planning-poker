import { ReactElement, useState } from 'react';

// COMPONENTS
import Card from '@components/common/card/Card';

// INDEX PAGE CONTAINER
interface IPlayer {
	card: number;
	name: string;
}

// INDEX PAGE CONTAINER
const IndexPageContainer = (): ReactElement => {
	/* Vars */
	let result: number = 0;
	const cards = [1, 2, 3, 5, 8, 13];

	/* States */
	const [players, setPlayers] = useState<IPlayer[]>([
		{ card: cards[2], name: 'Lais' },
		{ card: cards[2], name: 'Matheus' },
		{ card: 0, name: 'Rafael' },
		{ card: cards[2], name: 'Theo' },
	]);

	/* Handlers */
	const cardClickHandler = (value: number): void => {
		setPlayers(current =>
			current.map(obj => {
				if (obj.name === 'Rafael') {
					return { ...obj, card: value };
				}

				return obj;
			}),
		);
	};

	/* Utils */
	const getClosestCard = (result: number) => {
		return cards.reduce(function (prev, curr) {
			return Math.abs(curr - result) < Math.abs(prev - result) ? curr : prev;
		});
	};

	const getResult = (): number => {
		let votesSum: number = 0;

		const filteredPlayers = players.filter(player => player.card !== 0);
		filteredPlayers.forEach(player => (votesSum += player.card));

		result = votesSum / filteredPlayers.length;
		return result;
	};

	const cardsRenderer = (): ReactElement[] => {
		return cards.map(card => <Card clickHandler={cardClickHandler} value={card} key={card} />);
	};

	const playersRenderer = (): ReactElement[] => {
		return players.map(player => (
			<p style={{ padding: 5, marginRight: 15 }}>
				<strong>Nome: </strong> {player.name}
				<br />
				<strong>Voto: </strong> {player.card}
			</p>
		));
	};

	/* Render */
	return (
		<>
			<h1>Planning Poker</h1>

			<h2>Jogadores</h2>
			<div style={{ display: 'flex' }}>{playersRenderer()}</div>

			<h2>Cartas</h2>
			{cardsRenderer()}

			<h2>Resultado</h2>
			{getResult()}

			<h2>Carta mais próxima</h2>
			{getClosestCard(result)}
		</>
	);
};

export default IndexPageContainer;
