import { slice} from './noteReducer';
import * as noteSelectors from './selectors';
const notesReducer = slice.reducer

const noteActions = {
    ...slice.actions
}

export {
    notesReducer,
    noteActions,
    noteSelectors
}