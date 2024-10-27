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
    <div className="capsule-stats">
      <h3>Capsule Stats</h3>
      <p>Total Capsules: {totalCapsules}</p>
      <p>Total Active Capsules: {activeCapsules}</p>
      <p>Total Destroyed Capsules: {destroyedCapsules}</p>
    </div>
  );
};

export default CapsuleStats;
