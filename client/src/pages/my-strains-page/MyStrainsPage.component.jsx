import React, { useState, Fragment, useEffect, useContext } from "react";
import { nanoid } from "nanoid";
import "./my-strains-page.css";
import ReadOnlyRow from "../../components/rows-in-table/ReadOnlyRow";
import EditableRow from "../../components/rows-in-table/EditableRow";
import data from "../../mock-data.json";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth.context';
import Loader from '../../components/shared/loader/Loader.component';



const MyStrainsPage = () => {
    const navigate = useNavigate();

    const authContextValue = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(true);   

    useEffect(() => {
        
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [navigate, authContextValue]);

    const [strains, setStrains] = useState(data);
    const [addFormData, setAddFormData] = useState({
        strainName: "",
        company: "",
        strainType: "",
        dosage: "",
        batchNumber: "",
        painTreatment: "",
        emotionalTreatment: "",
        timeOfDay: "",
        notes: ""        
    });

    const [editFormData, setEditFormData] = useState({
        strainName: "",
        company: "",
        strainType: "",
        dosage: "",
        batchNumber: "",
        painTreatment: "",
        emotionalTreatment: "",
        timeOfDay: "",
        notes: ""  
    });

    const [editStrainId, setEditStrainId] = useState(null);

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newStrain = {
            id: nanoid(),
            strainName: addFormData.strainName,
            company: addFormData.company,
            strainType: addFormData.strainType,
            dosage: addFormData.dosage,
            batchNumber: addFormData.batchNumber,
            painTreatment: addFormData.painTreatment,
            emotionalTreatment: addFormData.emotionalTreatment,
            timeOfDay: addFormData.timeOfDay,
            notes: addFormData.notes
        };

        const newStrains = [...strains, newStrain];
        setStrains(newStrains);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedStrain = {
            id: editStrainId,
            strainName: editFormData.strainName,
            company: editFormData.company,
            strainType: editFormData.strainType,
            dosage: editFormData.dosage,
            batchNumber: editFormData.batchNumber,
            painTreatment: editFormData.painTreatment,
            emotionalTreatment: editFormData.emotionalTreatment,
            timeOfDay: editFormData.timeOfDay,
            notes: editFormData.notes
        };

        const newStrains = [...strains];

        const index = strains.setStrains((strain) => strain.id === editStrainId);

        newStrains[index] = editedStrain;

        setStrains(newStrains);
        setEditStrainId(null);
    };

    const handleEditClick = (event, strain) => {
        event.preventDefault();
        setEditStrainId(strain.id);

        const formValues = {
            strainName: strain.strainName,
            company: strain.company,
            strainType: strain.strainType,
            dosage: strain.dosage,
            batchNumber: strain.batchNumber,
            painTreatment: strain.painTreatment,
            emotionalTreatment: strain.emotionalTreatment,
            timeOfDay: strain.timeOfDay,
            comments: strain.comments
        };

        setEditFormData(formValues);
    };

    const handleCancelClick = () => {
        setEditStrainId(null);
    };

    const handleDeleteClick = (strainId) => {
        const newStrains = [...strains];

        const index = strains.setStrains((strain) => strain.id === strainId);

        newStrains.splice(index, 1);

        setStrains(newStrains);
    };

    return isLoading ? (
        <Loader />
    ) : (  
        <main>
            <div className="strains-container">
                <form onSubmit={handleEditFormSubmit}>
                    <table>
                        <thead>
                            <tr>
                                <th>Strain Name</th>
                                <th>Company</th>
                                <th>Strain Type</th>
                                <th>Dosage (THC/CBD)</th>
                                <th>Batch Number</th>
                                <th>Pain Treatment (1-10)</th>
                                <th>Emotional Treatment (1-10)</th>
                                <th>Time Of Day</th>
                                <th>Comments</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {strains.map((strain) => (
                                <Fragment>
                                    {editStrainId === strain.id ? (
                                        <EditableRow
                                            editFormData={editFormData}
                                            handleEditFormChange={handleEditFormChange}
                                            handleCancelClick={handleCancelClick}
                                        />
                                    ) : (
                                        <ReadOnlyRow
                                            strain={strain}
                                            handleEditClick={handleEditClick}
                                            handleDeleteClick={handleDeleteClick}
                                        />
                                    )}
                                </Fragment>
                            ))}
                        </tbody>
                    </table>
                </form>

                <h3>Add a Strain</h3>
                <form onSubmit={handleAddFormSubmit}>
                    <input
                        type="text"
                        name="strainName"
                        required="required"
                        placeholder="Enter a strain name..."
                        onChange={handleAddFormChange}
                    />
                    <input
                        type="text"
                        name="company"
                        required="required"
                        placeholder="Enter company name..."
                        onChange={handleAddFormChange}
                    />
                    <input
                        type="text"
                        name="strainType"
                        required="required"
                        placeholder="Enter the strain's type..."
                        onChange={handleAddFormChange}
                    />
                    <input
                        type="text"
                        name="dosage"
                        required="required"
                        placeholder="Enter strain dosage..."
                        onChange={handleAddFormChange}
                    />
                    <input
                        type="text"
                        name="batchNumber"
                        required="required"
                        placeholder="Enter batch number..."
                        onChange={handleAddFormChange}
                    />
                    <input
                        type="text"
                        name="painTreatment"
                        required="required"
                        placeholder="Pain treatment (1-10)..."
                        onChange={handleAddFormChange}
                    />
                    <input
                        type="text"
                        name="emotionalTreatment"
                        required="required"
                        placeholder="Emotional treatment (1-10)..."
                        onChange={handleAddFormChange}
                    />
                    <input
                        type="text"
                        name="timeOfDay"
                        required="required"
                        placeholder="Enter time of day..."
                        onChange={handleAddFormChange}
                    />
                    <input
                        type="text"
                        name="comments"
                        required="required"
                        placeholder="Enter comments..."
                        onChange={handleAddFormChange}
                    />
                    <button type="submit">Add</button>
                </form>
            </div>
        </main>
    );
};

export default MyStrainsPage;
