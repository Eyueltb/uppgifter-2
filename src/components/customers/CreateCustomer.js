import React, {useState} from 'react'
import uuid from 'react-uuid';


export const CreateCustomer = ({customers, customerInfo}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [postalCode, setPostalCode] = useState("");

    const firstNameHandler = (e) => { setFirstName(e.target.value) }
    const lastNameHandler = (e) => { setLastName(e.target.value) }
    const emailHandler = (e) => { setEmail(e.target.value) }
    const addressHandler = (e) => { setAddress(e.target.value) }
    const postalCodeHandler = (e) => { setPostalCode(e.target.value) }
    const submitHandler = (e) => {
        e.preventDefault()

        const customer = { id: uuid(), firstName : firstName, lastName : lastName, email : email, address : {address : address , postalCode : postalCode } }
        customerInfo([...customers, customer])
      
        setFirstName('')
        setLastName('')
        setEmail('');
        setAddress('');
        setPostalCode('');
    }
    return (
        <div className="container d-flex justify-content-center mt-5">
        <div className="col-12 col-md-6">
         <form className='col-6' onSubmit={submitHandler}>
           <div className="form-floating mb-5"><h3>Customer Registration</h3></div>
          
           <div className="form-floating mb-3">
                <input id="firstName" type="text" className="form-control needs-validation" placeholder="firstname" onChange={firstNameHandler}/>
                <label htmlFor="regForm-firstName">First Name</label>
                <div id="firstName-error" className="invalid-feedback"><small>You must enter a valid first name </small></div>
            </div>
            <div className="form-floating mb-3">
                <input id="regForm-lastName" type="text" className="form-control needs-validation" placeholder="lastname" onChange={lastNameHandler}/>
                <label htmlFor="regForm-lastName">Last Name</label>
                <div id="regForm-lastName-error" className="invalid-feedback"><small>You must enter a valid lastName</small></div>
            </div>
            <div className="form-floating mb-3">
                <input id="regForm-email" type="email" className="form-control needs-validation" placeholder="name@example.com" onChange={emailHandler}/>
                <label htmlFor="regForm-email">Email</label>
                <div id="regForm-email-error" className="invalid-feedback"><small>You must enter a valid email address</small></div>
            </div>
            <div className="form-floating mb-3">
                <input id="regForm-address" type="text" className="form-control needs-validation" placeholder="address" onChange={addressHandler}/>
                <label htmlFor="regForm-confirm-password">Address</label>
                <div id="regForm-address-error" className="invalid-feedback"><small>You must enter a valid address</small></div>
            </div>
            <div className="form-floating mb-3">
                <input id="postalCode" type="text" className="form-control needs-validation" placeholder="postalCode" onChange={postalCodeHandler}/>
                <label htmlFor="postalCode">PostalCode</label>
                <div id="postalCode-error" className="invalid-feedback"><small>You must enter a valid postal code</small></div>
            </div>
            <div className="d-grid">
                <button id="regForm-submit" className="submit mt-4 btn btn-secondary">Submit</button>
            </div>
        </form>
        </div>
      </div>
    )
}
