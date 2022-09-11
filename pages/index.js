import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../comps/NavBar'
import TeamSpeak from '../comps/TeamSpeak'
import styles from '../styles/Home.module.css'

export const getStaticProps = async () => {
  const res = await fetch("http://ts3.spreyo.tk:10080/1/clientlist", {
    method: "GET", headers: {
      "x-api-key": "BABLcrHE7oI0qnrOFH_s66Kzlp41ubCsbpnFp0q"
    }
  });
  const clients = await res.json();


  const channelRes = await fetch("http://ts3.spreyo.tk:10080/1/channellist", {
    method: "GET", headers: {
      "x-api-key": "BABLcrHE7oI0qnrOFH_s66Kzlp41ubCsbpnFp0q"
    }
  });
  const channels = await channelRes.json();

  return {
    props: {
      clients: clients,
      channels: channels
    }
  }
}

export default function Home({ clients, channels }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap" rel="stylesheet" />
      </Head>
      <div className='bg-cblack'>
        <div className=''>

          {/* <NavBar /> */}
          <div className='flex justify-center'>
            <img src="/ts3blue.png" className='w-2/12 text-cblue text-center mt-10'></img>

          </div>
          <TeamSpeak clients={clients} channels={channels} />
        </div>
      </div>
    </>
  )
}
