import Dots from "./dots";
import Pills from "./pills";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function PegBoard(props) {
  const list = [];
  // convert numDots to binary
  const binary = (props.num >>> 0).toString(2);
  if (props.type === "Pills") {
    for (let i = 0; i < binary.length; i++) {
      if (binary[i] === "0") list.push(<Pills isRed />);
      else list.push(<Pills />);
    }
  } else {
    for (let i = 0; i < binary.length; i++) {
      if (binary[i] === "0") list.push(<Dots colour="red" />);
      else list.push(<Dots colour="green" />);
    }
  }
  return (
    <>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg justify-between flex flex-row">
        {list}
      </div>
    </>
  );
}
