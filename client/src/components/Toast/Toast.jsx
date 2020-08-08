import React, { useContext } from "react";
import StatusContext from "../../utils/StatusContext";

const Toast = () => {
  const status = useContext(StatusContext);
  const style = {
    error: {
      color: "#721c24",
      backgroundColor: "#f8d7da",
      borderColor: "#f5c6cb",
      padding: ".75rem 1.25rem",
      marginBottom: "1rem",
      border: "1px solid transparent",
      borderRadius: ".25rem",
    },
    success: {
      color: "#155724",
      backgroundColor: "#d4edda",
      borderColor: "#c3e6cb",
      padding: ".75rem 1.25rem",
      marginBottom: "1rem",
      border: "1px solid transparent",
      borderRadius: ".25rem",
    },
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          {status.message && (
            <div
              style={
                status.messageType ? style[status.messageType] : style.error
              }
              role="alert"
              className="center-align"
            >
              {status.message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Toast;
