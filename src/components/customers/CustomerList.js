import React, { useState } from 'react'
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CustomersSearch } from '../../redux/actions/customers/customersActions';
import { deleteCustomerApiRequest, getCustomerApiRequest } from '../../redux/services/customersService';
import Table from '../helpers/Table';

export default function CustomerList() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const customers = useSelector((state) => state.customers.customers);

    useEffect(() => {
        dispatch(getCustomerApiRequest());
    }, [])


    function editButton(e) {
        navigate('/customerDetail/' + e.value);

    }
    function deleteButton(id) {
        console.log(id.value);
        dispatch(deleteCustomerApiRequest(id.value))
    }

    const initialState = {
        pageSize: 10,
        pageIndex: 0,
        sortBy: [
            {
                id: "companyName",
                desc: false
            }
        ],
        // filters: [
        //     {
        //         id: "status",
        //         value: "single"
        //     },
        //]
    };
    const columns = useMemo(
        () => [
            {
                Header: "TV Show",
                columns: [
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
                        Cell: ({ value }) => (<div className='d-inline-flex
                        '>
                            <button onClick={() => editButton({ value })}>Edit</button>
                            <button onClick={() => deleteButton({ value })}>Delete</button>
                        </div>)
                    },
                ]
            }
        ]
    )
    return (
        <div>
            <Table columns={columns}
                data={customers} initialState={initialState} />
        </div>
    )
}
