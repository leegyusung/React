import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
import { useCallback, useReducer, useRef, useState } from 'react'

function createBulkDate() {
  const array = [];
  for (var i = 0; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false
    })
  }
  return array;
}

function App() {
  const [todos, setTodos] = useState(createBulkDate)
  const nextId = useRef(2501);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos => todos.concat(todo));
      nextId.current += 1;
    }, [todos]);

  const onRemove = useCallback(
    id => {
      setTodos(todos => todos.filter(todo => todo.id !== id));
    }, [todos]);

  const onToggle = useCallback(
    id => {
      setTodos(todos => todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo)
      )
    }, [todos]
  )
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
