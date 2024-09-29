import Dots from "./dots";
import Pills from "./pills";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function PegBoard(props) {
  const list = [];
  // convert numDots to binary
  const binary = (props.num >>> 0).toString(2);

  const todayColor = props.todayCompleted ? "green" : "gray";

  if (props.type === "Pills") {
    for (let i = 0; i < binary.length; i++) {
      if (binary[i] === "0") list.push(<Pills color="red" />);
      else list.push(<Pills color="green" />);
    }
    list.push(<Pills color={todayColor} />);
  } else {
    for (let i = 0; i < binary.length; i++) {
      if (binary[i] === "0") list.push(<Dots color="red" />);
      else list.push(<Dots color="green" />);
    }
    list.push(<Dots color={todayColor} />);
  }
  return (
    <>
      <div
        className={`p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg justify-between grid ${
          props.type === "Pills" ? "grid-cols-7" : "grid-cols-14"
        } ${props.type === "Pills" ? "gap-x-8" : "gap-x-2"} gap-y-1`}
      >
        {list}
      </div>
    </>
  );
}
