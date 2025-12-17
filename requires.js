import input from "analiza-sync"
import fs from "fs"
export const API_URL = " https://spiestestserver-8l55.onrender.com"

export async function getPeopleList() {
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

export async function getCallRecordsOrTranscriptions() {
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


async function searchByName() {
    fs.readFile("./PEOPLE.json","utf-8",(err,dataStr)=>{
        if (err) {
            console.log(err.message);
        }
        else{
            const data = JSON.parse(dataStr)
            const result = [] 
            let full
            const getName = input("What the name you looking for? :")
                data.forEach(obj => {
                    if (obj.name == getName) {
                        result.push(obj)
                        full = true
                        console.log(result);
                    }
                });
                if (!full) {
                    console.log("not found");
                };
        };
    });
};



async function searchByAge() {
    fs.readFile("./PEOPLE.json","utf-8",(err,dataStr)=>{
        if (err) {
            console.log(err.message);
        }
        else{
            const data = JSON.parse(dataStr)
            const result = [] 
            let full
            const getAge = input("What the Age you looking for? :")
                data.forEach(obj => {
                    if (obj.age == getAge) {
                        result.push(obj)
                        full = true
                        console.log(result);
                    }
                });
                if (!full) {
                    console.log("not found");
                };
        };
    });
};
searchByName()