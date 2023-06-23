import { useEffect, useState } from 'react';
import { auth, db } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import Task from '../component/Task';

const Tasks = () => {
    const [user] = useAuthState(auth);
    const currentUserUsername = user?.displayName;
    const currentUserId = user?.uid;

    const [taskList, setTaskList] = useState([]);

    const getTasks = async () => {
        const q = query(
            collection(db, 'Tasks'),
            where('username', '==', currentUserUsername),
            where('userId', '==', currentUserId)
        );

        const querySnapshot = await getDocs(q);
        const tasks = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setTaskList(tasks);
        console.log(tasks);
    };
    const handleCheckboxChange = async (taskId) => {
        const taskRef = doc(db, "Tasks", taskId);
        const taskSnapshot = await getDoc(taskRef);

        if (taskSnapshot.exists()) {
            const taskData = taskSnapshot.data();
            const updatedStatus = !taskData.status;

            await updateDoc(taskRef, { status: updatedStatus });

            setTaskList((prevTaskList) =>
                prevTaskList.map((task) =>
                    task.id === taskId ? { ...task, status: updatedStatus } : task
                )
            );
        }
    };


    const handleDeleteTask = async (taskId) => {
        try {
            // Delete task from Firestore
            const taskRef = doc(db, "Tasks", taskId);
            await deleteDoc(taskRef);

            // Update taskList state by filtering out the deleted task
            setTaskList((prevTaskList) =>
                prevTaskList.filter((task) => task.id !== taskId)
            );
        } catch (error) {
            console.log("Error deleting task:", error);
        }
    };



    useEffect(() => {
        getTasks();
    }, [currentUserUsername, currentUserId]);

    return (
        <div className='genContainer'>
            <h1 className="text-center">Tasks</h1>
            <div className="tasks">
                {taskList.length === 0 ? (
                    <h3>You Don't Have Any Tasks Yet</h3>
                ) : (
                    taskList.map((task) => (
                        <Task task={task} key={task.id} id={task.id} handleCheckboxChange={handleCheckboxChange} handleDeleteTask={handleDeleteTask} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Tasks;
