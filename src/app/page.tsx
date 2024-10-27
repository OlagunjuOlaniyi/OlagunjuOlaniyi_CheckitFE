"use client";

import React, { useEffect } from "react";
import CapsuleTable from "../components/CapsuleTable/CapsuleTable";
import SearchForm from "../components/SearchForm/SearchForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchCapsules, selectCapsules } from "../store/capsulesSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const capsules = useSelector(selectCapsules);

  useEffect(() => {
    dispatch(fetchCapsules());
  }, [dispatch]);

  return (
    <div>
      <SearchForm
        onSearch={(values: any) => {
          /* search logic */
        }}
      />
      <CapsuleTable
        capsules={capsules}
        onEditClick={(capsule: any) => {
          /* edit logic */
        }}
      />
    </div>
  );
};

export default HomePage;
