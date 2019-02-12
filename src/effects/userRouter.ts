import { useContext } from 'react';
import { RouterProps } from 'react-router';
import RouterContext from 'src/context/RouterContext';

export default function useRouter(): RouterProps {
    if (!useContext) {
        throw new Error('React >= 16.3 required');
    }
    return useContext(RouterContext)
}
