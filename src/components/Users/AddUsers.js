import React ,{useState} from 'react'
import Card from '../UI/Card'
import styles from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

function AddUsers( props) {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()

    const addUserHandler =(e)=>{
        e.preventDefault()
        if (enteredUsername.trim().length===0||enteredAge.trim().length===0){
            setError({
                title:'invalid input',
                message:'Please enter a valid name and age(non-empty values)'
            })
            return
        }
        if(+enteredAge<1){
            setError({
                title:'invalid age',
                message:'Please enter a valid age(>0)'
            })
            return
        }

        props.onAddUser(enteredAge,enteredUsername)
        setEnteredUsername('')
        setEnteredAge('')

    }

    const usernameChangeHandler =(e)=>{
        setEnteredUsername(e.target.value)
    }

    const AgeChangeHandler =(e)=>{
        setEnteredAge(e.target.value)
       
    }
    const errorHandler =()=>{
        setError(null)
    }
    return (
        <div>
            {error&&<ErrorModal 
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
            />}
            <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
              <label htmlFor='username'>Username</label>
              <input id='username' type='text' value={enteredUsername} onChange={usernameChangeHandler}/>
              <label htmlFor='age'>Age(years)</label>
              <input id="age" type='number' value={enteredAge} onChange={AgeChangeHandler}/>
              <Button type='submit'>Add user</Button>
          </form>
            </Card>
          

        </div>
    )
}

export default AddUsers
