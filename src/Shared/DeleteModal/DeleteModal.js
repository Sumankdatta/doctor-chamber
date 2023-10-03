import React from 'react';

const DeleteModal = ({ title, message, cancelDelete, handleDeleteDoctor, deleteData }) => {
    return (
        <div>



            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">

                        <label onClick={() => handleDeleteDoctor(deleteData)} htmlFor="delete-modal" className="btn btn-red-600">Delete</label>
                        <label onClick={cancelDelete} htmlFor="delete-modal" className="btn ">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;