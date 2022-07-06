import React , {useState} from 'react';
import {useHistory} from 'react-router-dom'
import img from '../myImages/sportify.jpeg';


export default function Signin() {
 
    const history = useHistory()
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")

    const PostData = ()=>{
        var data = JSON.stringify({
            password,
            email});
            console.log(data)
        fetch("/signin",{
            method:"post",
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
        
            body:data
        })
        .then(data=>{
           if(data.error){
               window.alert(data.error)
           }
           else{
               history.push('/home')
           }
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className="container ms-auto me-auto mt-5 mb-5">
            <section className="mb-4">
                <div className="row">

                    <div className="col-lg-9 mb5 mt-5">
                        <img src={img} className="img-responsive mt-5" alt="..." />
                    </div>

                    <div className="col-lg-3 mb-5">
                        <h1 className="h1-responsive fs-1 fw-bold text-center">Sign In</h1>
                        <form  action=''>
                            <div className="row mt-5 mb-5">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="text" id="email" name="email" className="form-control" placeholder='Email'
                                            autoComplete='off'
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5 mb-5">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="password" id="password" name="password" className="form-control" placeholder='Password'
                                            autoComplete='off'
                                            value={password}
                                            onChange={(e) => setPasword(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div className="d-grid gap-2 mb-5">
                            <button className="btn btn-primary" type="submit"
                            onClick={() => PostData()}
                            >Submit</button>
                        </div>
                        <div className="status"></div>
                        <span>Don't have an account yet    </span>
                        <a className="btn btn-dark" href="signup">  Sign Up</a>
                  
                    </div>


                </div>

            </section>
        </div>
    
       );
}; 
