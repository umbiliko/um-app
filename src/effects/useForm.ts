import { fromJS } from 'immutable';
import { useState } from 'react';
import useImmutableState from './useImmutableState';

function useForm<S extends SimpleObject> (initialState: S | null = null) {
    const [original, setState] = useState(initialState);
    const { reset, set, state: modified, setIn } = useImmutableState(fromJS(initialState));

    const handleChanges = <V extends boolean | Date | number | string>(key: string | KeyArray) => (e: React.ChangeEvent<{ value: V }>) => {
        const { value } = e.target;
        if (isArray(key)) {
            setIn(key, value);
        } else {
            set(key, value);
        }
    };

    const hasChanges = () => modified.equals(fromJS(original));

    const acceptChanges = () => {
        setState(modified.toJS());
    };

    const rejectChanges = () => {
        reset(fromJS(original));
    };

    return {
        acceptChanges,
        handleChanges,
        hasChanges,
        original,
        modified,
        rejectChanges
    };
}

export default useForm;
