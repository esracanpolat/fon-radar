import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { CustomersSearch } from '../../redux/actions/customers/customersActions';
import { CreateCustomer } from './CreateCustomer';
import CustomerList from './CustomerList';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';


export default function Customers(props) {
    const dispatch = useDispatch();
    const [search, setSearch] = useState();
    const [createModal, setCreateModal] = useState(false);

    console.log(props, "props");
    function searchFunc(e) {
        // const newCustomers = e ? customerData.filter((searchValue) => (searchValue.companyName).includes(e)) : customers
        // setCustomerData(newCustomers);
        setSearch(e)
        dispatch(CustomersSearch(e))
    }
    return (
        <div>
            <CreateCustomer createModal={createModal} setCreateModal={setCreateModal} />
            <div className='d-flex justify-content-between w-100'>
                <div className='m-4 w-100'>
                    <input className='w-100 form-control' placeHolder="Search for company name and tax number" value={search} onChange={(e) => searchFunc(e.target.value)} />
                </div>
                <div className='m-4 w-25'>
                    <button type="button" class="btn btn-primary w-100" onClick={() => setCreateModal(true)}>
                        <FormattedMessage
                            id="newCustomer" />
                    </button>
                </div>
            </div>
            <CustomerList />
        </div>
    )
}
