import Document, { Html, Head, Main, NextScript} from 'next/document';

export default class MyDoxument extends Document {
    render () {
        return (
            <Html>

                <Head>
                    <link rel="shortcut icon" href="/favicon.png" type="image/png"/><link rel="shortcut icon" href="/favicon.png" type="image/png"/>
                </Head>

                <body>
                    <Main />

                    <NextScript />
                </body>
            </Html>
        )
    }
}