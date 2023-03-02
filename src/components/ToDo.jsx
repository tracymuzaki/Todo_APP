import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ToDo = ({ toDo, markDone, setUpdateData, deleteTask }) => {
    return(
        <>
            {toDo && toDo
                .sort((a,b)=> a.id > b.id ? 1 : -1)
                .map((task, index ) => {
                return(
                    <React.Fragment key={task.id}>
                    <div className='col todoBg'>
                        <div className={task.status ? 'done' : ''}>
                        <span className='todoNumber'>{index + 1}</span>
                        <span className='todoText'>{task.title}</span>
                        </div>
                        <div className='iconsWrap'>
                        <span className='check' title='completed / Not completed' onClick={(e)=> markDone(task.id)}>
                            <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                        </span>
        
                        {task.status ? null : (
                            <span className='edit' title='Edit' onClick={()=> setUpdateData({
                            id: task.id,
                            title: task.title,
                            status: task.status ? true : false
                            })}>
                            <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                            </span>
                        )}
        
                        <span className='delete' title='Delete' onClick={()=> deleteTask(task.id)}>
                            <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                        </span>
                        </div>
                    </div>
                    </React.Fragment>
                )
                })
            }
        </>
    
    )
}

export default ToDo;