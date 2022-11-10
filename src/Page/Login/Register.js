import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import login from '../../access-11/login-2.svg'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const Register = () => {
    const { createUser, googleSignIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const handleForm = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(confirm);
        form.reset();

        // create user------------
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err))
    }

    // google sing in------
    const googleHandler = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error('error name', err))
    }


    return (
        <div className="hero min-h-screen bg-stone-400 rounded-lg my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-20">
                    <img src={login} alt="" />
                </div>


                <form onSubmit={handleForm} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-zinc-300">
                    <h1 className='text-center text-2xl font-semibold text-orange-500 py-4'>Register</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='confirm' placeholder="confirm password" className="input input-bordered" />
                            <label className="label">
                                <Link className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-active btn-accent" type="submit" value="Register" />
                            <p className='text-center pt-2 text-sm'>You have already account ? <Link to='/login' className='text-orange-400'>Login</Link> now</p>
                            <p className='text-center text-sm text-slate-500 py-3 divider'>Or</p>
                            <button onClick={googleHandler} className='text-3xl mx-auto'><FcGoogle /></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;