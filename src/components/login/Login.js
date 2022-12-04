import React, { useState } from 'react'
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersApiRequest } from '../../redux/services/usersService';
import jwtEncode from "jwt-encode";
import "../login/login.css";
import { useNavigate } from 'react-router-dom';
import { Toast } from 'react-bootstrap';
import sign from 'jwt-encode';

export default function Login() {
    const { register, handleSubmit } = useForm();
    const [warningModal, setWarningModal] = useState(false);
    const dispatch = useDispatch();
    const users = useSelector(state => state.users)

    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getUsersApiRequest());
    }, []);

    function onSubmit(p) {
        const findUser = users.users.map((x) => { return (x.username == p.email && x.password == p.password) ? true : false });

        if (findUser.includes(true) === true) {
            const jwt = sign(p, 'secret');
            navigate("/customers");
        } else {
            setWarningModal(true);
        }
    }
    return (<>
        <div class="d-flex justify-content-end">
            <Toast show={warningModal} onClose={() => setWarningModal(false)}>
                <Toast.Header>
                    <strong className="me-auto">Warning</strong>
                </Toast.Header>
                <Toast.Body>Password or username not correct</Toast.Body>
            </Toast>
        </div>
        <div className='login d-flex justify-content-center align-items-center'>
            <div className=' '>
                <h3> Kullanıcı Girişi</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label for="exampleInputEmail1" class="form-label">User Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"{...register("email")} />
                    </div>
                    <div>
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" aria-describedby="pass" {...register("password")} />
                    </div>
                    <div className='mt-3'>
                        <button type="submit" class="btn btn-primary w-100" >Giriş Yap</button>
                    </div>
                </form>
            </div>
        </div>
    </>
    )
}
