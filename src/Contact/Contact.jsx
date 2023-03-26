import React from "react";
import '../Contact/Contact.css';

export default function Contact(){
    return (<>
    
    <div className=" py-5  w-100 vh-100">
<h1 className="fw-bold fs-1 text-dark text-center">CONTACT ME</h1>
    
    <div className="text-center w-75 m-auto">
        <input type="text" name="" id=""  placeholder="Name"  className="form-control w-100 m-auto my-4 fs-3 " />

        <input type="text" name="" id=""  placeholder="Email Address"  className="form-control w-100 m-auto my-4 fs-3" />

        <input type="text" name="" id=""  placeholder="Phone Number"  className="form-control w-100 m-auto my-4 fs-3" />


        <input type="text" name="" id=""  placeholder="Message"  className="form-control w-100 fs-3 m-auto my-4 py-5" />
 <button className="btn btn-info text-white border-redius py-4 px-4">Send</button>
    </div>
   
    </div>
    

    <div className="contactFooter bg-secondary pt-5 text-white  py-2 my-5" >
        <div className="container">
            <div className="row py-5">
                <div className="col-md-4">
                   <h3>LOCATION</h3>
                   <p>2215 John Daniel Drive <br />
                     Clark, MO 65243</p>
                </div>
                <div className="col-md-4">
                   <h3 className="mb-4">AROUND THE WEB</h3>
                   <i class="iconContact fa-brands fa-facebook fs-3 border rounded-circle px-3 py-3 "></i>
                   <i class="iconContact fa-brands fa-twitter fs-3 border rounded-circle px-3 py-3 mx-1"></i>
                   <i class="iconContact fa-brands fa-linkedin fs-3  border rounded-circle px-3 py-3 mx-1"></i>
                   <i class="iconContact fa-solid fa-basketball fs-3  border rounded-circle px-3 py-3"></i>
                </div>
                <div className="col-md-4">
                   <h3>ABOUT FREELANCER</h3>
                   <p className="pb-4">Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                </div>
            </div>
        </div>
        



            
      
    </div>

    </> )
}