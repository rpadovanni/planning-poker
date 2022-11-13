import { ReactElement } from 'react';

// INDEX PAGE CONTAINER
interface IPlayers {
	card: number;
	name: string;
}

// INDEX PAGE CONTAINER
const IndexPageContainer = (): ReactElement => {
	/* Vars */
	let result: number = 0;

	const cards = [1, 2, 3, 5, 8, 13];
	const players: IPlayers[] = [
		{ card: cards[4], name: 'Lais' },
		{ card: cards[5], name: 'Matheus' },
		{ card: cards[5], name: 'Rafael' },
		{ card: cards[5], name: 'Theo' },
	];

	/* Utils */
	const getClosestCard = (result: number) => {
		return cards.reduce(function (prev, curr) {
			return Math.abs(curr - result) < Math.abs(prev - result) ? curr : prev;
		});
	};

	const getResult = (): number => {
		let votesSum: number = 0;

		players.forEach(player => (votesSum += player.card));

		result = votesSum / players.length;
		return result;
	};

	const cardsRenderer = (): ReactElement[] => {
		return cards.map(card => <span style={{ padding: 5 }}>{card}</span>);
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
