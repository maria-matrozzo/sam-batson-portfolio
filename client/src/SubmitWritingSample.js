import React, {useState} from "react";

function SubmitWritingSample({createWritingSample}) {

    const [formData, setFormData] = useState({
        title:'',
        category:'',
        content: ''
    })
    
    function handleChange(e) {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        createWritingSample(formData)
    }

    return(
        <div>
            <h1>Add a New Sample to Your Portfolio</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" name="title" value={formData.title} onChange={handleChange}/>
                </label>
                <label>
                    category:
                    <input type="text" name="category" value={formData.category} onChange={handleChange}/>
                </label>
                <label>
                    Content:
                    <input type="text" name="content" value={formData.content} onChange={handleChange}/>
                </label>

                <input type="submit" value="Submit" />
            </form>

        </div>
    )
}

export default SubmitWritingSample;