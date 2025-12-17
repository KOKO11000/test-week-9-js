import fs from "fs"
const API_URL = " https://spiestestserver-8l55.onrender.com"

async function getPeopleList() {
    try {
        const require = await fetch(API_URL+"/people")
        const listPeople = await require.text()
        fs.writeFile("PEOPLE.json",listPeople,(err)=>{
            if (err) {
                console.log(err.message);
            }console.log("The data saved successfully");
        })
    } catch (error) {
        console.log("server didn't success ", error);
        
    }
}

async function getCallRecordsOrTranscriptions() {
    try {
        const require = await fetch(API_URL+"/transcriptions")
        const transcriptions = await require.text()
        fs.writeFile("TRANSCRIPTIONS.json",transcriptions,(err)=>{
            if (err) {
                console.log(err.message);
            }console.log("The data saved successfully");
        })
        
    } catch (error) {
        console.log(error);
    }
    

}

getCallRecordsOrTranscriptions()