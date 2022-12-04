import React, { useState } from 'react'
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CustomersSearch } from '../../redux/actions/customers/customersActions';
import { getCustomerByIdApiRequest } from '../../redux/services/customerDetailService';
import { deleteCustomerApiRequest, getCustomerApiRequest } from '../../redux/services/customersService';
import DataTable from '../helpers/Table';
import { UpdateCustomer } from './UpdateCustomer';

export default function CustomerList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selectUpdateCustomer, setSelectUpdateCustomer] = useState();
    const [showModal, setShowModal] = useState(false);


    const customers = useSelector((state) => state.customers.customers);
    const filterCustomers = useSelector((state) => state.customers.filterCustomers);
    let customerDetail = useSelector((state) => state.customerDetail.customerDetail)


    useEffect(() => {
        dispatch(getCustomerApiRequest());
    }, [])




    function detailButton(e) {
        navigate('/customerDetail/' + e.value);
    }
    function editButton(e) {
        setShowModal(true);
        dispatch(getCustomerByIdApiRequest(e));

    }
    function deleteButton(id) {
        dispatch(deleteCustomerApiRequest(id.value))
    }

    const initialState = {
        pageSize: 10,
        pageIndex: 0,
    };
    const columns = useMemo(
        () => [

            {
                Header: "Company Name",
                accessor: "companyName"
            },

            {
                Header: "Contact Number",
                accessor: "contactNumber"
            },
            {
                Header: "Invoice Count",
                accessor: "invoiceCount"
            },
            {
                Header: "Tax Number",
                accessor: "taxNumber"
            },
            {
                Header: "Tax Office",
                accessor: "taxOffice"
            },
            {
                Header: "",
                id: 'id',
                accessor: 'id',
                Cell: ({ value }) => (<div className='d-inline-flex'>
                    <button className="btn btn-primary" onClick={() => detailButton({ value })}>Detail</button>
                    <button className="btn btn-secondary ml-2" onClick={() => editButton(value)} >Edit</button>
                    <button className="btn btn-danger ml-2" onClick={() => deleteButton({ value })}>Delete</button>
                </div>)
            },
        ]
    )
    return (
        <div>
            <UpdateCustomer showModal={showModal} setShowModal={setShowModal} />
            <DataTable columns={columns}
                data={(filterCustomers && filterCustomers.length > 0) ? filterCustomers : customers} initialState={initialState} />
        </div>
    )
}
