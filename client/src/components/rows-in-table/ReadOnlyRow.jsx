import React from "react";

const ReadOnlyRow = ({ strain, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td>{strain.strainName}</td>
            <td>{strain.company}</td>
            <td>{strain.strainType}</td>
            <td>{strain.dosage}</td>
            <td>{strain.batchNumber}</td>
            <td>{strain.painTreatment}</td>
            <td>{strain.emotionalTreatment}</td>
            <td>{strain.timeOfDay}</td>
            <td>{strain.comments}</td>
            <td>
                <button
                type="button"
                onClick={(event) => handleEditClick(event, strain)}
                >
                Edit
                </button>
                <button type="button" onClick={() => handleDeleteClick(strain.id)}>
                Delete
                </button>
            </td>
        </tr>
    );
};

export default ReadOnlyRow;
