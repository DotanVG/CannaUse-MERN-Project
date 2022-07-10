import React from "react";

const EditableRow = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,
}) => {
    return (
        <tr>
            <td>
                <input
                type="text"
                required="required"
                placeholder="e.g. O.G Kush"
                name="strainName"
                value={editFormData.strainName}
                onChange={handleEditFormChange}
                ></input>
            </td>

            <td>
                <input
                type="text"
                required="required"
                placeholder="e.g. CannaGrower"
                name="company"
                value={editFormData.company}
                onChange={handleEditFormChange}
                ></input>
            </td>

            <td>
                <input
                type="text"
                required="required"
                placeholder="e.g. Staiva/Indica/Hybrid"
                name="strainType"
                value={editFormData.strainType}
                onChange={handleEditFormChange}
                ></input>
            </td>

            <td>
                <input
                type="text"
                required="required"
                placeholder="e.g. T20/C4"
                name="dosage"
                value={editFormData.dosage}
                onChange={handleEditFormChange}
                ></input>
            </td> 

            <td>
                <input
                type="text"
                required="required"
                placeholder="e.g. FT010222"
                name="batchNumber"
                value={editFormData.batchNumber}
                onChange={handleEditFormChange}
                ></input>
            </td>

            <td>
                <input
                type="text"
                required="required"
                placeholder="e.g. 6"
                name="painTreatment"
                value={editFormData.painTreatment}
                onChange={handleEditFormChange}
                ></input>
            </td>

            <td>
                <input
                type="text"
                required="required"
                placeholder="e.g. 4"
                name="emotionalTreatment"
                value={editFormData.emotionalTreatment}
                onChange={handleEditFormChange}
                ></input>
            </td>

            <td>
                <input
                type="text"
                required="required"
                placeholder="e.g. Before Bedtime"
                name="timeOfDay"
                value={editFormData.timeOfDay}
                onChange={handleEditFormChange}
                ></input>
            </td>

            <td>
                <input
                type="text"
                required="required"
                placeholder="e.g. Very Strong"
                name="comments"
                value={editFormData.comments}
                onChange={handleEditFormChange}
                ></input>
            </td>

            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>
                Cancel
                </button>
            </td>
        </tr>
    );
};

export default EditableRow;
