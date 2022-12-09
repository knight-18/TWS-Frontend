import axios from "axios"
import { useState } from "react"
import { API } from "aws-amplify"
export default function Jobs() {
    const [jobStatus, setJobStatus] = useState("COMPLETED")
    const [jobsData, setJobsData] = useState(null)
    const fetchJobs = async () => {
        try {
            const postData = {
                jobStatus
            }
            console.log("Fetch Jobs Called")
            console.log({ jobStatus })
            // console.log(`${process.env.REACT_APP_API_ENDPOINT}/jobs`)
            console.log({ postData })
            API.post('scraperapi', '/jobs', {
                body: postData
            }).then((res) => {
                console.log("Response: ", res)
                setJobsData(res.SentimentDetectionJobPropertiesList)
            }).catch((error) => {
                console.log(error.response)
            })
        } catch (error) {
            console.log("Error in fetchJobs: ", error)
        }
    }
    return (
        <>
            <h2>Comprehend Sentiment Analysis Job Status</h2>
            <select onChange={(e) => { setJobStatus(e.target.value) }}>
                <option value="COMPLETED">Completed</option>
                <option value="FAILED">Failed</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="SUBMITTED">Submitted</option>

            </select>
            <br />
            <button onClick={fetchJobs}>Fetch Jobs </button>
            <br />
            {(jobsData && jobsData.length) && (<table>
                <tr>
                    <th>Job Id</th>
                    <th>Job Name</th>
                    <th>Job Status</th>
                </tr>
                {jobsData.map((jobData) => {
                    return (
                        <tr key={jobData.JobId}>
                            <td>{jobData.JobId}</td>
                            <td>{jobData.JobName}</td>
                            <td>{jobData.JobStatus}</td>
                        </tr>)
                })}
            </table>)}
        </>
    )

}