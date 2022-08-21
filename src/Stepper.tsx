import * as React from "react";
import { Options, Props } from "./types.js";

const Node: React.FC<Options & Props> = ({
  id,
  text,
  status,
  color,
  squared,
  noAnimation,
}) => {
  return (
    <div
      className={noAnimation ? "" : "fadein-ball"}
      style={{
        backgroundColor:
          status === "completed" ? color ?? "green" : "transparent",
        borderRadius: squared ? "0px" : "999px",
        width: "20px",
        height: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        position: "relative",
        border: `2px solid  ${color ?? "green"}`,
      }}
    >
      {status === "completed" ? "✅" : id}
      <p
        style={{
          position: "absolute",
          top: "10px",
          left: `${text.length ?? 0}`,
          color: "black",
        }}
      >
        {text}
      </p>
      {status === "loading" && (
        <p
          style={{
            position: "absolute",
            top: "20px",
            left: `${text.length}`,
            color: "black",
          }}
        >
          ...
        </p>
      )}
    </div>
  );
};

const Line: React.FC<Options> = ({ color, squared, noAnimation }) => {
  return (
    <div
      className={noAnimation ? "" : "fadein-line"}
      style={{
        backgroundColor: color ?? "green",
        borderRadius: squared ? "0px" : "999px",
        width: "100px",
        height: "1px",
        marginLeft: "-2px",
        marginRight: "-2px",
        border: `1px solid  ${color ?? "green"}`,
      }}
    ></div>
  );
};

export const Stepper: React.FC<{ arr: Props[]; options?: Options }> = ({
  arr,
  options,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10rem",
      }}
    >
      {arr.map((e, i, o) => {
        const prevCompleted = i == 0 ? true : o[i - 1]?.status === "completed";
        const ee = { ...e };
        ee.status = prevCompleted ? ee.status : undefined;

        return (
          <React.Fragment>
            {i + 1 !== o.length ? (
              <React.Fragment>
                <Node {...ee} {...options} />
                <Line {...ee} {...options} />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Node {...ee} {...options} />
              </React.Fragment>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};


