import React from 'react';
import  './style.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
//import {Helmet} from "react-helmet";
//import Typekit from 'typekit';

class Login extends React.Component {
      
        constructor(props) {
       super(props);
       this.state = {
           loginData : {
               email: "",
               password:"",
               isActive: true
           }
       }
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
       this.validateEmail = this.validateEmail.bind(this);
   }
   
   handleChange(event) {
       const loginDataCopy = {...this.state.loginData};
       loginDataCopy[event.target.name] = event.target.value;
       this.setState({loginData : loginDataCopy});

   };
   
   handleSubmit(e) {
       e.preventDefault();
       
       const data = {
           email: this.state.loginData.email,
           password: this.state.loginData.password
       };
       
       fetch('/login', {
           method: 'POST', 
           body: JSON.stringify(data), 
           headers: new Headers({
               'Content-Type': 'application/json'
           })
       }).then(res => res.json())
       .catch(error => console.error('Error:', error))
       .then(response => console.log('Success:', response));
   };
   
   
   validateEmail(value) {      
       if(!value) return true;  
       const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
       return emailPattern.test(value);
       
     };
     
        render(){

            const style = {
                display: 'none'
            }
            return (
    <div>
    <form onSubmit={this.handleSubmit} action="/" method="post">
     <div className="svgContainer">
        <div>
            <svg className="mySVG" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 200">
                <defs>
                    <circle id="armMaskPath" cx="100" cy="100" r="100"/>    
                </defs>
                <clipPath id="armMask">
                    <use xlinkHref="#armMaskPath" overflow="visible"/>
                </clipPath>
                <circle cx="100" cy="100" r="100" fill="#a9ddf3"/>
                <g className="body">
                   // eslint-disable-next-line

                    <path fill="#FFFFFF" d="M193.3,135.9c-5.8-8.4-15.5-13.9-26.5-13.9H151V72c0-27.6-22.4-50-50-50S51,44.4,51,72v50H32.1 c-10.6,0-20,5.1-25.8,13l0,78h187L193.3,135.9z"/>
                    <path fill="none" stroke="#3A5E77" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M193.3,135.9 c-5.8-8.4-15.5-13.9-26.5-13.9H151V72c0-27.6-22.4-50-50-50S51,44.4,51,72v50H32.1c-10.6,0-20,5.1-25.8,13"/>
                    <path fill="#DDF1FA" d="M100,156.4c-22.9,0-43,11.1-54.1,27.7c15.6,10,34.2,15.9,54.1,15.9s38.5-5.8,54.1-15.9 C143,167.5,122.9,156.4,100,156.4z"/>
                </g>
                <g className="earL">
                    <g className="outerEar" fill="#ddf1fa" stroke="#3a5e77" strokeWidth="2.5">
                        <circle cx="47" cy="83" r="11.5"/>
                        <path d="M46.3 78.9c-2.3 0-4.1 1.9-4.1 4.1 0 2.3 1.9 4.1 4.1 4.1" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <g className="earHair">
                        <rect x="51" y="64" fill="#FFFFFF" width="15" height="35"/>
                        <path d="M53.4 62.8C48.5 67.4 45 72.2 42.8 77c3.4-.1 6.8-.1 10.1.1-4 3.7-6.8 7.6-8.2 11.6 2.1 0 4.2 0 6.3.2-2.6 4.1-3.8 8.3-3.7 12.5 1.2-.7 3.4-1.4 5.2-1.9" fill="#fff" stroke="#3a5e77" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                </g>
                <g className="earR">
                    <g className="outerEar" fill="#ddf1fa" stroke="#3a5e77" strokeWidth="2.5">
                        <circle cx="155" cy="83" r="11.5"/>
                        <path d="M155.7 78.9c2.3 0 4.1 1.9 4.1 4.1 0 2.3-1.9 4.1-4.1 4.1" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <g className="earHair">
                        <rect x="131" y="64" fill="#FFFFFF" width="20" height="35"/>
                        <path d="M148.6 62.8c4.9 4.6 8.4 9.4 10.6 14.2-3.4-.1-6.8-.1-10.1.1 4 3.7 6.8 7.6 8.2 11.6-2.1 0-4.2 0-6.3.2 2.6 4.1 3.8 8.3 3.7 12.5-1.2-.7-3.4-1.4-5.2-1.9" fill="#fff" stroke="#3a5e77" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                </g>
                <path className="chin" d="M84.1 121.6c2.7 2.9 6.1 5.4 9.8 7.5l.9-4.5c2.9 2.5 6.3 4.8 10.2 6.5 0-1.9-.1-3.9-.2-5.8 3 1.2 6.2 2 9.7 2.5-.3-2.1-.7-4.1-1.2-6.1" fill="none" stroke="#3a5e77" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path className="face" fill="#DDF1FA" d="M134.5,46v35.5c0,21.815-15.446,39.5-34.5,39.5s-34.5-17.685-34.5-39.5V46"/>
                <path className="hair" fill="#FFFFFF" stroke="#3A5E77" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M81.457,27.929 c1.755-4.084,5.51-8.262,11.253-11.77c0.979,2.565,1.883,5.14,2.712,7.723c3.162-4.265,8.626-8.27,16.272-11.235 c-0.737,3.293-1.588,6.573-2.554,9.837c4.857-2.116,11.049-3.64,18.428-4.156c-2.403,3.23-5.021,6.391-7.852,9.474"/>
                <g className="eyebrow">
                    <path fill="#FFFFFF" d="M138.142,55.064c-4.93,1.259-9.874,2.118-14.787,2.599c-0.336,3.341-0.776,6.689-1.322,10.037 c-4.569-1.465-8.909-3.222-12.996-5.226c-0.98,3.075-2.07,6.137-3.267,9.179c-5.514-3.067-10.559-6.545-15.097-10.329 c-1.806,2.889-3.745,5.73-5.816,8.515c-7.916-4.124-15.053-9.114-21.296-14.738l1.107-11.768h73.475V55.064z"/>
                    <path fill="#FFFFFF" stroke="#3A5E77" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M63.56,55.102 c6.243,5.624,13.38,10.614,21.296,14.738c2.071-2.785,4.01-5.626,5.816-8.515c4.537,3.785,9.583,7.263,15.097,10.329 c1.197-3.043,2.287-6.104,3.267-9.179c4.087,2.004,8.427,3.761,12.996,5.226c0.545-3.348,0.986-6.696,1.322-10.037 c4.913-0.481,9.857-1.34,14.787-2.599"/>
                </g>
                <g className="eyeL">
                    <circle cx="85.5" cy="78.5" r="3.5" fill="#3a5e77"/>
                    <circle cx="84" cy="76" r="1" fill="#fff"/>
                </g>
                <g className="eyeR">
                    <circle cx="114.5" cy="78.5" r="3.5" fill="#3a5e77"/>
                    <circle cx="113" cy="76" r="1" fill="#fff"/>
                </g>
                <g className="mouth">
                    <path className="mouthBG" fill="#617E92" d="M100.2,101c-0.4,0-1.4,0-1.8,0c-2.7-0.3-5.3-1.1-8-2.5c-0.7-0.3-0.9-1.2-0.6-1.8 c0.2-0.5,0.7-0.7,1.2-0.7c0.2,0,0.5,0.1,0.6,0.2c3,1.5,5.8,2.3,8.6,2.3s5.7-0.7,8.6-2.3c0.2-0.1,0.4-0.2,0.6-0.2 c0.5,0,1,0.3,1.2,0.7c0.4,0.7,0.1,1.5-0.6,1.9c-2.6,1.4-5.3,2.2-7.9,2.5C101.7,101,100.5,101,100.2,101z"/>
                    <path style={style}className="mouthSmallBG" fill="#617E92" d="M100.2,101c-0.4,0-1.4,0-1.8,0c-2.7-0.3-5.3-1.1-8-2.5c-0.7-0.3-0.9-1.2-0.6-1.8 c0.2-0.5,0.7-0.7,1.2-0.7c0.2,0,0.5,0.1,0.6,0.2c3,1.5,5.8,2.3,8.6,2.3s5.7-0.7,8.6-2.3c0.2-0.1,0.4-0.2,0.6-0.2 c0.5,0,1,0.3,1.2,0.7c0.4,0.7,0.1,1.5-0.6,1.9c-2.6,1.4-5.3,2.2-7.9,2.5C101.7,101,100.5,101,100.2,101z"/>
                    <path style={style}className="mouthMediumBG" d="M95,104.2c-4.5,0-8.2-3.7-8.2-8.2v-2c0-1.2,1-2.2,2.2-2.2h22c1.2,0,2.2,1,2.2,2.2v2 c0,4.5-3.7,8.2-8.2,8.2H95z"/>
                    <path style={style}className="mouthLargeBG" d="M100 110.2c-9 0-16.2-7.3-16.2-16.2 0-2.3 1.9-4.2 4.2-4.2h24c2.3 0 4.2 1.9 4.2 4.2 0 9-7.2 16.2-strokeWidth.2 16.2z" fill="#617e92" stroke="#3a5e77" strokeLinejoin="round" strokeWidth="2.5"/>
                    <defs>
                      <path id="mouthMaskPath" d="M100.2,101c-0.4,0-1.4,0-1.8,0c-2.7-0.3-5.3-1.1-8-2.5c-0.7-0.3-0.9-1.2-0.6-1.8 c0.2-0.5,0.7-0.7,1.2-0.7c0.2,0,0.5,0.1,0.6,0.2c3,1.5,5.8,2.3,8.6,2.3s5.7-0.7,8.6-2.3c0.2-0.1,0.4-0.2,0.6-0.2 c0.5,0,1,0.3,1.2,0.7c0.4,0.7,0.1,1.5-0.6,1.9c-2.6,1.4-5.3,2.2-7.9,2.5C101.7,101,100.5,101,100.2,101z"/>
                    </defs>
                    <clipPath id="mouthMask">
                        <use xlinkHref="#mouthMaskPath" overflow="visible"/>
                    </clipPath>
                    <g clipPath="url(#mouthMask)">
                        <g className="tongue">
                            <circle cx="100" cy="107" r="8" fill="#cc4a6c"/>
                            <ellipse className="tongueHighlight" cx="100" cy="100.5" rx="3" ry="1.5" opacity=".1" fill="#fff"/>
                        </g>
                    </g>
                    <path clipPath="url(#mouthMask)" className="tooth" style={{fill: '#FFFFFF'}} d="M106,97h-4c-1.1,0-2-0.9-2-2v-2h8v2C108,96.1,107.1,97,106,97z"/>
                    <path className="mouthOutline" fill="none" stroke="#3A5E77" strokeWidth="2.5" strokeLinejoin="round" d="M100.2,101c-0.4,0-1.4,0-1.8,0c-2.7-0.3-5.3-1.1-8-2.5c-0.7-0.3-0.9-1.2-0.6-1.8 c0.2-0.5,0.7-0.7,1.2-0.7c0.2,0,0.5,0.1,0.6,0.2c3,1.5,5.8,2.3,8.6,2.3s5.7-0.7,8.6-2.3c0.2-0.1,0.4-0.2,0.6-0.2 c0.5,0,1,0.3,1.2,0.7c0.4,0.7,0.1,1.5-0.6,1.9c-2.6,1.4-5.3,2.2-7.9,2.5C101.7,101,100.5,101,100.2,101z"/>
                </g>
                <path className="nose" d="M97.7 79.9h4.7c1.9 0 3 2.2 1.9 3.7l-2.3 3.3c-.9 1.3-2.9 1.3-3.8 0l-2.3-3.3c-1.3-1.6-.2-3.7 1.8-3.7z" fill="#3a5e77"/>
                <g className="arms" clipPath="url(#armMask)">
                             
                </g>
            </svg>
        </div>
    </div>
    
    <div className="inputGroup inputGroup1">
        <label>Email</label>
        <input type="text" id="email" name="email"
            className="email" maxLength="256" 
            placeholder="Enter Email"
            value={this.state.loginData.email} 
            onChange={this.handleChange}
            onSubmit={this.validateEmail}
             />
             <div>{!this.validateEmail(this.state.loginData.email) ? <div>Invalid Email</div>  : null }
                          </div>
                </div>
                <div className="inputGroup inputGroup2">
         <label>Password</label>
         <input type="password" id="password" className="password" 
                           value={this.state.loginData.password}
                           onChange={this.handleChange}
                           name="password"
                       placeholder="Enter Password" />
    </div>
    <div className="inputGroup inputGroup3">
        <button onClick={(e) => this.handleChange(e)} id="login">Log in</button>
    </div> 
  <br/>
    <Nav>
      <NavItem>
            <NavLink href="/admin/reset">ForgetPassword</NavLink>
          </NavItem>
         
          
          <NavItem>
            <NavLink href="/admin/Register">Register</NavLink>
          </NavItem>
      
          </Nav>
      </form>  
                </div>    
            );
        }


}



export default Login;
