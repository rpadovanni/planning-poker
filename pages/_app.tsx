import '../src/styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';

// _APP
const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>Planning Poker - @rpadovanni</title>
				<meta name="description" content="Planning Poker" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Component {...pageProps} />
		</>
	);
};

export default App;
