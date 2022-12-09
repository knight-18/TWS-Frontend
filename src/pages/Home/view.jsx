import Jobs from "./jobs"
import Scheduler from "./scheduler"
export default function View (){
    return (
        <div style={{"textAlign": "center"}}>
            <h1>Twitter Web Scraper Scheduler</h1>
            <Scheduler />
            <Jobs />
        </div>
    )
}