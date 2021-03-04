import React, { useState, memo, useCallback } from 'react';

const Callback = () => {

    const [skill, setSkill] = useState('')

    const [skills, setSkills] = useState(['JS', 'CSS', 'HTML'])


    const handleChangeInput = (event) => {
        setSkill(event.target.value);
    }
    const handleAddSkill = () => {
        setSkills(skills.concat(skill));
    }

    const handleLog = (e) => {
        console.log(e)
    }

    const handleRemoveSkill = useCallback((skill) => {
        setSkills(skills.filter((s) => s !== skill));
    }, [skills])    

    const SkillList = memo(({ skills, handleRemoveSkill }) => {
        console.log('re-rendered whenever parent state is updated!')
        return (
            <ul>{
                skills.map((skill) => (
                    <li key={skill} onClick={() => handleRemoveSkill(skill)}>{skill}</li>
                ))
            }
            </ul>
        );
    })

    return (
        <div>
            <input onChange={handleChangeInput} />
            <button onClick={handleAddSkill}>Add Skill</button>
            <SkillList skills={skills} handleRemoveSkill={handleRemoveSkill} />

            <SkillList skills={skills} handleRemoveSkill={handleLog} />
        </div>
    )
}

export default Callback;