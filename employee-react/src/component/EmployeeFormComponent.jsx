import { useEffect, useState } from "react"
import { getEmployeeById, newEmployee, updateEmployee } from "../service/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";


export const EmployeeFormComponent = () => {
   const [firstName,setFirstName] = useState('');
   const [lastName,setLastName] = useState('');
   const [email,setEmail] = useState('');
   const [phoneNumber,setPhoneNumber] = useState('');
   const [hiredDate,setHiredDate] = useState('');
   const [salary,setSalary] = useState(0);

   const navigator = useNavigate();

   const {id} = useParams();
   useEffect(()=>{
      if(id){
         getEmployeeById(id)
      .then(resp => {
         setFirstName(resp.data.first_name);
         setLastName(resp.data.last_name);
         setEmail(resp.data.email);
         setPhoneNumber(resp.data.ph_No);
         setHiredDate(resp.data.hire_date);
         setSalary(resp.data.salary);
      }).catch(e => console.log(e));
      } 
   },[]);
   
   const createOrUpdateEmployee = e => {
      e.preventDefault();
      const employee = {

         firstName,lastName,email,phoneNumber,hiredDate,salary
      }
      if(id){
         updateEmployee(employee,id).then(resp => navigator("/employees")).catch(e => console.log(e)) ;
      }else{
         newEmployee(employee).then(resp => {
            console.log(resp.data);
            navigator("/employees")
         })
         .catch(e => console.log(e));
      }
      
   }
   const firstNameHandler = (e) => setFirstName(e.target.value);// one way and seond way html onchange react's event

      return (
         <>
         <div className="container mt-5">
            <div className="row">
               <div className="col">
                  <div className="card">
                     <div className="card-header">
                        <h4>{id ? 'Employee Update' : "Employee Form"}</h4>
                     </div>
                     <div className="card-body">
                        <div className="row">
                           <div className="offset-2 col-8"></div>
                        </div>
                        <form>
                           <div className="mb-3">
                              <label className="form-label">FirstName</label>
                              <input type="text" className="form-control" value={firstName} onChange={firstNameHandler} />
                           </div>
                           <div className="mb-3">
                              <label className="form-label">LastName</label>
                              <input type="text" className="form-control" value={lastName} onChange={e => setLastName(e.target.value)} /> 
                           </div>
                           <div className="mb-3">
                              <label className="form-label">Email</label>
                              <input type="text" className="form-control" value={email} onChange={e => setEmail(e.target.value)} /> 
                           </div>
                           <div className="mb-3">
                              <label className="form-label">Phone Number</label>
                              <input type="text" className="form-control" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} /> 
                           </div>
                           <div className="mb-3">
                              <label className="form-label">Hired Date</label>
                              <input type="date" className="form-control" value={hiredDate} onChange={e => setHiredDate(e.target.value)} /> 
                           </div>
                           <div className="mb-3">
                              <label className="form-label">Salary</label>
                              <input type="text" className="form-control" value={salary} onChange={e => setSalary(e.target.value)} /> 
                           </div>

                           <button onClick={createOrUpdateEmployee} className="btn btn-primary">{id ?'Update' : 'Save Employee'}</button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         </>
      )
}