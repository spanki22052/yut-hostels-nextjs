import Nav from "../components/nav";
import SearchBar from "../components/searchBar";
import CardsFilter from "../components/cardsFilter";
import CardsSlider from "../components/cardsSlider";

export default function MainPage() {
	return (
		<>
			<Nav>
				<div className="title">Привет, дорогой гость!</div>
				<div className="suptitle">
					Ищешь комфортный, приятный, хостел, расположенный около метро?
        		</div>
				<CardsSlider />
				<SearchBar />
				<CardsFilter overflow='auto' height='500px' />
			</Nav>
			<style jsx>{`
        .title {
          font-family: "Montserrat", sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 34px;
          line-height: 41px;
          margin-bottom: 5px;
          color: #535048;
		  }

        .suptitle {
          font-family: "Montserrat", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 26px;
          line-height: 32px;
          color: #988a7a;
          margin-bottom: 70px;
		  }
		  
		  @media (max-width: 770px){
			  .title{
				  font-size:28px;
			  }
			  .suptitle{
				  font-size:20px;
				  margin-bottom:40px;
			  }
		  }
		  @media (max-width: 560px){
			.title{
				font-size:23px;
			}
			.suptitle{
				font-size:19px;
				margin-bottom: 20px;		
			}
		  }
		  @media (max-width: 400px){
			.title{
				font-size:20px;
			}
			.suptitle{
				font-size:16px;
				margin-bottom: 15px;		
			}
		  }	
      `}</style>
		</>
	);
}
