import Nav from "../components/nav";
import SearchBar from "../components/searchBar";
import CardsSlider from "../components/cardsSlider";
import Link from "next/link";

export default function MainPage() {
  return (
    <>
      <title>Сеть хостелов Уют</title>
      <Nav>
        <div className="title">Привет, дорогой гость!</div>
        <div className="suptitle">
          Ищешь комфортный, приятный, хостел, расположенный около метро?
        </div>
        <CardsSlider />
        <br />
        <br />
        <div className={"our-hostels"}>
          <h1>Наши хостелы</h1>
          <div className="line"></div>
          <p>Нажмите на карточку для перехода</p>
        </div>
        <SearchBar showSearchbar={false} showCategories={true} />
        <br />
        <Link href="/hostelslist">
          <button>Показать еще</button>
        </Link>
        <br />
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

        button {
          width: 250px;
          height: 50px;

          background: rgba(152, 138, 122, 0.3);
          border-radius: 5000px;

          font-family: Montserrat;
          font-weight: 500;
          font-size: 24px;
          text-align: center;

          color: #806749;
          border: 0;
          margin: auto;
          display: block;
        }

        button:hover {
          background: rgba(152, 138, 122, 0.4);
        }

        button:active {
          background: rgba(152, 138, 122, 0.45);
        }

        .our-hostels {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        h1 {
          font-family: Montserrat;
          font-weight: bold;
          font-size: 32px;
          text-align: center;
          color: #806749;
        }

        .line {
          width: 80%;
          max-width: 500px;
          height: 0px;

          border-bottom: 0.5px solid rgb(128, 103, 73, 0.6);
        }

        p {
          font-family: Montserrat;
          font-size: 24px;
          text-align: center;

          color: #bfaf9c;
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

        @media (max-width: 770px) {
          .title {
            font-size: 28px;
          }
          .suptitle {
            font-size: 20px;
            margin-bottom: 40px;
          }
        }
        @media (max-width: 560px) {
          .title {
            font-size: 23px;
          }
          .suptitle {
            font-size: 19px;
            margin-bottom: 20px;
          }
        }
        @media (max-width: 400px) {
          .title {
            font-size: 20px;
          }
          .suptitle {
            font-size: 16px;
            margin-bottom: 15px;
          }
        }
      `}</style>
    </>
  );
}
