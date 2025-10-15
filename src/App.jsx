import React from 'react';
import { Header } from "./components/Header.jsx";
import { FormBody } from "./components/FormBody.jsx";
import { TaskProvider } from "./contexts/TaskContext.jsx";
import { Creator } from "./components/Creator.jsx";

function App() {
    return (
        <>
            <TaskProvider>
                <Header/>
                <FormBody/>
                <Creator/>
            </TaskProvider>
        </>
    );
}

export default App;