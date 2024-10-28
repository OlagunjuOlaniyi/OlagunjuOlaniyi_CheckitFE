"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCapsules, selectFilteredCapsules } from "../store/capsulesSlice";
import CapsuleTable from "../components/capsuleTable/CapsuleTable";
import SearchForm from "../components/SearchForm/SearchForm";
import CapsuleModal from "../components/CapsuleModal/CapsuleModal";
import CapsuleStats from "../components/CapsuleStats/CapsuleStats";
import CapsuleForm from "../components/CapsuleForm/CapsuleForm";
import { AppDispatch, RootState } from "../store/index";

//  the Capsule interface
interface Capsule {
  id: string;
  capsule_id: string;
  original_launch: string;
  status: string;
  type: string;
}
const HomePage = () => {
  const dispatch: AppDispatch = useDispatch(); // Specify the dispatch type
  const capsules = useSelector((state: RootState) =>
    selectFilteredCapsules(state)
  );
  // const capsules = useSelector(selectFilteredCapsules);
  const [isFormOpen, setFormOpen] = useState(false);
  const [editingCapsule, setEditingCapsule] = useState<Capsule | null>(null);

  useEffect(() => {
    dispatch(fetchCapsules());
  }, [dispatch]);

  const handleAddNew = () => {
    setEditingCapsule(null); // Clear any previous edit data
    setFormOpen(true); // this opens modal for adding
  };

  const handleEditClick = (capsule: Capsule) => {
    setEditingCapsule(capsule);
    setFormOpen(true); // This opens modal with editing data
  };

  const handleCloseForm = () => {
    setFormOpen(false);
  };

  return (
    <div>
      <CapsuleStats />
      <SearchForm capsules={capsules} />
      <div className="flex justify-end">
        <button
          onClick={handleAddNew}
          className="border my-4 py-2 px-3 font-bold"
        >
          + Add New
        </button>
      </div>
      <CapsuleTable capsules={capsules} onEditClick={handleEditClick} />
      <CapsuleModal isOpen={isFormOpen} onRequestClose={handleCloseForm}>
        <CapsuleForm initialValues={editingCapsule} onClose={handleCloseForm} />
      </CapsuleModal>
    </div>
  );
};

export default HomePage;
