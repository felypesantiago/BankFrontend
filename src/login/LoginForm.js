import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function LoginForm() {
    return (
        <Formik 
        initialValues={{username: '', password: ''}} 
        validationSchema={Yup.object({
            username: Yup.string()
                .required('User name is required to log in your bank account.'),
            password: Yup.string()
                .required('Password is required to login in your bank account.')
        })}>
            <Form>
                <div className="form-group">
                    <label htmlFor="username">User name</label>
                    <Field className="form-control" name="username" type="text" />
                    <ErrorMessage name="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field className="form-control" name="password" type="password" />
                    <ErrorMessage name="password" />
                </div>
                <button type="submit" className="btn btn-primary" style={{marginTop: '25px', float: 'right', margin: '20px 0', width: '150px'}}>Login</button>
            </Form>
          </Formik>
    );
}

export default LoginForm;
