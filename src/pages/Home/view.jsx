import Jobs from "./jobs"
import Scheduler from "./scheduler"
import Logout from './logout'
export default function View (){
    return (
        <div style={{"textAlign": "center"}}>
            <h1>Twitter Web Scraper Scheduler</h1>
            <Scheduler />
            {/* <Jobs /> */}
            <Logout />
        </div>
    )
}