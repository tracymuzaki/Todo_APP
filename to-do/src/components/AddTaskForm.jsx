const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
    return(
        <>
          {/* Form to add task */}
          <div className='row'>
            <div className='col'>
              <input value={newTask} onChange={(e)=> setNewTask(e.target.value)} className='form-control form-control-lg'></input>
            </div>
            <div className='col-auto'>
              <button onClick={addTask} className='btn btn-lg btn-success' id="add">
                Add Task
              </button>
            </div>
          </div>
          <br></br>
        </>
    )
}
  
export default AddTaskForm;