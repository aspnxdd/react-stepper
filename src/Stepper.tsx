import { FC } from "react";
import { Options, Props } from "./types.js";

const Node: FC<Options & Props> = ({
  id,
  text,
  status,
  color,
  squared,
  noAnimation,
  displayTickOnCompletedNodes,
  textColor,
  loadingImage,
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
        color: textColor ?? "black",
        position: "relative",
        border: `2px solid  ${color ?? "green"}`,
      }}
    >
      {status === "completed" ? (displayTickOnCompletedNodes ? "✅" : id) : id}
      <p
        style={{
          position: "absolute",
          top: "1.2rem",
          left: `${text.length ?? 0}`,
          color: textColor ?? "black",
          width: "6rem",
          fontSize: "0.8rem",
        }}
      >
        {text}
      </p>
      {status === "loading" && (
        <img
          style={{
            position: "absolute",
            top: "3.5rem",
            left: `${text.length}`,
            color: "black",
          }}
          src={loadingImage ?? "/loader.svg"}
          height="12"
        />
      )}
    </div>
  );
};

const Line: FC<Options> = ({ color, squared, noAnimation, distance }) => {
  return (
    <div
      className={noAnimation ? "" : "fadein-line"}
      style={{
        backgroundColor: color ?? "green",
        borderRadius: squared ? "0px" : "999px",
        width: `${distance ?? 9}rem`,
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
              <Node {..._step} {...options} />
            )}
          </>
        );
      })}
    </div>
  );
};
