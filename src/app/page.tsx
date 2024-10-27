"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCapsules, selectFilteredCapsules } from "../store/capsulesSlice";
import CapsuleTable from "../components/CapsuleTable/CapsuleTable";
import SearchForm from "../components/SearchForm/SearchForm";
import CapsuleForm from "../components/CapsuleForm/CapsuleForm";

const HomePage = () => {
  const dispatch = useDispatch();
  const capsules = useSelector(selectFilteredCapsules);
  const [isFormOpen, setFormOpen] = useState(false);
  const [editingCapsule, setEditingCapsule] = useState(null);

  useEffect(() => {
    dispatch(fetchCapsules());
  }, [dispatch]);

  const handleAddNew = () => {
    setEditingCapsule(null); // Clear any previous edit data
    setFormOpen(true); // Open form for adding
  };

  const handleEditClick = (capsule: any) => {
    setEditingCapsule(capsule);
    setFormOpen(true); // Open form with editing data
  };

  const handleCloseForm = () => {
    setFormOpen(false);
  };

  return (
    <div>
      <SearchForm capsules={capsules} />
      <button onClick={handleAddNew}>Add New Capsule</button>
      <CapsuleTable capsules={capsules} onEditClick={handleEditClick} />
      {isFormOpen && (
        <CapsuleForm initialValues={editingCapsule} onClose={handleCloseForm} />
      )}
    </div>
  );
};

export default HomePage;
