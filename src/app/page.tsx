"use client";

import React, { useEffect } from "react";
import CapsuleTable from "../components/CapsuleTable/CapsuleTable";
import SearchForm from "../components/SearchForm/SearchForm";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCapsules,
  // selectCapsules,
  selectFilteredCapsules,
} from "../store/capsulesSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const capsules = useSelector(selectFilteredCapsules);

  useEffect(() => {
    dispatch(fetchCapsules());
  }, [dispatch]);

  return (
    <div>
      <SearchForm capsules={capsules} />
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
