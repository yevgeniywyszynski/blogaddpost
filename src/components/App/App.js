import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "../Layout/Layout";
import AllPost from '../../components/AllPost/AllPostContainer';
import AddPost from '../AddPost/AddPostContainer';
import Post from '../Post/PostContainer';
import Options from '../Options/Options';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  let[fontSize, setFontSize] = useState('16')
  let lsFontSize = localStorage.getItem('fontSize')
  let lsColor = localStorage.getItem('color')

  useEffect(() => {
    setFontSize(lsFontSize)
    document.body.style= `background-color: ${lsColor}`
  }, [])

  return (
    <div className="App" style={{fontSize: `${fontSize}px`}} >

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<AllPost />}/>
            <Route path="/post/:id" element={<Post />} />
            <Route path="/add-post" element={<AddPost/>} />
            <Route path="settings" element={<Options />} />
          </Route>
        </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
