import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { CustomersSearch } from '../../redux/actions/customers/customersActions';
import { CreateCustomer } from './CreateCustomer';
import CustomerList from './CustomerList';

export default function Customers() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState();

    function searchFunc(e) {
        // const newCustomers = e ? customerData.filter((searchValue) => (searchValue.companyName).includes(e)) : customers
        // setCustomerData(newCustomers);
        setSearch(e)
        dispatch(CustomersSearch(e))
    }
    return (
        <div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <CreateCustomer />
            </div>
            <div className='d-flex justify-space-between'>
                <div>
                    <input value={search} onChange={(e) => searchFunc(e.target.value)} />
                </div>
                <div>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        New Customer
                    </button>
                </div>
            </div>
            <CustomerList />
        </div>
    )
}
