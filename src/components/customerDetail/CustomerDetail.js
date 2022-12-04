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

    return (<div>
        <div className='row m-4'>
            <h3>Müşteri Detayı</h3>
            {customerDetail !== (undefined || null) &&
                (<div className='card col m-4'>
                    <div className="m-4" >
                        <div>
                            <p>Company Name: {customerDetail.companyName}</p>
                        </div>
                        <div>
                            <p>Contact Number: {customerDetail.contactNumber}</p>
                        </div>
                        <div>
                            <p>Tax Office: {customerDetail.taxOffice}</p>
                        </div><div>
                            <p>Tax Number:  {customerDetail.taxNumber}</p>
                        </div>
                        <div>
                            <p>Invoice Count: {customerDetail.invoiceCount}</p>
                        </div>
                    </div>
                </div>)}
            <div className='col'>

            </div>
        </div>
    </div>
    )
}
