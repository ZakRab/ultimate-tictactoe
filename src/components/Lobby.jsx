import React from "react";

const Lobby = () => {
  return (
    <>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="enter game lobby"
        />
        <button className="btn btn-primary" onClick={{}}>Join</button>
        <button className="btn btn-primary">Create</button>
      </div>
    </>
  );
};

export default Lobby;
