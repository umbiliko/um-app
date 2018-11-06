import { useReducer } from 'react';
import reducer, { actions, ImmutableState } from 'src/reducers/immutableReducer';

export default (initialState: ImmutableState) => {
    const [state, dispatch] = useReducer<ImmutableState>(reducer, initialState);

    return {
        reset: (next: ImmutableState) => dispatch(actions.reset(next)),
        set: (key: string, value: any) => dispatch(actions.set(key, value)),
        setIn: (keyPath: KeyArray, value: any) => dispatch(actions.setIn(keyPath, value)),
        state,
        update: (key: string, value: any) => dispatch(actions.update(key, value)),
        updateIn: (keyPath: KeyArray, value: any) => dispatch(actions.updateIn(keyPath, value))
    };
}