import Nav from "../components/nav";
import SearchBar from "../components/searchBar";
import CardsFilter from "../components/cardsFilter";
import Head from 'next/head';

export default function HostelListPage() {
	return (
		<>
			<Head>
				<meta name="description" content={`Cписок хостелов Уют`} />
				<title>Список хостелов Уют</title>
			</Head>
			<Nav>
				<SearchBar showSearchbar={true} showCategories={false} />
			</Nav>
		</>
	);
}
