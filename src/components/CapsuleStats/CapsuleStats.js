import React from "react";
import { useSelector } from "react-redux";
import {
  selectTotalCapsules,
  selectActiveCapsules,
  selectDestroyedCapsules,
} from "../../store/capsulesSlice";

const CapsuleStats = () => {
  const totalCapsules = useSelector(selectTotalCapsules);
  const activeCapsules = useSelector(selectActiveCapsules);
  const destroyedCapsules = useSelector(selectDestroyedCapsules);

  return (
    <div className="capsule-stats flex justify-around gap-3 my-5">
      <div className="bg-zinc-800 text-[#fff] w-[30%] flex flex-col gap-3 border border-r-2 rounded-lg py-6 px-4">
        <p className="font-bold">Total Capsules</p>
        <h2 className="text-[25px]">{totalCapsules}</h2>
      </div>
      <div className="bg-[#fff] text-[#000] w-[30%] flex flex-col gap-3 border border-r-2 rounded-lg py-6 px-4">
        <p className="font-bold">Total Active Capsules</p>
        <h2 className="text-[25px]">{activeCapsules}</h2>
      </div>
      <div className="bg-[#fff] text-[#000] w-[30%] flex flex-col gap-3 border border-r-2 rounded-lg py-6 px-4">
        <p className="font-bold">Total Destroyed Capsules</p>
        <h2 className="text-[25px]">{destroyedCapsules}</h2>
      </div>
    </div>
  );
};

export default CapsuleStats;
