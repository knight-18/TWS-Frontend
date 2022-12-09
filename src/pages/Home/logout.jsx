import { Auth } from "aws-amplify"
export default function Signout() {
    const handleSignout = async () => {
        try {
            await Auth.signOut()
        } catch (error) {
            console.log("Error Signing Out: ", error)
        }
    }
    return (
        <div style={{ "position": "absolute", "right": "0", "top": "0" }}>
            <button onClick={handleSignout}>Sign Out</button>
        </div>
    )
}