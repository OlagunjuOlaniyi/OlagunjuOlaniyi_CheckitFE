import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const CapsuleTable = ({ capsules, onEditClick }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Status</th>
          <th>Launch Date</th>
          <th>Type</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {capsules.map((capsule) => (
          <tr key={capsule.id}>
            <td>{capsule.id}</td>
            <td>{capsule.status}</td>
            <td>{capsule.original_launch}</td>
            <td>{capsule.type}</td>
            <td>
              <button onClick={() => onEditClick(capsule)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CapsuleTable;
