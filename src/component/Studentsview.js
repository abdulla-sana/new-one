import React from 'react';
import { useParams } from 'react-router-dom';
import Students from './Students';

export default function Studentsview() {
    // useParams used to for to take value from the /:chakka that it is given in Students.js as student.id
    const {chakka}=useParams();
    
  return (
    <>
        <h1>student id is {chakka}</h1>
    </>
  )
}
