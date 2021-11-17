
const validation = (values) => {
    let errors = {};

    if(!values.name) {
        errors.name='A name is required'
    } else if (values.name.length < 3) {
        errors.name='Name must be at least 3 characters long'
    }

    if(!values.email) {
        errors.email='Email is required'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email='Email is invalid'
    }

    if(!values.password) {
        errors.password='Password is required'
    } else if(values.password.length < 5) {
        errors.password='Password must be at least 7 characters long'
    }

    return errors;
}

export default validation