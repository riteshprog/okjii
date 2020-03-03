import React from "react";

const InputPage = () => {
  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon">
          91+
        </span>
      </div>
      <input type="number" className="form-control" placeholder="|Mobile Number" aria-label="Username" aria-describedby="basic-addon" />
    </div>
  );
}

export default InputPage;