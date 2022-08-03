import Head from "next/head";
import '../styles/globals.css';
import '../styles/skills.css';
const Rokstar = ({Component, pageProps}) => {
    return (
        <>
            <Head>
                <title>Alan Ng</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default Rokstar
