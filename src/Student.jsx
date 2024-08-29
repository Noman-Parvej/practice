export default function Student ({student}){
    return(
      <div className='student'>
        <p>This is a Singer</p>
        <p>Name :{student.name} </p>
        <p>Age : {student.age}</p>
      </div>
    )
  
  }