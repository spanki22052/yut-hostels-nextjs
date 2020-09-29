import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<script type="text/javascript" jsx>{`
						(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
						m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
						(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

						ym(67478275, "init", {
								clickmap:true,
								trackLinks:true,
								accurateTrackBounce:true
					});`}
					</script>
					{/* <noscript><div><img src="https://mc.yandex.ru/watch/67478275" style="position:absolute; left:-9999px;" alt="" /></div></noscript> */}
					<meta name="language" content="ru" />
					{/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
					<meta name="googlebot-news" content="nosnippet" />
					<meta name="yandex-verification" content="fd16859da2abddbd" />
					<meta
						name="google-site-verification"		
						content="FTe50ALqpfNJHROZTMKhdNctXVlC0K7y0XmTkfZh-SE"
					/>
					<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
					<meta
						name="description"
						content={`Сеть хостелов "Уют" предоставляет одни из лучших, бюджетных и уютных хостелов в городе! Мы ждем вас, друзья!`}
					/>
					<meta
						name="Keywords"
						content="дешевый, недорогой хостел, общежитие, хостел, сеть хостелов уют, уют, хостел, дешевое общежитие"
					/>

					<link href="dist/hamburgers.css" rel="stylesheet" />
					<link
						href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&display=swap"
						rel="stylesheet"
					></link>
					<link
						rel="stylesheet"
						type="text/css"
						charSet="UTF-8"
						href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
					/>
					<link
						rel="stylesheet"
						type="text/css"
						href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
						rel="stylesheet"
					></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
