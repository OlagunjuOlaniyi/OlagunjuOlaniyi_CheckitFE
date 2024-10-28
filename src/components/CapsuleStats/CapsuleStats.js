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
    <div className="capsule-stats flex justify-around flex-col lg:flex-row gap-3 my-5 mb-10">
      <div className="bg-[#000000af] text-[#fff] lg:w-[30%] flex flex-col gap-3 border border-r-2 rounded-lg py-6 px-6">
        <p className="font-bold">Total Capsules</p>
        <h2 className="text-[25px]">{totalCapsules}</h2>
      </div>
      <div className="bg-[#fff] text-[#000] lg:w-[30%] flex flex-col gap-3 border border-r-2 rounded-lg py-6 px-6">
        <p className="font-bold">Total Active Capsules</p>
        <h2 className="text-[25px]">{activeCapsules}</h2>
      </div>
      <div className="bg-[#fff] text-[#000] lg:w-[30%] flex flex-col gap-3 border border-r-2 rounded-lg py-6 px-6">
        <p className="font-bold">Total Destroyed Capsules</p>
        <h2 className="text-[25px]">{destroyedCapsules}</h2>
      </div>
    </div>
  );
};

export default CapsuleStats;
