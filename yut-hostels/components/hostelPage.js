import Nav from "./nav";
import { useState } from "react";
import { Carousel, Container, ProgressBar, Row, Col } from "react-bootstrap";

export default function HostelPage(){

  return (
	<>
		<Nav />
		<Container>
			<Row>
				<Col>
					<div>Виджет букинга</div>
				</Col>
				<Col>
					<h1 className="title">Диско например</h1>
					<h1 className="subtitle">Отличный, недорогой хостел в неплохом районе! Желающие, встречайте! Хостел лучший из лучших!</h1>
					<ProgressBar now={60}/>
				</Col>
			</Row>
			<Row>
				<Carousel>
					  <Carousel.Item>

					    <img
					      className="d-block w-100"
					      src="https://sib.fm/storage/article/February2020/XRpypjHoFMinTRFkpznd.jpg"
					      alt="First slide"
						/>
						
					    <Carousel.Caption>
					      <h3>First slide label</h3>
					      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
						
					  </Carousel.Item>

					  <Carousel.Item>

					    <img
					      className="d-block w-100"
					      src="https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2018-05/Depositphotos_37289893_l-2015.jpg?itok=6qX1E6gM"
					      alt="Third slide"
					    />

					    <Carousel.Caption>
					      <h3>Second slide label</h3>
					      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
						
					  </Carousel.Item>

					  <Carousel.Item>

					    <img
					      className="d-block w-100"
					      src="https://s12.stc.all.kpcdn.net/share/i/12/11049186/inx960x640.jpg"
					      alt="Third slide"
					    />

					    <Carousel.Caption>
					      <h3>Third slide label</h3>
					      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
						</Carousel.Caption>
						
					  </Carousel.Item>
				</Carousel>
			</Row>
		</Container>

		<style jsx>
			{`.title {
	          font-family: "Montserrat", sans-serif;
	          font-style: normal;
	          font-weight: 600;
	          font-size: 34px;
	          line-height: 41px;
	          margin-bottom: 5px;
	          color: #535048;
	        }

	        .subtitle {
	          font-family: "Montserrat", sans-serif;
	          font-style: normal;
	          font-weight: 500;
	          font-size: 26px;
	          line-height: 32px;
	          color: #988a7a;
	          margin-bottom: 70px;
	        }`}
	  </style>
	  
	</>
  );
}
