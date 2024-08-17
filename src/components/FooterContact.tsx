import { acitvate } from "@/utils/animations";
import {
  faArrowDown,
  faArrowTurnDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

export default function FooterContact() {
  useEffect(() => {
    acitvate();
  }, []);
  return (
    <div className="sm:mt-20 text-xl md:text-3xl flex justify-between items-center">
      <div className="ml-2 flex justify-center items-center">
        Find me on{" "}
        <div
          className="text-2xl rounded-full ml-5 h-10 w-10 bg-red-500 flex justify-center items-center -rotate-12"
          id="magnet"
        >
          <div id="magnetText">
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
        </div>
      </div>
      <div className="h-0.5 w-2/5 sm:w-1/5 bg-white opacity-50"></div>
      <div className="h-0.5 hidden sm:block w-1/5 bg-white opacity-50"></div>
      <div className="h-0.5 hidden sm:block w-1/5 bg-white opacity-50"></div>
      <div className="h-0.5 hidden sm:block w-1/5 bg-white opacity-50"></div>
    </div>
  );
}
