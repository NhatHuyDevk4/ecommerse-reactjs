import React, { useState } from 'react';
import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Login() {
    const { container, title, boxRememberMe, lostPw, errors } = styles;

    //Register
    const [openRegister, setOpenRegister] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            confirmPassword: Yup.string().oneOf(
                [Yup.ref('password'), null],
                'Password must match'
            )
        }),
        onSubmit: (values) => {
            // Handle form submission
            console.log(values);
        }
    });

    const handleToggle = () => {
        setOpenRegister(!openRegister);
    };

    return (
        <div className={container}>
            <div className={title}>{openRegister ? 'SIGN UP' : 'SiGN IN'}</div>

            <form onSubmit={formik.handleSubmit}>
                <InputCommon
                    id='email'
                    name='email'
                    label='Email'
                    type='text'
                    isRequired
                    // onBlur={formik.handleBlur}
                    // onChange={formik.handleChange}
                    // value={formik.values.email}
                    formik={formik}
                />
                {/* touched là out khỏi forcus tức đang nhập xong chuyển ô có lỗi thì báo
                {formik.touched.email && formik.errors.email && (
                    <div className={errors}>{formik.errors.email}</div>
                )} */}
                <InputCommon
                    id='password'
                    name='password'
                    label='Password'
                    type='password'
                    isRequired
                    // onBlur={formik.handleBlur}
                    // onChange={formik.handleChange}
                    // value={formik.values.password}
                    formik={formik}
                />
                {/* {formik.touched.password && formik.errors.password && (
                    <div className={errors}>{formik.errors.password}</div>
                )} */}

                {openRegister && (
                    <InputCommon
                        id='confirmPassword'
                        name='confirmPassword'
                        label='Confirm password'
                        type='password'
                        isRequired
                        formik={formik}
                    />
                )}

                {!openRegister && (
                    <div className={boxRememberMe}>
                        <input type='checkbox' />
                        <span>Remember me</span>
                    </div>
                )}

                <Button
                    content={openRegister ? 'REGISTER' : 'LOGIN'}
                    type='submit'
                />
            </form>

            <Button
                type='submit'
                content={
                    openRegister
                        ? 'Already have an account?'
                        : 'Do not have an account?'
                }
                isPriamry={false}
                style={{ marginTop: '10px' }}
                onClick={handleToggle}
            />
            {!openRegister && <div className={lostPw}>Lost your password?</div>}
        </div>
    );
}

export default Login;
