import React from 'react';
import { Header } from "./components/Header.jsx";
import { FormBody } from "./components/FormBody.jsx";
import { TaskProvider } from "./contexts/TaskContext.jsx";

function App() {
    return (
        <>
            <TaskProvider>
                <Header/>
                <FormBody/>
            </TaskProvider>
        </>
    );
}

export default App;