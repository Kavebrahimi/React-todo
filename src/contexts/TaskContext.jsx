import { createContext, useState } from "react";

export const TaskContext = createContext({})

export const TaskProvider = ({children}) => {

    const [ taskItems, setTaskItems ] = useState([
        {
            id: 1,
            title: "First Jobs ",
            status: 'done',
        },
        {
            id: 2,
            title: "Second Job",
            status: 'undone',
        },
    ])

  return (

      <TaskContext value={{
        taskItems, setTaskItems,
      }}>
          {children}
      </TaskContext>

  );
};