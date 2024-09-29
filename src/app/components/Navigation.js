import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center justify-between">
        <Link href="../">
          <FontAwesomeIcon
            icon={faHome}
            className="hover:bg-gray-200"
            size="2xl"
            color="black"
          />
        </Link>
        <Link href="./createGoal">
          <FontAwesomeIcon
            icon={faCirclePlus}
            className="hover:bg-gray-200"
            size="2xl"
            color="black"
          />
        </Link>
        <Link href="./friendsGoals">
          <FontAwesomeIcon
            icon={faUserFriends}
            className="hover:bg-gray-200"
            size="2xl"
            color="black"
          />
        </Link>
      </div>
    </>
  );
}
