import { useContext } from 'react';
import RouterContext from 'src/context/RouterContext';

export default function useRouter() {
    if (!useContext) {
        throw new Error('React >= 16.7 required');
    }
    return useContext(RouterContext)
}