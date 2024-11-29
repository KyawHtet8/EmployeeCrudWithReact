import { useEffect, useState } from "react"
import { listEmployees, removeEmployee } from "../service/EmployeeService";
import { Link, useNavigate } from "react-router-dom";




 export const EmployeeListComponent = () =>{

      const navigator = useNavigate();
   const[employees,setEmployees] = useState([]);

   useEffect(()=> {

      findAllEmployees()

   },[]);

   const findAllEmployees = () => listEmployees()
   .then(emp => setEmployees(emp.data))
   .catch(e => console.log(e));

   const toEmployeeUpDateForm = id => navigator(`/update-employee/${id}`);
   const deleteEmployee = id => removeEmployee(id)
   .then(resp => findAllEmployees())
   .catch(e => console.log(e));

   return (
      <>
      <div className="container mt-5">
         <Link to="/employee-form" className= "btn btn-primary my-3">New Employee</Link>
         <Link></Link>
         <div className="row">
            <div className="column">
               <div className="card">
                  <div className="card-header">
                     <h4>Employees Table</h4>

                  </div>
                  <table className="table table-striped  table-bordered">
                     <thead>
                        <tr>
                           <th>ID</th>
                           <th>FirstName</th>
                           <th>LastName</th>
                           <th>Email</th>
                           <th>PhoneNumber</th>
                           <th>HiredDate</th>
                           <th>Salary</th>
                        </tr>
                     </thead>
                     <tbody>
                        {
                           employees && employees.map((employee) =>(
                              <tr key={employee.id}>
                                 <td>{employee.id}</td>
                                 <td>{employee.first_name}</td>
                                 <td>{employee.last_name}</td>
                                 <td>{employee.email}</td>
                                 <td>{employee.ph_No}</td>
                                 <td>{employee.hire_date}</td>
                                 <td>{employee.salary}</td>

                                 <td>
                                    <button className="btn btn-outline-primary me-2" onClick={
                                       () => toEmployeeUpDateForm(employee.id)
                                    }>Update</button>
                                    <button className="btn btn-outline-danger"
                                    onClick={() => deleteEmployee(employee.id)}
                                    >Delete</button>
                                 </td>
                              </tr>
                           ))
                        }
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
      </>
   )
}