import React, { useState } from "react";

import { useEffect } from "react";
import Card from "../Card/Card";
import Error from "../ErrorComponent/Error";
import Loader from "../Loader/Loader";
import "./Page.css";

function Posts() {
  const [loading, SetLoading] = useState(true);
  const [error, SetError] = useState(false);
  const [stories, SetStories] = useState([]);

  useEffect(() => {
    const fetch_stories = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        const data = await response.json();
        await SetStories(data.posts);
        SetLoading(false);
      } catch (error) {
        SetLoading(false);
        SetError(true);
      }
    };

    fetch_stories();
  }, []);

  if (error) return <Error error={"Error Occured While Fetching Posts"} />;

  return loading ? (
    <Loader />
  ) : (
    <div className="main-container">
      <h1>Posts</h1>
      <div className="container">
        {stories.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            body={item.body}
            usedId={item.userId}
            tags={item.tags}
            reactions={item.reactions}
          />
        ))}
      </div>
    </div>
  );
}

export default Posts;
