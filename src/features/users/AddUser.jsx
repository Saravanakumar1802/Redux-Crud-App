import { useState } from "react"
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addUser } from "./UserSlice"

const AddUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [values, setValues] = useState({
        name: '',
        email: '',
    })
    const handleAddUser = () => {
        if (values.name && values.email) {
            setValues({ name: '', email: '' })
            navigate('/')
            dispatch(addUser({
                id: uuidv4(),
                name: values.name,
                email: values.email
            }))
        }
        else {
            alert('Fill the field')
        }
    }
    return (
        <div className="mt-10 max-w-xl mx-auto">
            <TextField
                label='Name'
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                inputProps={{ type: 'text', placeholder: 'Nathan Drake' }}
            />
            <br />
            <TextField
                label='Email'
                value={values.email}
                onChange={(e) => setValues({ ...values, email: e.target.value })}
                inputProps={{ type: 'email', placeholder: 'nathandrake@gmail.com' }}
            />
            <Button onClick={handleAddUser}>Submit</Button>
        </div>
    )
}

export default AddUser