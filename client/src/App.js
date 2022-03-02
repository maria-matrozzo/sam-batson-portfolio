import './App.css';
import React, {useEffect, useState} from 'react';
import {Route, Switch} from "react-router-dom";

// components
import NavBar from './NavBar';
import Portfolio from './Portfolio';
import SubmitWritingSample from './SubmitWritingSample';


function App() {

  const [allPosts, setAllPosts] = useState([])

  useEffect( () => {
    fetch('/posts')
    .then(r => r.json())
    .then( (fetchedPosts) => {
    setAllPosts(fetchedPosts)  }) 
  }, [] )

  // CREATE writing sample
  function createWritingSample(sample) {
    fetch('/posts', {
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(sample)
    })
    .then(r => r.json())
    .then(newSample => {
      setAllPosts([newSample,...allPosts])
    })
  }

  // UPDATE writing samples
  function updateWritingSample(sample) {
    fetch(`/posts/${id}`, {
      method: 'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({...sample, active:false})
    })
    .then(r => r.json())
    .then(data => {
      setAllPosts(allPosts.map(s => {
        if(sample.id === data.id) {
          return data
        } else {
          return s
        }
      }))
    })

  }

  // DELETE writing sample
  function deleteWritingSample(id) {
    fetch(`/posts/${id}`, {
      method: 'DELETE',
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then(r => r.json())
    .then(data => {
      setAllPosts(allPosts.filter(g => g.id !== id))
      console.log(data)
    })
  }

  return (
    <div>
      <NavBar />
      <div>
        <Switch>
          <Route path="/posts"> 
            {allPosts.map((eachPost) => {
              return(
                <Portfolio 
                writingSample = {eachPost}
                deleteWritingSample = {deleteWritingSample}
                updateWritingSample = {updateWritingSample}
                key = {`${eachPost.id}`} />
            )})}
          </Route>

          <Route>
            <SubmitWritingSample
            createWritingSample = {createWritingSample} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
