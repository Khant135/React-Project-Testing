import { useState } from "react";
import './style.css'

function SubmitForm () {

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [contact,setContact] = useState('');
    const [gender,setGender] = useState('male');
    const [subjects, setSubjects] = useState({
        english: true,
        maths: false,
        physics: false,
    });
    const [resume,setResume] = useState('');
    const [url,setUrl] = useState('');
    const [option,setOption] = useState('');
    const [about,setAbout] = useState('');

    const handleSubjectChange = (sub) => {
        setSubjects((prevSubjects) => ({
            ...prevSubjects,
            [sub]: !prevSubjects[sub],
        }));
    };

    const handleReset = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setContact('');
        setGender('male');
        setSubjects({
            english: true,
            maths: false,
            physics: false,
        });
        setResume('');
        setUrl('');
        setOption('');
        setAbout('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            firstName,
            lastName,
            email,
            contact,
            gender,
            subjects,
            resume,
            url,
            option,
            about
        )
    }

    return (
        <div className="App">
            <h1>Form in React</h1>
            <fieldset>
                <form action="#" method="get">

                    <label htmlFor="firstname">First Name *</label>
                    <input type="text" name="firstname" id="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter First Name" required />
                
                    <label htmlFor="lastname">Last Name *</label>
                    <input type="text" name="lastname" id="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter Last Name" required />

                    <label htmlFor="email">Email *</label>
                    <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" required />

                    <label htmlFor="phone">Contact *</label>
                    <input type="tel" name="phone" id="phone" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Enter Phone Number" required />

                    <label htmlFor="gender">Gender *</label>
                    <input type="radio" name="gender" id="male" value="male" checked={gender === 'male' ? true : false} onChange={(e) => setGender(e.target.value)} /> Male
                    <input type="radio" name="gender" id="female" value="female" checked={gender === 'female' ? true : false} onChange={(e) => setGender(e.target.value)} /> Female
                    <input type="radio" name="gender" id="others" value="others" checked={gender === 'others' ? true: false} onChange={(e) => setGender(e.target.value)} /> Others

                    <label htmlFor="lang">Your best Subject</label>
                    <input type="checkbox" name="lang" id="english" checked={subjects.english ? true : false} onChange={(e) => handleSubjectChange('english')} /> English
                    <input type="checkbox" name="lang" id="maths" checked={subjects.maths ? true : false} onChange={(e) => handleSubjectChange('maths')} /> Maths
                    <input type="checkbox" name="lang" id="physics" checked={subjects.physics ? true : false } onChange={(e) => handleSubjectChange('physics')} /> Physics

                    <label htmlFor="file">Upload Resume *</label>
                    <input type="file" name="file" id="file" placeholder="Enter Upload File" onChange={(e) => setResume(e.target.files[0])} required />

                    <label htmlFor="url">Enter URL *</label>
                    <input type="url" name="url" id="url" onChange={(e) => setUrl(e.target.value)} placeholder="Enter URL" required />

                    <label htmlFor="">Select your Choice</label>
                    <select name="select" id="select" value={option} onChange={(e) => setOption(e.target.value)}>
                        <option value="" disabled>Select your Ans</option>
                        <optgroup label="Beginners">
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">Javascript</option>
                        </optgroup>
                        <optgroup label="Advance">
                            <option value="4">React</option>
                            <option value="5">Node</option>
                            <option value="6">Express</option>
                            <option value="t">MongoDB</option>
                        </optgroup>
                    </select>

                    <label htmlFor="about">About *</label>
                    <textarea name="about" id="about" onChange={(e) => setAbout(e.target.value)} cols="30" rows="10" placeholder="About your self" required></textarea>

                    <button type="reset" value="reset" onClick={() => handleReset()}>
                        Reset
                    </button>
                    <button type="submit" value="Submit" onClick={(e) => handleSubmit(e)}>
                        Submit
                    </button>

                </form>
            </fieldset>
        </div>
    );
}

export default SubmitForm;