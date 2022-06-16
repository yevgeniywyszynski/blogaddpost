import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from '../../Layout/Layout';
import AllPost from '../../components/AllPost/AllPost';
import Post from '../Post/Post';
import AddPost from '../AddPost/AddPost';
import Options from '../Options/Options';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
  
      </div>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllPost />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/settings" element={<Options />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
