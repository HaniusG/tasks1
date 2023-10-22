import React from "react";
import "./news-card.css";

interface News  {
  id: number;
  imageUrl: string;
  title: string;
  text: string;
  pubDate: string;
}

type PrivateProps = {
  data: News
}

export default function NewsCard({data}: PrivateProps) {
  
  
  return (
    <div className="newsCard">

    <h1>{data.title}</h1>

      <div className="newsImgDiv">
        <div className="image2"></div>
      </div>
      
        <p className="newsCardParag">
          {data.text}
        </p>
        <p>{data.pubDate}</p>
      
    </div>
  );
}
