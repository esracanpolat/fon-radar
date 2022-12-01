import React from 'react'
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersApiRequest } from '../../redux/services/usersService';
import jwtEncode from "jwt-encode";
import "../login/login.css";

export default function Login() {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const users = useSelector(state => state.users)

    useEffect(() => {
        dispatch(getUsersApiRequest());
        console.log(users.users.includes((x) => x.username), "users");
    }, []);

    function onSubmit(p) {
        const findUser = users.users.map((x) => { return (x.username === p.email && x.password == p.password) ? true : false });
        if (findUser.includes(true)) {
            const decode = jwtEncode(p)
            console.log(decode, "found user");
        }
    }
    return (
        <div className='login d-flex justify-content-center align-items-center'>
            <div className=' '>
                <h3> Kullanıcı Girişi</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"{...register("email")} />
                        <div id="emailHelp" class="form-text" >We'll never share your email with anyone else.</div>
                    </div>
                    <div>
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" aria-describedby="pass" {...register("password")} />
                        <div id="pass" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className='mt-3'>
                        <button type="submit" class="btn btn-primary w-100" >Giriş Yap</button>
                    </div>
                </form>
            </div>
        </div>
    )
}