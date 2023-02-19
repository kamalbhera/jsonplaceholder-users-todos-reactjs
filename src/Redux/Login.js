import { useSelector, useDispatch } from "react-redux";
import { validateUser } from "./store/actions";
const Login = () => {
  const user = useSelector((state) => state.lr.users);
  const dispatch = useDispatch();
  const loginHandler = (e) => {
    const loginDet = e.target.options[e.target.selectedIndex].text;
    // dispatch({ type: LOGIN, loginDet });
    dispatch(validateUser(loginDet));
  };
  return (
    <div className="customeDiv">
      <h2>Login Component</h2>
      <hr />
      <select onChange={(e) => loginHandler(e)}>
        {user.map((item, index) => {
          return <option key={index}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default Login;
