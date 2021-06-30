import Head from 'next/head';
import HomePage from "../components/home/Home";
import Profile from "../components/profile/profile";
export default function Home() {
  return (
    <div>
      <Head>
        <title>home page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <HomePage/>
        {/*<Profile FirstName='sarina' LastName='zeitooni'/>*/}
    </div>
  )
}
