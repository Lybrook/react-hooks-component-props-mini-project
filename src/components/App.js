import React from "react";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";
import Header from "./Header"; 
import About from "./about"; 

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} /> 
      <aside>
        <About image={blogData.image} about={blogData.about} /> 
      </aside>
      <main>
        <ArticleList posts={blogData.posts} />
      </main>
    </div>
  );
}

export default App;
