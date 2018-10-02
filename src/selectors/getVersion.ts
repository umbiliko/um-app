import { IRootState } from 'um-ts';

export const getVersion = (state: IRootState) => (state && state.values && state.values.version) || 0;