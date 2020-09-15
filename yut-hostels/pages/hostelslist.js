import Nav from "../components/nav";
import SearchBar from "../components/searchBar";
import CardsFilter from "../components/cardsFilter";

export default function HostelListPage() {
	return (
		<>
			<Nav>
				<SearchBar />
				<CardsFilter overflow='visible' />
			</Nav>
		</>
	)
}