import { Dispatch } from 'react';

import { Service } from './config';

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'SET_SERVICE':
    case 'SET_LENGTH':
    case 'SET_WIDTH':
    case 'SET_HEIGHT':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export const setService = (service: Service) =>
  ({ type: 'SET_SERVICE', payload: { service } } as const);
export const setLength = (length: number) =>
  ({ type: 'SET_LENGTH', payload: { length } } as const);
export const setWidth = (width: number) =>
  ({ type: 'SET_WIDTH', payload: { width } } as const);
export const setHeight = (height: number) =>
  ({ type: 'SET_HEIGHT', payload: { height } } as const);

// types
type State = {
  service: Service;
  length: number;
  width: number;
  height: number;
};

type Action =
  | ReturnType<typeof setService>
  | ReturnType<typeof setLength>
  | ReturnType<typeof setWidth>
  | ReturnType<typeof setHeight>;

export type FieldAC = typeof setLength | typeof setWidth | typeof setHeight;
export type CalculatorDispatch = Dispatch<Action>;
