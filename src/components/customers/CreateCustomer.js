import React, { useState } from 'react'
import { Modal, Toast } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { insertCustomerApiRequest } from '../../redux/services/customersService';

export const CreateCustomer = ({ createModal, setCreateModal }) => {
    const { register, handleSubmit } = useForm();
    const [stateModal, setStateModal] = useState(false)
    const dispatch = useDispatch();

    function onSubmit(e) {
        dispatch(insertCustomerApiRequest(e));
        setCreateModal(false)
    }

    return (
        <>
            <Toast show={stateModal} onClose={() => setStateModal(false)}>
                <Toast.Header>
                    <strong className="me-auto">Created succesfully</strong>
                </Toast.Header>
                <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
            </Toast>
            <Modal show={createModal} onHide={() => setCreateModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>New Customer</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit(onSubmit)} className="m-4">
                    <div class="modal-body">

                        <div>
                            <label for="companyName" class="form-label">Company Name</label>
                            <input type="text" class="form-control" id="companyName" aria-describedby="emailHelp"{...register("companyName")} />
                            <div id="companyName" class="form-text" >We'll never share your email with anyone else.</div>
                        </div>
                        <div>
                            <label for="contactNumber" class="form-label">contactNumber</label>
                            <input type="text" class="form-control" id="contactNumber" aria-describedby="pass" {...register("contactNumber")} />
                            <div id="pass" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div>
                            <label for="invoiceCount" class="form-label">invoiceCount</label>
                            <input type="text" class="form-control" id="invoiceCount" aria-describedby="pass" {...register("invoiceCount")} />
                            <div id="pass" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div>
                            <label for="exampleInputPassword1" class="form-label">taxNumber</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" aria-describedby="pass" {...register("taxNumber")} />
                            <div id="text" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div>
                            <label for="exampleInputPassword1" class="form-label">taxOffice</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" aria-describedby="pass" {...register("taxOffice")} />
                            <div id="pass" class="form-text">We'll never share your email with anyone else.</div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Save changes</button>
                    </div>
                </form>
            </Modal>
        </>
    )
}
