import * as Yup from 'yup';

const SignupValidator = Yup.object().shape({
    fullName: Yup.string(),
    email: Yup.string()
        .email('Email inválido')
        .required('Requerido'),
    password: Yup.string()
        .min(2, 'Muy corto!')
        .max(10, 'Muy largo!')
        .required('Requerido'),
    passwordConfirmation: Yup.string()
        .equals([Yup.ref('password')], 'Las contraseñas no coinciden')
        .required('Requerido'),

});

export default SignupValidator;