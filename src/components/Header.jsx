import { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContext.jsx";

export const Header = () => {

    const [ task, setTask ] = useState("");
    const {setTaskItems, taskItems} = useContext(TaskContext);
    const [ error, setError ] = useState('');

    const handleSetTask = (e)=> {
        setTask(e.target.value)
    }
    const handleAddTask = (e) => {
        e.preventDefault(); // همیشه اول باید اینو بزاری
        if (task.trim() !== '') {
            setTaskItems([...taskItems, { id: Math.random(), title: task, status: 'undone' }]);
            setTask('');
            setError('');
        } else {
            setError('Task field can\'t be empty!');
        }
    }


    return (
        <>
            <div className={'flex items-center flex-col gap-10'}>
                <h1 className={'m-auto relative before:content-[""] before:absolute before:w-10 before:h-1 before:rounded-lg before:bg-orange-600 ' +
                    'before:-left-15 before:top-1/2 before:-translate-y-1/2 after:content-[""] after:absolute after:w-10 after:h-1 after:rounded-lg after:bg-orange-600 ' +
                    'after:-right-15 after:top-1/2 after:-translate-y-1/2'}
                >
                    Mini ToDo List
                </h1>
                <form onSubmit={handleAddTask} className={'w-8/9 md:w-5/9 bg-amber-200 flex items-center gap-2 p-3 border-2 border-black rounded-lg'}>
                    <input
                        onChange={handleSetTask}
                        value={task}
                        className={'bg-amber-100 border border-transparent focus:border-amber-600 outline-none focus:bg-white transition-colors duration-300 w-full  rounded-md p-2'}
                        type="text"
                    />
                    <button  className={'bg-orange-500 hover:bg-orange-400 text-white py-2 px-4 text-sm rounded-md'} type={'submit'}>SUBMIT</button>
                </form>

            </div>
            <p className={`text-center mt-1 text-sm text-red-500 transition-all duration-300 opacity-0 -translate-y-4 ${error !== '' ? 'translate-y-0 opacity-100' : ''}`}>{error}</p>
        </>
    )
}