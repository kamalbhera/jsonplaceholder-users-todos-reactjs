import React from "react";
import { useParams, useHistory, Prompt, useLocation } from "react-router";

function Tdetails() {
  const params = useParams();
  const history = useHistory();
  const location = useLocation();
  console.log("Location - ", location.search);
  // console.log(history);
  // console.log(params);
  const dataEntered = false;

  function useQuery() {
    // return new URLSearchParams("?price=$20");
    return new URLSearchParams(location.search);
  }
  const query = useQuery(); //object
  console.log(query.get("price"));
  return (
    <div>
      {/* <Prompt when={!dataEntered} message="Do you want to leave this page" /> */}
      <Prompt
        when={!dataEntered}
        message={(location, action) => {
          if (location.pathname === "/about") {
            return false;
          } else {
            return true;
          }
        }}
      />
      <h1>Tutorial Details - {params.title}</h1>
      <h2>Price is - {query.get("price")}</h2>
      <button onClick={() => history.goBack()}>Go Back!</button>
      <button onClick={() => history.push("/home")}>Home</button>
      <button onClick={() => history.replace("/tutorial/regex")}>Regex</button>
    </div>
  );
}

export default Tdetails;
