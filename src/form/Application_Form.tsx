import React, { Component } from "react";
import login from '../assets/image/login_image.jpg'
import './Application_Form.css'

interface Props {

}
interface State {
    Name: String,
    Email: String,
    Address: String
}
export default class FormDesign extends Component<Props, State> {

    constructor(Props: any) {
        super(Props)
        this.state = {
            Name: "",
            Email: "",
            Address:""
        }
    }

    render() {
        return (

            <div className="design">
                <div className="image">
                    <img src={login}></img>
                </div>
                <div className="detail">
                    <h1>STUDENT REGISTRATION FORM</h1>
                    <div className="part1">
                        <div className="name1">
                            <h3>Name :</h3>
                            <input
                                type="text"        
                            >
                            </input>
                        </div>
                        <div className="name2">
                            <h3>Father Name :</h3>
                            <input
                                type="text"
                            >
                            </input>
                        </div>
                    </div>
                    <div className="address">
                        <h3>Address :</h3>
                        <input
                            type="text"
                        >
                        </input>
                    </div>

                    <div className="gender">
                        <h3>Gender :</h3>
                        <input
                            type="radio"
                            name="gender"
                        ></input>Male
                        <input
                            type="radio"
                            name="gender"
                        ></input>Female
                    </div>
                    <div className="state">
                        <div className="state1">
                            <h3>State :</h3>
                            <select name="area">
                                <optgroup label="">
                                    <option value="State">State</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Gujarat">Gujarat</option>

                                </optgroup>
                            </select>
                        </div>
                        <div className="city">
                            <h3>City :</h3>
                            <select name="area">
                                <optgroup label="">
                                    <option value="City">City</option>
                                    <option value="Erode">Erode</option>
                                    <option value=" Kannur"> Kannur</option>
                                    <option value="Bidar">Bidar</option>
                                    <option value="Kheda">Kheda</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div className="pincode">
                        <h3>Pincode :</h3>
                        <input
                            type="text"
                        >
                        </input>
                    </div>
                    <div className="pincode2">
                        <h3>Pincode :</h3>
                        <select name="area1">
                            <optgroup label="">
                                <option value="000000">000000</option>
                                <option value="638001">638001</option>
                                <option value="670001">670001</option>
                                <option value="585401">585401</option>
                                <option value="387411">387411</option>
                            </optgroup>
                        </select>
                    </div>
                    <div className="course">
                        <h3>Course :</h3>
                        <select name="area2">
                            <optgroup label="">
                                <option value="Course">Course</option>
                                <option value="Course">Computer Operator & Programming Assistant</option>
                                <option value="Course"> Information Technology</option>
                                <option value="Course"> Computer Engineering </option>
                                <option value="Course"> Automobile Engineering</option>
                            </optgroup>
                        </select>
                    </div>
                    <div className="email">
                        <h3>Email ID : </h3>
                        <input
                            type="email"
                        >
                        </input>
                    </div>
                    <div className="buttons">
                        <button className="btn1  ">Reset All</button>
                        <button className="btn2">Submit Form</button>
                    </div>
                </div>
            </div>
        )
    }
}