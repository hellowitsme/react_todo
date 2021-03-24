// reducerへ渡すプロパティを定義する
// 各アクションごとに更新する値とstateを定義
// 何を行うのかtypeで指定(大文字)


export function addTask(id, content) {
  return {
    type: "ADD",
    id, id,
    content: content
  };
}

export function deleteTask(id, isDone) {
  return {
    type: "DELETE",
    id: id,
    isDone: isDone
  };
}

export function updateTask(id, content) {
  return {
    type: "UPDATE",
    id: id,
    content: content
  };
}

export function toggleDone(id) {
  return {
    type: "TOGGLE DONE",
    id: id
  };
}

export function searchWord(content) {
  return {
    type: "SEARCH",
    searchWord: content
  };
}