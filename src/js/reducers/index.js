// reducers結合ファイル

import {combineReducers} from "redux"; //reducerを結合するライブラリ
import task from "./task"; //結合するファイル

const reducer = combineReducers({
  task
});

export default reducer;