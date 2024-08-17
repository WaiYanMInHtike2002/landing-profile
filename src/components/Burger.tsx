import { Dispatch, SetStateAction } from "react";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export default function Burger({ open, setOpen }: Props) {
  return (
    <div className="h-screen w-full sm:w-96 md:w-96 z-10 bg-customGray shadow-xl absolute top-0 right-0">
      <button onClick={() => setOpen(false)}>close</button>
    </div>
  );
}
