import React from 'react'
import Card from '../UI/Card'
import styles from './UsersList.module.css'

function UsersList(props) {
    return (
        <div>
            <Card className={styles.users}>
            <ul>
                {props.users.map((user =>
                     <li key={user.id}>{user.name} ({user.age}Years old</li>))}
            </ul>
            </Card>
           
        </div>
    )
}

export default UsersList
