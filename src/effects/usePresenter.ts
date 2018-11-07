import { useContext } from 'react';
import PresenterContext from 'src/context/PresenterContext';

export default function usePresenter() {
    return useContext(PresenterContext)
}