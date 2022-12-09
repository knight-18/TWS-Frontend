import axios from "axios"
import { useState } from "react"

export default function Scheduler() {
    const [scheduleValue, setScheduleValue] = useState(null)
    const [scheduleUnit, setScheduleUnit] = useState("minutes")
    const [searchText, setSearchText] = useState("")
    const runScraper = async () => {
        try {
            console.log("Run Scraper Called")
            let postData = {
                searchText: searchText
            }
            console.log({postData})
            let response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/task/start`, postData)
        } catch (error) {
            console.log("Error in making API Call to runScraper", error)
        }
    }
    const scheduleScraper = async () => {
        try {
            console.log("Schedule Scraper Called")
            let postData = {
                searchText: searchText
            }
            console.log({postData})
            console.log({scheduleValue})
            console.log({scheduleUnit})
            let response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/task/schedule`, postData)
        } catch (error) {
            console.log("Error in making API Call to scheduleScraper", error)
        }
    }
    return (
        <>
            <h2>Start Scraper Job</h2>
            <input type="text" placeholder="Enter Search Phrase" onChange={(e)=>{
                setSearchText(e.target.value)
            }}/>
            <button onClick={runScraper}>Run Scraper Job</button>
            <br />
            <h2>Schedule Scraper Job</h2>
            <input type='number' placeholder="X" onChange={(e)=>{
                setScheduleValue(parseInt(e.target.value))
            }} />
            <select onChange={(e)=>{
                setScheduleUnit(e.target.value)
            }}>
                <option defaultChecked value={"minutes"} >Minutes</option>
                <option value={"hours"}>Hours</option>
                <option value={"days"}>Days</option>

            </select>
            <br />

            <button onClick={scheduleScraper}>Schedule Scraper</button>
        </>
    )
}