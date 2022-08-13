import { FC, memo } from "react";

type SpinnerProps = {};

const Spinner: FC<SpinnerProps> = (props) => {
  return (
    <div className=" flex justify-center">
      <svg
        className="w-20 flex "
        version="1.1"
        id="L5"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enable-background="new 0 0 0 0"
      >
        <circle fill="#000" stroke="none" cx="6" cy="50" r="6">
          <animateTransform
            attributeName="transform"
            dur="1s"
            type="translate"
            values="0 15 ; 0 -15; 0 15"
            repeatCount="indefinite"
            begin="0.1"
          ></animateTransform>
        </circle>
        <circle fill="#000" stroke="none" cx="30" cy="50" r="6">
          <animateTransform
            attributeName="transform"
            dur="1s"
            type="translate"
            values="0 10 ; 0 -10; 0 10"
            repeatCount="indefinite"
            begin="0.2"
          ></animateTransform>
        </circle>
        <circle fill="#000" stroke="none" cx="54" cy="50" r="6">
          <animateTransform
            attributeName="transform"
            dur="1s"
            type="translate"
            values="0 5 ; 0 -5; 0 5"
            repeatCount="indefinite"
            begin="0.3"
          ></animateTransform>
        </circle>
      </svg>{" "}
    </div>
  );
};

Spinner.defaultProps = {};

export default memo(Spinner);
