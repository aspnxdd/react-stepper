import { FC } from "react";
import { Options, Props } from "./types.js";

const Node: FC<Options & Props> = ({
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

const Line: FC<Options> = ({ color, squared, noAnimation }) => {
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

export const Stepper: FC<{ steps: Props[]; options?: Options }> = ({
  steps,
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
      {steps.map((step, i) => {
        const prevCompleted =
          i == 0 ? true : steps[i - 1]?.status === "completed";
        const _step = { ...step };
        _step.status = prevCompleted ? _step.status : undefined;

        return (
          <>
            {i + 1 !== steps.length ? (
              <>
                <Node {..._step} {...options} />
                <Line {...options} />
              </>
            ) : (
              <>
                <Node {..._step} {...options} />
              </>
            )}
          </>
        );
      })}
    </div>
  );
};
