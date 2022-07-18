import {asyncActions, slice} from './noteReducer';
import * as noteSelectors from './selectors';
const notesReducer = slice.reducer

const noteActions = {
    ...asyncActions,
    ...slice.actions,

}

export {
    notesReducer,
    noteActions,
    noteSelectors
}