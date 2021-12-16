import React, { useState, Fragment, createRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Grid, TextField } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

const ContactForm = () => {
    const router = useRouter();
    const [disabled, setDisabled] = useState(false);
    const recaptchaRef = createRef();
    const [sent, setSent] = useState(false);
    const [mess, setMess] = useState('');
    const [error, setError] = useState(false);
    const [warning, setWarn] = useState(false);
    const [errs, setErrs] = useState();
    const [formData, setFormdata] = useState({
        origin: 'contact',
        fullname: '',
        phone: '',
        clientemail: '',
        message: '',
    });

    const { fullname, phone, clientemail, message } = formData;

    const onChange = (e) => {
        setFormdata({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        const recaptchaValue = recaptchaRef.current.getValue();
        await axios
            .post('https://admin.onestopspaces.com/api/emails', formData)
            .then((res) => {
                if (!recaptchaValue) {
                    setWarn(true);
                    setDisabled(false);
                } else if (res.data.msg === 'success') {
                    setError(false);
                    setWarn(false);
                    setSent(true);
                    setMess('The form has been sent successfully!');
                    router.push('/thank-you');

                    setFormdata({
                        origin: 'contact',
                        fullname: '',
                        phone: '',
                        clientemail: '',
                        message: '',
                    });
                    setDisabled(false);
                    recaptchaValue.current.reset();
                } else if (res.data.msg === 'fail') {
                    setError(true);
                    setSent(false);
                    setDisabled(false);
                }
            })
            .catch((err) => {
                const errors = err.response.data.errors;
                setError(true);
                setDisabled(false);
                if (errors) {
                    setErrs(errors);
                }
            });
    };

    return (
        <form
            onSubmit={(e) => onSubmit(e)}
            noValidate
            id='fm-contact-form'
            className='fm-contact-one'
            style={{
                backgroundColor: '#fff',
                zIndex: 999,
                position: 'relative',
                padding: 50,
                boxShadow: '0 0 20px rgba(0,0,0,0.3)',
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <TextField
                        name='fullname'
                        required
                        variant='outlined'
                        fullWidth
                        id='fullname'
                        label='Full Name'
                        value={fullname}
                        onChange={(e) => onChange(e)}
                        style={{ backgroundColor: '#fff', borderRadius: 5 }}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        fullWidth
                        variant='outlined'
                        id='phone'
                        label='Phone'
                        name='phone'
                        autoComplete='pnumber'
                        value={phone}
                        onChange={(e) => onChange(e)}
                        style={{ backgroundColor: '#fff', borderRadius: 5 }}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        fullWidth
                        variant='outlined'
                        id='clientemail'
                        label='Email'
                        name='clientemail'
                        autoComplete='clientemail'
                        value={clientemail}
                        onChange={(e) => onChange(e)}
                        style={{ backgroundColor: '#fff', borderRadius: 5 }}
                    />
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                    <TextField
                        fullWidth
                        required
                        variant='outlined'
                        id='message'
                        label='Message'
                        multiline
                        rows={4}
                        name='message'
                        value={message}
                        onChange={(e) => onChange(e)}
                        style={{ backgroundColor: '#fff', borderRadius: 5 }}
                    />
                </Grid>
                <Grid item xs={12}>
                    {warning && (
                        <Fragment>
                            <Alert severity='warning'>
                                <AlertTitle>Warning</AlertTitle>
                                Check the box to prove you are not a robot
                            </Alert>
                        </Fragment>
                    )}
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey=''
                        onChange={onChange}
                        className='g-recaptcha'
                    />
                </Grid>
                <Grid item xs={12}>
                    {sent && (
                        <Fragment>
                            <Alert severity='success'>
                                <AlertTitle>Success</AlertTitle>
                                {mess}
                            </Alert>
                        </Fragment>
                    )}
                </Grid>
                <Grid item xs={12}>
                    {error && (
                        <Fragment>
                            <Alert severity='error'>
                                <AlertTitle>Error</AlertTitle>
                                There was an error sending the form
                                <ul>
                                    {errs &&
                                        errs.length > 0 &&
                                        errs.map((r, index) => (
                                            <li key={index}>{r.msg}</li>
                                        ))}
                                </ul>
                            </Alert>
                        </Fragment>
                    )}
                </Grid>
            </Grid>
            <button className='red-btn' type='submit' disabled={disabled}>
                {disabled ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
};

export default ContactForm;
