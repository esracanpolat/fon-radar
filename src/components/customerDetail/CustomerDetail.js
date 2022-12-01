import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { GetAllCustomerByIdApi } from '../../redux/actions/customers/customersActions';
import { getCustomerByIdApiRequest } from '../../redux/services/customersService';

export const CustomerDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const customerDetail = useSelector((state) => state.customers);

    useEffect(() => {
        dispatch(getCustomerByIdApiRequest(id))
    }, [])
    console.log(id, customerDetail.filterTodos, "id");
    return (
        <div className='row'>
            <div className='col'>
                {customerDetail.filterTodos.companyName}
                {customerDetail.filterTodos.contactNumber}
                {customerDetail.filterTodos.taxOffice}
                {customerDetail.filterTodos.taxNumber}
                {customerDetail.filterTodos.invoiceCount}
            </div>
            <div className='col'>

            </div>
        </div>
    )
}
