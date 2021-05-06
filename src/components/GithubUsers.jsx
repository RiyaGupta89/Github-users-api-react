import React, {useEffect, useState} from "react";
import Footer from "./Footer";

const GithubUsers = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
   const getData = async () => {
    const response = await fetch("https://api.github.com/users");
    setUsers(await response.json())
   }
   getData();
  }, [])

  return (
    <>
      <div className="wrap">
        <h3>List of Github Users</h3>
        <div className="container">
        {users.map((curr) => {
          return (
            <>
            <div className="card">
                <div className="img-left">
                    <img className="image" src={curr.avatar_url} alt="user"/>
                </div>
                <div className="text-right">
                    <div className="heading-div"><p>{curr.login}</p></div>
                    <div className="para-div"><p>Web Developer</p></div>
                    <div className="fol-update">
                        <div className="follower">
                        <p className="text">Followers</p>
                        <p className="num">38</p>
                        </div>
                        <div className="following">
                        <p className="text">Following</p>
                        <p className="num">298</p>
                        </div>
                        <div className="rating">
                        <p className="text">Rating</p>
                        <p className="num">89</p>
                        </div>
                    </div>
                </div>
            </div>
            </>
          )
        })}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default GithubUsers;
