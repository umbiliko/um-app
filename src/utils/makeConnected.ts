import { ComponentType } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { isString } from 'ts-util-is';
import { getConnected } from '../selectors/getConnected';
import { IConnected, IMap, IRootState, value } from 'um-ts';
import { requireConnected } from './requireConnected';
import { clearValue, setValue } from '../actions/change';

export function makeConnected(component: ComponentType) {
    const mapStateToProps = (state: IRootState, ownProps): IMap<any> & IConnected => {
        const connected = isString(ownProps.key) ? getConnected(state, ownProps) : {} as IConnected;

        return {
            ...ownProps,
            ...requireConnected(connected)
        };
    }

    const mapDispatchToProps = (dispatch: Dispatch, props) => {

        const { key } = props;

        return {
            clearValue: () => {
                key && dispatch(clearValue(key))
            },
            setValue: (value: value) => {
                key && dispatch(setValue(key, value))
            },
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(component);
}