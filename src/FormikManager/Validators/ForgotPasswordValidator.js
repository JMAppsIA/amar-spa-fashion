import * as Yup from 'yup';

const ForgotPasswordValidator = Yup.object().shape({
    email: Yup.string()
        .email('Email inválido')
        .required('Requerido')
});

export default ForgotPasswordValidator;