import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList"

console.log(blogData.name);
function App() {
  return (
    <div className="App">
      <h1></h1>
      <Header data={blogData}/>
      <About about={blogData.about} image={blogData.image}/>

      <ArticleList posts={blogData.posts}/>



      
    </div>
  );
}

export default App;