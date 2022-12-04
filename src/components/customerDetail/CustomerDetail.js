import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getCustomerByIdApiRequest } from '../../redux/services/customerDetailService';

export const CustomerDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const customerDetail = useSelector((state) => state.customerDetail.customerDetail);

    useEffect(() => {
        dispatch(getCustomerByIdApiRequest(id))
    }, [])

    return (
        <div className='row'>
            {customerDetail !== (undefined || null) &&
                (<div className='col'>
                    {customerDetail.companyName}
                    {customerDetail.contactNumber}
                    {customerDetail.taxOffice}
                    {customerDetail.taxNumber}
                    {customerDetail.invoiceCount}
                </div>)}
            <div className='col'>

            </div>
        </div>
    )
}
