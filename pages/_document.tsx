import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';

export default class AppDocument extends Document {

	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const initialProps  = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render () {
		return (
			<Html lang='ru'>
				<Head/>
				<body>
					<Main/>
					<NextScript/>
				</body>
			</Html>
		);
	}
}