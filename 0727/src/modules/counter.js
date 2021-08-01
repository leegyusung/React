import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECRRASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

export const increaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(increase())
    }, 1000);
}
export const decreaseAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(decrease())
    }, 1000);
}


const initialState = 0;

const counter = handleActions(
    {
        [INCREASE]: state => (state + 1),
        [DECREASE]: function (state) {
            if (state !== 0) {
                return state - 1
            }
            return state
        },
    },
    initialState
)
export default counter;