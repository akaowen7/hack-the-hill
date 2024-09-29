import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function Dots({ color }) {
  return (
    <>
      <FontAwesomeIcon icon={faCircle} size="sm" color={color} />
    </>
  );
}
