import { Public } from "./pages/Public";
import { Private } from "./pages/Private";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./components/redux/token/tokenActions";
import { setUser } from "./components/redux/user/userActions";

function App() {
  const token = useSelector((state) => state.token.token);
  const dispatch = useDispatch();

  dispatch(setToken(localStorage.getItem("token")));
  dispatch(setUser(localStorage.getItem("user")));

  if (token) {
    return <Private />;
  }
  return <Public />;
}

export default App;
