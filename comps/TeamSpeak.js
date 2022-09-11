import { useEffect } from "react";




const TeamSpeak = ({ clients, channels }) => {

    useEffect(() => {
        console.log('hey')
        createChannelsArray(channels["body"]);
    }, [])

    const getChannelByID = (obj, cid) => {
        for (let i = 0; i <= Object.keys(obj).length; i++) {
            if (obj[i]["cid"] === cid) {
                return obj[i];
            }
        }
        // for (let i = 0; i < Object.keys(allChannels).length; i++) {
        //     if (allChannels[i]["cid"] === cid) {
        //         console.log(allChannels[i])
        //         return allChannels[i];
        //     }
        // }
    }


    var allChannels = [];
    const createChannelsArray = (obj) => {
        for (let i = 0; i < Object.keys(obj).length; i++) {
            var currentChannel = obj[i]
            allChannels.push({
                "channel_name": obj[i]["channel_name"],
                "cid": obj[i]["cid"],

            })
        }
        console.log(allChannels)
    }


    return (
        <>

            <div className="flex w-full h-screen ">
                <div className="m-auto mt-40">
                    <div className="bg-cgray p-20 rounded-3xl shadow-lg shadow-black">{clients["body"].map(client => {
                        let channel = getChannelByID(channels["body"], client["cid"]);
                        let channel_name = channel["channel_name"];
                        if (!client["client_nickname"].includes("serveradmin")) {

                            return (
                                <>
                                    <h1 key={client["clid"]} className="m-auto font-dmsans text-center text-white mt-10 mb-10 text-2xl">{client["client_nickname"]}</h1>
                                </>
                            )
                        }

                    })}</div>
                </div>
            </div>
        </>
    );
}

export default TeamSpeak;