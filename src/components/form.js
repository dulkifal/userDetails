import React, { useState } from 'react';
import { Formik, Form, useField } from 'formik';
import styled from "@emotion/styled";
import * as Yup from "yup";
import List from './list';

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}

    </>
  );
};



const StyledSelect = styled.select`
  color: var(--blue);
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

const MySelect = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

const Form1 = () => {
  const [Details, updateDetails] = useState([])
 
  // console.log('from form1'+ Details);
  return (
    <div  >
      <Formik
        initialValues={{
          name: "",
          birthday: "",
          sex: "",
          mobile:"",
          idType:"",
          GovtID: "",
          guardian:"",
          GuardianName:"",
          email: "",
          emergencyContact:"",
          address:"",
          state:"",
          city:"",
          country:"",
          pincode:"",
          occupation:"",
          relegion:"",
          maritual:"",
          bloodGroup:"",
          nation:"",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          // birthday: Yup.date()
             
          //   .required("Required"),
          // email: Yup.string()
          //   .email("Invalid email addresss`")
          //   .required("Required"),
           
          // sex: Yup.string()
          //   .oneOf(
          //     ["male", "femail", "other"],
          //     "Invalid gender Type"
          //   )
          //   .required("Required")
        })}
        onSubmit={async(values, { setSubmitting, resetForm }) => {
          updateDetails(Details => [...Details, values] )
           
           
          
          await new Promise(r => setTimeout(r, 500));
          setSubmitting(false);
        resetForm({values: ''});
           
                }}
      >
        <Form>
          <h1  >Personal Details</h1>

          <MyTextInput
            label="Name"
            name="name"
            type="text"
            placeholder="Enter Name"
          />


          <MyTextInput
            label="Date of Birth or Age"
            name="birthday"
            type="date"
            placeholder=""
          />
          <MySelect label="Sex" name="sex">
            <option value="">Enter Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </MySelect>
          <MyTextInput
            label="Mobile"
            name="mobile"
            type="number"
            placeholder="Enter Mobile"
          />

          <MySelect label="Govt Issued ID" name="idType">
            <option value="">ID Type</option>
            <option value="male">UPI</option>
            <option value="female">voterID</option>
            <option value="other">Other</option>
          </MySelect>
          <MyTextInput
            name="GovtID"
            type="text"
            placeholder="Enter Govt ID"
          />

          <h1  >Contact Details</h1>
          <MySelect label="Guardian Details" name="guardian">
            <option value="">Enter Label</option>
            <option value="father">Father</option>
            <option value="mother">Mother</option>
            <option value="other">Other</option>
          </MySelect>
          <MyTextInput
            name="GuardianName"
            type="text"
            placeholder="Enter Guradian Name"
          />
          <MyTextInput
            label="email"
            name="email"
            type="email"
            placeholder="Enter Email"
          />
          <MyTextInput
            label="Emergency Contact"
            name="emergencyContact"
            type="number"
            placeholder="Enter Emergency No"
          />
          <h1>Address Details</h1>
          <MyTextInput
            label="Address"
            name="address"
            type="text"
            placeholder="Enter Address"
          />
          <MySelect label="State" name="state">
            <option value="">Enter State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>


          </MySelect>
          <MySelect label="City" name="city">
            <option value="">Enter city</option>
            <option value="Andhra ">Andhra Pradesh</option>
            <option value="Arunachal  ">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>

          </MySelect>
          <MyTextInput
            label="Country"
            name="country"
            type="text"
            placeholder="India"
          />
          <MyTextInput
            label="Pincode"
            name="pincode"
            type="number"
            placeholder="Enter Pincode"
          />
          <h1>Other Details</h1>
          <MyTextInput
            label="Occupation"
            name="occupation"
            type="text"
            placeholder="Enter Occupation"
          />
          <MySelect label="Relegion" name="relegion">
            <option value="">Enter Relegion</option>
            <option value="Hindu">Hindu</option>
            <option value="Islam">Islam</option>
            <option value="Sikh">Sikh</option>
            <option value="Jain">Jain</option>
            <option value="Christian">Christian</option>
            <option value="Other">Other</option>
          </MySelect>
          <MySelect label="Marital Status" name="maritual">
            <option value="">Enter Marital Status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
          </MySelect>
          <MySelect label="Blood Group" name="bloodGroup">
            <option value="">Enter Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </MySelect>
          <MyTextInput label="Nationality" name="nation" type="text" placeholder="India" />
          <div>

            <button  onClick={()=>{console.log('cancel');
            }}>Cancel</button>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
      <List data={Details} />


    </div>
  )
};

export default Form1;