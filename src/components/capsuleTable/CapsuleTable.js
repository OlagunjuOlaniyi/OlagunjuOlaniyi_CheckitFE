import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const CapsuleTable = ({ capsules, onEditClick }) => {
  return (
    <DataTable value={capsules} paginator rows={5}>
      <Column field="status" header="Status" />
      <Column field="original_launch" header="Launch Date" />
      <Column field="type" header="Type" />
      <Column
        body={(rowData) => (
          <button onClick={() => onEditClick(rowData)}>Edit</button>
        )}
        header="Actions"
      />
    </DataTable>
  );
};

export default CapsuleTable;
