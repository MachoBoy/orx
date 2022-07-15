const TodoList = ({ todoList, handleTodo, removeTodo }) => {
  const getComplete = (todoList) => {
    return todoList?.filter((todo) => (todo.completed ? true : false)).length;
  };
  const getIncomplete = (todoList) => {
    return todoList?.filter((todo) => (!todo.completed ? true : false)).length;
  };
  return (
    <div className='w-full flex justify-center items-center flex-col'>
      <div className='w-full max-w-[700px] my-5 flex flex-row text-center font-semibold'>
        <div className='w-1/2'>Completed: {getComplete(todoList)} </div>
        <div className='w-1/2'>Incompleted: {getIncomplete(todoList)} </div>
      </div>
      <ul>
        {todoList.map(({ id, title, completed }, index) => {
          return (
            <div
              key={index}
              className='mt-3 flex flex-row justify-center items-center'
            >
              <li
                className={` flex justify-center w-[700px] h-9 border-2 border-slate-600 ${
                  completed ? 'line-through bg-purple-300' : 'no-underline'
                }`}
                onClick={() => handleTodo(id)}
              >
                {title}
              </li>
              <button
                className='p-2 button bg-red-400 text-white'
                onClick={() => removeTodo(id)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
