import * as types from "./actionTypes";

export function addFeature() {
  return {
    type: types.ADD_FEATURE
  };
}
export function removeFeature() {
  return {
    type: types.REMOVE_FEATURE
  };
}
