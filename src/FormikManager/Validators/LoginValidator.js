import * as Yup from 'yup';

const LoginValidator = Yup.object().shape({
    email: Yup.string()
        .email('Email inválido')
        .required('Requerido'),
    password: Yup.string()
        .min(2, 'Muy corto!')
        .max(10, 'Muy largo!')
        .required('Requerido')
});

export default LoginValidator;