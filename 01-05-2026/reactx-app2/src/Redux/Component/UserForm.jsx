import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const UserForm = () => {
  let [state, setState] = useState({ name: "" });

  let data = useSelector((prev) => prev.users);
  console.log(data);

  let dispatch = useDispatch();

  return (
    <div>
      {data.user.map((v) => {
        return (
          <Fragment key={v.name}>
            <h3>{v.name}</h3>
          </Fragment>
        );
      })}
    </div>
  );
};

export default UserForm;