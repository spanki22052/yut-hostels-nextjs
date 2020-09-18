import AboutUsPage from '../components/aboutUsPage.js';
import Nav from '../components/nav';
import Head from 'next/head';

export default function AboutUs() {
	return (
		<>
			<Head>
				<title>О сети хостелов Уют</title>
			</Head>
			<Nav>
				<AboutUsPage />
			</Nav>
		</>
	)
}