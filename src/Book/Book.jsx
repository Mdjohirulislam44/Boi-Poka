import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId,image, bookName, author, tags, category } = book;
  return (
    <Link to={`/books/${bookId}`}>
     <div className="card bg-base-100 w-96 shadow-sm p-6">
      <figur className="bg-blue-200 py-8 pl-32 rounded-2xl">
        <img src={image} className="h-[166px]" alt={bookName} />
      </figur>
      <div className="card-body">
        <div className="flex justify-center gap-4 rounded-sm">
          {tags.map((tag) => (
            <button className="btn btn-xs bg-gray-100 text-green-400 ">
              {tag}
            </button>
          ))}
        </div>
        <h2 className="card-title">{bookName}</h2>
        <p>by:{author}</p>
        <div className="border-t-2 border-dashed"></div>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">{category}</div>
         
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                aria-label="2 star"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                aria-label="3 star"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                aria-label="5 star"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
    
  
  );
};

export default Book;
