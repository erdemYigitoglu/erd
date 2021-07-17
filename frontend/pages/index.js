import Head from "next/head";
import About from "./about"
export default function Home({description}) {
    return (
        <>
        <Head>
            <title>oku yaz </title>
         <meta name="description" content="a page for bloggers"/>
        </Head>
        <h1>hello</h1>
<About title= "myname" description ="gel buraya" description= "güzellik"/>
    </>)
}
