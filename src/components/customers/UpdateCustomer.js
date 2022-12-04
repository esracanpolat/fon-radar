import { Modal } from "react-bootstrap";
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomerByIdApiRequest } from '../../redux/services/customerDetailService';
import { updateCustomerApiRequest } from '../../redux/services/customersService';

export const UpdateCustomer = ({ showModal, setShowModal }) => {
    const dispatch = useDispatch();
    let customerDetail = useSelector((state) => state.customerDetail.customerDetail)
    console.log(showModal, "showModal");
    useEffect(() => {
        if (customerDetail) {
            setValue("companyName", customerDetail.companyName);
            setValue("contactNumber", customerDetail.contactNumber);
            setValue("taxNumber", customerDetail.taxNumber);
            setValue("taxOffice", customerDetail.taxOffice)
            setValue("invoiceCount", customerDetail.invoiceCount);
        }
    }, [customerDetail]);

    -    const { register, handleSubmit, reset, setValue } = useForm();

    function onSubmit(e) {
        const newUpdateCustomer = { ...e, id: customerDetail.id }
        setShowModal(false);
        dispatch(updateCustomerApiRequest(newUpdateCustomer))
    }
    return (
        <div>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <form class="m-4" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label for="companyName" class="form-label">companyName</label>
                        <input type="text" class="form-control" id="companyName"  {...register("companyName")} />
                    </div>
                    <div>
                        <label for="contactNumber" class="form-label">Contact Number</label>
                        <input type="text" class="form-control" id="contactNumber"

                            aria-describedby="pass"
                            {...register("contactNumber")} />
                    </div>
                    <div>
                        <label for="invoiceCount" class="form-label">Invoice Count</label>
                        <input type="text" class="form-control" id="invoiceCount"
                            aria-describedby="pass"
                            {...register("invoiceCount")} />
                    </div>
                    <div>
                        <label for="exampleInputPassword1" class="form-label">Tax Number</label>
                        <input type="text" class="form-control"
                            id="exampleInputPassword1" aria-describedby="pass" {...register("taxNumber")} />
                    </div>
                    <div>
                        <label for="exampleInputPassword1" class="form-label">Tax Office</label>
                        <input type="text" class="form-control"
                            id="exampleInputPassword1" aria-describedby="pass" {...register("taxOffice")} />
                    </div>
                    <Modal.Footer>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Save changes</button>
                    </Modal.Footer>

                </form>

            </Modal >
        </div >
    )
}
