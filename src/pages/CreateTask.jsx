import React from 'react'
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { addDoc, collection } from "firebase/firestore"
import { auth, db } from "../config/firebase"
import { async } from "@firebase/util"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"

const CreateTask = () => {
    const navigate = useNavigate()

    const [user] = useAuthState(auth);

    const schema = yup.object().shape({
        title: yup
            .string('Please enter a task name')
            .required(),
        description: yup.string().required("There Must Be A Description"),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const taskRef = collection(db, "Tasks")

    const onCreatePost = async (data) => {
        let newData = {
            ...data,
            userId: user?.uid,
            username: user?.displayName,
            status: false,
        };
        await addDoc(taskRef, newData)
        navigate("/tasks")
        // Add the new post to firestore
        console.log(newData);
    }

    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit(onCreatePost)}>
                <input type="text" placeholder='Title...' {...register("title")} />
                <br />
                <p style={{ color: "red" }}> {errors.title?.message} </p>
                <textarea type="text" placeholder='Description...' {...register("description")} />
                <br />
                <p style={{ color: "red" }}> {errors.description?.message} </p>
                <input type='submit' />
            </form>
        </div>
    )
}

export default CreateTask