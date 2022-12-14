import axios from "axios"
import { useState } from "react"
import { API } from "aws-amplify"
export default function Scheduler() {
    const [scheduleValue, setScheduleValue] = useState(null)
    const [scheduleUnit, setScheduleUnit] = useState("minutes")
    const [searchText, setSearchText] = useState("")
    const [tweetLimit, setTweetLimit] = useState(10)
    const [jobSubmitted, setJobSubmitted] = useState(false)
    const [loader, setLoader] = useState(false)
    const runScraper = async () => {
        try {
            console.log("Run Scraper Called")
            setLoader(true)
            let postData = {
                searchText: searchText,
                tweetLimit: tweetLimit
            }
            console.log({ postData })
            API.post('scraperapi', '/start', {
                body: postData
            }).then((res) => {
                console.log("Response: ", res)
                setJobSubmitted(true)
            }).catch((error) => {
                console.log("Error in making API Call to runScraper", error)
            })
            setLoader(false)
        } catch (error) {
            console.log("Error in making API Call to runScraper", error)
            setLoader(false)
        }
    }
    const scheduleScraper = async () => {
        try {
            setLoader(true)
            console.log("Schedule Scraper Called")
            let postData = {
                searchText: searchText,
                tweetLimit: tweetLimit,
                scheduleValue: scheduleValue,
                scheduleUnit: scheduleUnit
            }
            console.log({ postData })

            API.post('scraperapi', '/schedule', {
                body: postData
            }).then((res) => {
                console.log("Response: ", res)
                setJobSubmitted(true)
                setLoader(false)

            }).catch((error) => {
                console.log("Error in making API Call to runScraper", error)
                setLoader(false)

            })
        } catch (error) {
            console.log("Error in making API Call to scheduleScraper", error)
        }
    }
    return (
        <>

            <input type="text" placeholder="Enter Search Phrase" onChange={(e) => {
                setSearchText(e.target.value)
            }} />
            <input type="number" placeholder="Enter Tweet Limit" onChange={(e) => {
                setTweetLimit(e.target.value)
            }} />
            {loader && <div>
                <p>Please Wait...</p></div>}
            {jobSubmitted && <div style={{ color: "green" }}>
                <p>Job Submitted Successfully</p>
            </div>}
            <div >
                <h2>Start Scraper Job</h2>
                <button onClick={runScraper}>Run Scraper Job</button>
            </div>
            <div >
                <h2>Schedule Scraper Job</h2>
                <p>A schedule that runs at a regular rate, such as every 10 minutes.</p>
                <input type='number' placeholder="X" onChange={(e) => {
                    setScheduleValue(parseInt(e.target.value))
                }} />
                <select onChange={(e) => {
                    setScheduleUnit(e.target.value)
                }}>
                    <option defaultChecked value={"minutes"} >Minutes</option>
                    <option value={"hours"}>Hours</option>
                    <option value={"days"}>Days</option>

                </select>
                <button onClick={scheduleScraper}>Schedule Scraper</button>
            </div>
        </>
    )
}