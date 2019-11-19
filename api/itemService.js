const store = {
  items: [],
};

const getItems = () => {
  return store.items;
};

const addItem = (title) => {
  const maxId = store.items.length;
  store.items = [
    ...store.items,
    { id: maxId + 1, title, completed: false } //tasks에 들어갈 형식을 만들어줌
  ];

  return store.items;
}

const removeItem = (id) => {
  store.items = store.items.filter(task => task.id != id);  //선택하지 않은 아이디들로 새로 만들어줌
  return store.items;
}

const toggleItem = (id) => {
  store.items.forEach(item => { //배열을 처음부터 끝까지 순환하여 
    if (item.id == id) { // 선택한 아이디의 'completed'상태를 반대로 바꿔줌
      task.completed = !task.completed;
    }
  });
  return store.items;
};

module.exports = {
  getItems,
  addItem,
  removeItem,
  toggleItem,
};