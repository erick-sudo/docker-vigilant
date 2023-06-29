import React, { useEffect, useState } from "react";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://3.80.47.206:5000/users").then((response) => {
      if (response.status < 400) {
        response.json().then((data) => {
          setUsers(data);
        });
      }
    });
  }, []);

  return (
    <div className="bg-slate-900 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-24 pt-6 gap-4 px-4">
      {users.map((user, index) => {
        return (
          <div key={index} className="bg-white rounded shadow-lg shadow-white border border-slate-900">
            <div className="grid grid-cols-2 py-2 px-4 gap-4">
              <h2 className="font-bold text-end">Id</h2>
              <h2>{user.id}</h2>
            </div>
            <div className="grid grid-cols-2 py-2 px-4 gap-4">
              <h2 className="font-bold text-end">Username</h2>
              <h2>{user.username}</h2>
            </div>
            <div className="grid grid-cols-2 py-2 px-4 gap-4">
              <h2 className="font-bold text-end">Email</h2>
              <h2>{user.email}</h2>
            </div>
            <div className="grid grid-cols-2 py-2 px-4 gap-4">
              <h2 className="font-bold text-end">Age</h2>
              <h2>{user.age}</h2>
            </div>
            <div className="grid grid-cols-2 py-2 px-4 gap-4">
              <h2 className="font-bold text-end">Gender</h2>
              <h2>{user.gender}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
