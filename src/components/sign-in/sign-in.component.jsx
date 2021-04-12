import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle, signInWithFacebook } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

// usamos un componente de tipo clase porque necesitamos guardarnos la información que ingresa el usuario

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render () {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' handleChange={this.handleChange} label='email' value={this.state.email} required />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required />
                    <CustomButton type='submit'> Sign In </CustomButton>
                    <CustomButton onClick= {signInWithGoogle } isGoogleSignIn > Sign In With Google </CustomButton>
                    <CustomButton onClick= {signInWithFacebook }> Sign In With Facebook </CustomButton>
                </form>
            </div>
        )
    }

}

export default SignIn;