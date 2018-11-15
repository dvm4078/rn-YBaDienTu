import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  appHeaderAppearance: ['showLeft', 'showRight', 'camera'],
});

export const AppHeaderTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  showLeft: true,
  showRight: true,
  camera: true,
});

/* ------------- Selectors ------------- */

export const AppHeaderSelectors = {
  getAppearance: state => ({
    showLeft: state.showLeft,
    showRight: state.showRight,
    camera: state.camera,
  }),
};

/* ------------- Reducers ------------- */

export const appear = (state, { showLeft, showRight, camera }) =>
  state.merge({ showLeft, showRight, camera });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.APP_HEADER_APPEARANCE]: appear,
});
