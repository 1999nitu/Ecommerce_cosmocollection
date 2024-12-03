export default function Single(){
    return(
        <>

<form onSubmit={handleForm}>
                <center>
                <h1>Registration Form</h1>
                <label>Name</label>
                <br></br>
                <input/>
                <br/>
                <br/>

                <label>Email</label>
                <br></br>
                <input value={email} onChange={changeEmail}/>
                {email}
                <br/>
                <br/>

                <label>Password</label>
                <br></br>
                <input value={password} onChange={changePassword}/>
                {password}
                <br/>
                <br/>

                <label>Contact</label>
                <br></br>
                <input/>

                <br/>
                <br/>

                <label>Username</label>
                <br></br>
                <input/>
                <br/>
                <br/>

                <label>OTP</label>
                <br></br>
                <input value={otp} onChange={changeOtp}/>
                {otp}
                <br/>
                <br/>

                <label>State</label>
                <br></br>
                <select>
                    <option>Haryana</option>
                    <option>Punjab</option>
                    <option>Ramgarh</option>
                    <option>UP</option>
                </select>
                
                <br/>
                <br/>

                <label>Gender</label>
                <br></br>
                <input type="radio" name="gender"/> Male
                <input type="radio" name="gender"/> Female
                <br/>
                <br/>

                <label>T&C</label>
                <br></br>
                <input/>
                <br/>
                <br/>

                <button>Submit</button>
                <br/>
                <br/>
                </center>
            </form>
            
        </>
    )
}