import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../comps/NavBar'
import TeamSpeak from '../comps/TeamSpeak'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Login } from '../comps/Login'
import { Closed } from '../comps/Closed'
import { Connections } from '../comps/Connections'

export const getServerSideProps = async () => {
  const res = await fetch("http://ts3.spreyo.xyz:10080/1/clientlist", {
    method: "GET", headers: {
      "x-api-key": "BABLcrHE7oI0qnrOFH_s66Kzlp41ubCsbpnFp0q"
    }
  });
  const clients = await res.json();


  const channelRes = await fetch("http://ts3.spreyo.xyz:10080/1/channellist", {
    method: "GET", headers: {
      "x-api-key": "BABLcrHE7oI0qnrOFH_s66Kzlp41ubCsbpnFp0q"
    }
  });
  const channels = await channelRes.json();

  const logsRes = await fetch("http://ts3.spreyo.xyz:10080/1/logview", {
    method: "GET", headers: {
      "x-api-key": "BABLcrHE7oI0qnrOFH_s66Kzlp41ubCsbpnFp0q"
    }
  });
  const logs = await logsRes.json();

  return {
    props: {
      clients: clients,
      channels: channels,
      logs: logs["body"],
    }
  }
}

export default function Home({ clients, channels, logs }) {
  const [connections, setConnections] = useState([]);
  useEffect(() => {
    var cons = [];
    console.log(logs);
    logs.forEach(log => {
      if (log["l"].includes("client") && !log["l"].includes("query") && !log["l"].includes("disconnected")) {
        const username = log["l"].match(/(?<=connected ')[^']+(?=')/g)[0];
        const dateTimeString = log["l"].match(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}/g)[0];
        const year = dateTimeString.match(/\d{4}/g)[0];
        const month = dateTimeString.match(/\d{2}/g)[2];
        const day = dateTimeString.match(/\d{2}/g)[3];
        const timeFull = dateTimeString.match(/\d{2}:\d{2}/g)[0];
        const hour = timeFull.match(/\d{2}/g)[0]
        const minute = timeFull.match(/\d{2}/g)[1]
        const time = `${parseInt(hour) + 2}:${minute}`;
        const action = log["l"].match(/(dis)?connected/g)[0];


        // connect disconnect
        console.log(year, month, day, time, username, action);
        cons.push({
          "year": year,
          "month": month,
          "day": day,
          "time": time,
          "username": username,
          "action": action
        })
      }
    })
    cons.reverse();
    cons = cons.slice(0, 5);
    setConnections(cons);
  }, [])

  useEffect(() => {
    console.log(connections)
  }, [connections])

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap" rel="stylesheet" />
      </Head>
      <>
        <>
          <div className='bg-cblack'>
            <div className=''>

              {/* <NavBar /> */}
              <div className='flex justify-center'>
                {/* <img src="/ts3blue.png" className='w-2/12 text-cblue text-center mt-10'></img> */}
                <h1 className="text-7xl text-cblue font-extrabold font-sans  ">ts3.spreyo.xyz</h1>


              </div>
              <div className='flex flex-col w-full h-full'>
                <TeamSpeak clients={clients} channels={channels} />
                <div className='flex justify-center mt-5'>
                  <div className=' w-72 h-1 bg-gray-600 rounded-lg'></div>
                </div>
                <Connections connections={connections} />
              </div>
            </div>
          </div>

        </>

      </>

    </>
  )
}
