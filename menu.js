import input from "analiza-sync"
import { getPeopleList,getCallRecordsOrTranscriptions,searchByName,searchByAge } from "./requires.js"
function menu() {
    let flag = true
    while (flag) {
        const menu = input(`
                1. Get people list.
                2. Get call Records/Transcriptions.
                3. Search people by name.
                4. Search people by age.
                5. Find dangerous people.
                6. Exit.
                : `)
        switch (menu) {
            case "1":
                console.log("got all people list")
                getPeopleList()
                break;
            case "2":
                console.log("got all records");
                getCallRecordsOrTranscriptions()
                break;
            case "3":
                console.log("Search by name");
                searchByName()
                break;
            case "4":
                console.log("Search by age");
                searchByAge()
                break;
            case "5":
                console.log("Find dangerous people");
                
                break;
            case "6":
                console.log("Goodby until next time ☺");
                flag = false
                break;
            default:
                console.log("Worng please choose correct number !!!");
                menu
                break;
        }
}}
menu()