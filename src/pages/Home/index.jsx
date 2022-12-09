import View from './view'
import { Amplify } from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
function Home (){
    return (
        <>
            <View />
        </>
    )
}

export default withAuthenticator(Home)