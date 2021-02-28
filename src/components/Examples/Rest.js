import axios from 'axios'
import React, { useState } from 'react'

const Rest = () => {

    const postURL = 'http://localhost:5000/posts';

    const [posts, setPosts] = useState([]);

    const [Author, setAuthor] = useState('');

    const [Title, setTitle] = useState('');

    const [Id, setId] = useState('');

    const [saveLabel, setsaveLabel] = useState('Save');

    const [isEdit, setEdit] = useState(false);

    const GetData = () => {
        axios.get(postURL).then((r) => {
            console.log(r.data);
            setPosts(r.data)
        })
    }

    const Savepost = () => {
        let data = { author: Author, title: Title };
        if(isEdit){
            axios.put(postURL + '/' + Id, data).then(r=>{
                console.log(r.data)
                let newPosts = posts.map(e => {
                    if(e.id == Id){
                        // update with new value 
                        return r.data;
                    }
                    return e;
                })
                setPosts(newPosts);
                setsaveLabel('Save');
                setEdit(false);
            })
        }else{
            axios.post(postURL, data).then((r) => {
                console.log(r.data)
                // merge with exitsing records
                setPosts([...posts, r.data])
            })
        }   
        setAuthor('')
        setTitle('')     
    }

    const OnChange = (e, i) => {
        let value = e.target.value
        if (i == 1) {
            setAuthor(value);
        } else if( i == 2){
            setTitle(value);
        }else {
            setId(value);
        }
    }

    const OnEdit = () =>{
        if(Id !== ''){
            setEdit(true);
            setsaveLabel('Update')
            // To Find the Exiting post
            let post = posts.find(e => e.id == Id);
            setAuthor(post.author)
            setTitle(post.title)
        }
    }

    const OnDelete = () => {
        if(Id !== ''){
            axios.delete(postURL + '/' + Id).then(r => {
                if(r.status == 200){
                    // Display records other than deleted Item
                    setPosts(posts.filter(e=> e.id != Id))
                }
            })
        }        
    }

    return (
        <div>
            Rest Example
            <div>
                Author :
                <input type="text" value={Author} onChange={(e) => OnChange(e, 1)} />

                Title :
                <input type="text" value={Title} onChange={(e) => OnChange(e, 2)} />

                <button onClick={Savepost}> {saveLabel} </button>
            </div>

            <div>
                Display Posts:
                {
                    posts.map((e) => {
                        return <div key={e.id}>
                            Author : {e.author} -
                        Title : {e.title}
                        </div>
                    })
                }
            </div>
            <div>
                <button onClick={GetData}> Get Posts</button>
            </div>

            <div>
                <select onChange={(e)=> OnChange(e,3)}>
                    <option value="">Select</option>
                    {
                        posts.map(e => <option key={e.id} value={e.id}>{e.id}</option>)
                    }                    
                </select>
                <button onClick={OnEdit}>Edit</button>
                <button onClick={OnDelete}>Delete</button>
            </div>
        </div>
    )
}

export default Rest;