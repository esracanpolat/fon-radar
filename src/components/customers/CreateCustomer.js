import React from 'react'
import { useForm } from 'react-hook-form';

export const CreateCustomer = () => {
    const { register, handleSubmit } = useForm();
    function onSubmit(e) {
        console.log(e);
    }

    return (
        <>
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
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
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </>
    )
}
