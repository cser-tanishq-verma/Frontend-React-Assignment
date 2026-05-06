import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increaseCount, decreaseCount, fetchUser, getOneUser } from "./feature/UserSlice";

const CounterComponent = () => {
    let data = useSelector(prev => prev.user);
    let dispatch = useDispatch();
    console.log(data)
    return (
        <div>
            {data.count}
            <button onClick={() => {
                dispatch(increaseCount())
            }}>inc</button>
            <button onClick={() => {
                dispatch(decreaseCount())
            }}>dec</button>
            <hr />
            <button onClick={() => {
                dispatch(fetchUser())
            }}>getuser</button>
            <hr />
            {
                data.oneUser && <>
                    <p>{data.oneUser.name}</p>
                </>
            }
            <hr />
            <input
  placeholder="Enter github user id"
  value={data.id}
  onChange={(e) => setUserId(e.target.value)}
/>

<button onClick={() => dispatch(getOneUser(userId))}>
  Get User By ID
</button>
            {data.user}
            <h3>All Users</h3>
            {data.users &&
                data.users.map((u) => (
                    <div key={u.id}>
                        <p>{u.login}</p>
                    </div>
                ))}

        </div>
    )
}

export default CounterComponent
// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   increaseCount,
//   decreaseCount,
//   fetchUser,
//   getOneUser
// } from "./feature/UserSlice";

// const CounterComponent = () => {
//   const data = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   const [username, setUsername] = useState("");

//   return (
//     <div>
//       <h2>Count : {data.count}</h2>

//       <button onClick={() => dispatch(increaseCount())}>Inc</button>
//       <button onClick={() => dispatch(decreaseCount())}>Dec</button>

//       <hr />

//       {/* GET ALL USERS */}
//       <button onClick={() => dispatch(fetchUser())}>
//         Get Github Users
//       </button>

//       <hr />

//       {/* GET ONE USER */}
//       <input
//         placeholder="Enter github username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <button onClick={() => dispatch(getOneUser(username))}>
//         Get One User
//       </button>

//       <hr />

//       {/* LOADING */}
//       {data.loading && <h3>Loading...</h3>}

//       {/* SHOW ONE USER */}
//       {data.oneUser && (
//         <div>
//           <h3>Single User</h3>
//           <p>Name: {data.oneUser.login}</p>
//         </div>
//       )}

//       <hr />

//       {/* SHOW ALL USERS */}
//       <h3>All Users</h3>
//       {data.users &&
//         data.users.map((u) => (
//           <div key={u.id}>
//             <p>{u.login}</p>
//             <img src={u.avatar_url} width="50" />
//           </div>
//         ))}
//     </div>
//   );
// };

// export default CounterComponent;