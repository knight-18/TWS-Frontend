import logo from './logo.svg';
import { Amplify } from "aws-amplify";
import './App.css';
import Router from "./routes.jsx";
import awsExports from "./aws-exports";
Amplify.configure(awsExports)
function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;
