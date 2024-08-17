import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Contacts() {
  return (
    <div className="mt-20sm:mt-16 pb-20 md:mt-0">
      <div className="flex justify-around items-center sm:justify-between">
        <div className="w-3/5 sm:w-3/5 mt-24 lg:w-1/5 ml-5">
          <div className="flex mb-5 w-1/5 ">SOCIAL</div>
          <div className="opacity-90">
            <Link href={"#"}>
              <div className="group mb-1 transition-all">
                <div className="hidden group-hover:block transition-all">
                  <Image
                    src={"/facebook.png"}
                    alt="profile photo"
                    height={150}
                    width={150}
                    className="transition-all"
                  />
                </div>
                <div>Wai Yan Min Htike</div>
              </div>
            </Link>

            <Link href={"#"}>
              <div className="group mb-1 transition-all">
                <div className="hidden group-hover:block transition-all">
                  <Image
                    src={"/x.png"}
                    alt="profile photo"
                    height={180}
                    width={180}
                    className="transition-all"
                  />
                </div>
                <div>林 (@shankS10102002)</div>
              </div>
            </Link>
            <Link href={"#"}>
              <div className="group mb-1 transition-all">
                <div className="hidden group-hover:block transition-all">
                  <Image
                    src={"/instagram.png"}
                    alt="profile photo"
                    height={150}
                    width={150}
                    className="transition-all"
                  />
                </div>
                <div>callmeSenpai</div>
              </div>
            </Link>
          </div>
        </div>

        <div className="w-40 h-0.5 bg-white rotate-90 mt-24"></div>

        <div className="w-2/5 md:w-3/5 mt-3 lg:w-1/5">
          <div className="flex mb-5">MAIL</div>
          <div className="opacity-90 overflow-hidden text-ellipsis whitespace-nowrap	">
            <div className="mb-1 overflow-hidden text-ellipsis whitespace-nowrap">
              waiyanminhtike10102002@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
