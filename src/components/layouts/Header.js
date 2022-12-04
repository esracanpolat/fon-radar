import React from 'react'

export const Header = ({ setLocale }) => {
    function SelectLang(e) {
        setLocale(e)
    }
    return (
        <div className='d-flex justify-content-between align-items-center header' >
            <div className='m-2'>
                Fon Radar
            </div>
            <div className='m-2'>
                <select class="form-select" aria-label="Default select example" onChange={(e) => SelectLang(e.target.value)}>
                    <option selected>Select Language</option>
                    <option value="en">English</option>
                    <option value="tr">Turkish</option>
                    <option value="fr">French</option>
                </select>
            </div>
        </div>
    )
}
