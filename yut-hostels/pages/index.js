import Nav from "../components/nav";
import SearchBar from "../components/searchBar";
import CardsFilter from "../components/cardsFilter";
import SimpleSlider from "../components/cardsSlider";

export default function MainPage() {
  return (
    <>
      <Nav>
        <div className="title">Привет, дорогой гость!</div>
        <div className="suptitle">
          Ищешь комфортный, приятный, хостел, расположенный около метро?
        </div>
        <SimpleSlider />
        <SearchBar />
        <CardsFilter overflow="auto" height="500px" />
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
      `}</style>
    </>
  );
}
