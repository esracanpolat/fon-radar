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

    console.log(customerDetail, "in modal");
    const { register, handleSubmit, reset, setValue } = useForm();

    function onSubmit(e) {
        console.log(e, "customerDetail");
        const newUpdateCustomer = { ...e, id: customerDetail.id }
        setShowModal(false);
        dispatch(updateCustomerApiRequest(newUpdateCustomer))
        console.log(newUpdateCustomer, "newUpdateCustomer");
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
                        <div id="companyName" class="form-text" >We'll never share your email with anyone else.</div>
                    </div>
                    <div>
                        <label for="contactNumber" class="form-label">contactNumber</label>
                        <input type="text" class="form-control" id="contactNumber"

                            aria-describedby="pass"
                            {...register("contactNumber")} />
                        <div id="pass" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div>
                        <label for="invoiceCount" class="form-label">invoiceCount</label>
                        <input type="text" class="form-control" id="invoiceCount"
                            aria-describedby="pass"
                            {...register("invoiceCount")} />
                        <div id="pass" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div>
                        <label for="exampleInputPassword1" class="form-label">taxNumber</label>
                        <input type="text" class="form-control"
                            id="exampleInputPassword1" aria-describedby="pass" {...register("taxNumber")} />
                        <div id="text" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div>
                        <label for="exampleInputPassword1" class="form-label">taxOffice</label>
                        <input type="text" class="form-control"
                            id="exampleInputPassword1" aria-describedby="pass" {...register("taxOffice")} />
                        <div id="pass" class="form-text">We'll never share your email with anyone else.</div>
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
