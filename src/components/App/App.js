import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "../Layout/Layout";
import AllPost from '../../components/AllPost/AllPostContainer';
import AddPost from '../AddPost/AddPostContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
  
      </div>

      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<AllPost />}/>
            <Route path="/add-post" element={<AddPost/>} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
