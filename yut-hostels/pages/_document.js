import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<Head>
					<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&family=Playfair+Display:wght@500;700&display=swap" rel="stylesheet" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}