import { useState } from 'react';

function useFormInput<T extends boolean | number | string> (initialValue: T | null = null) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e: React.ChangeEvent<{ value: T }>) {
        setValue(e.target.value);
    }

    return {
        onChange: handleChange,
        value
    };
}

export default useFormInput;
