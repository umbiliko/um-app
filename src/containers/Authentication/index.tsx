import * as React from 'react';
import RecoverAccessForm from './RecoverAccessForm';
import RecoverIdentityForm from './RecoverIdentityForm';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import UpdateSecretForm from './UpdateSecretForm';
import useForm from 'src/effects/useForm';

export default () => {

    const { original, modified, acceptChanges, hasChanges, rejectChanges } = useForm({
        email: null,
        identity: null,
        mobile: null,
        secret: null,
        token: null
    });

    return (
        <section>
            <RecoverAccessForm />
            <UpdateSecretForm />
            <RecoverIdentityForm />
            <SignInForm />
            <SignUpForm />
        </section>
    );
}