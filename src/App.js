import "./App.css";
import SignIn from "./components/SignIn";
import Chat from "./components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user] = useAuthState(auth);
  return <>{user ? <Chat /> : <SignIn />}</>;
}

export default App;
