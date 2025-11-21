import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoreReadList } from '../Utility/Addtodv';

const BookDetails = () => {
    const { bookId } = useParams();
const id = parseInt(bookId);
const data = useLoaderData() || [];  
const book = data.find(b => b.bookId === id);

// console.log({ book });

  const {bookId:currentBookId,image} = book;

   const handleMarkAsRead =(id)=>{
    addToStoreReadList(id);

   }
    return (
        <div className='my-12'>
           <h2>book detels:{bookId}</h2> 
           <img className='w-36' src={image} alt="" />
           <br />
          <div className='flex justify-start mr-4 gap-6 '>
            <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-soft bg-hover: btn-accent"> mark as Read</button>
           <button className="btn btn-soft bg-green-500 rounded-xl  btn-primary">WishList</button>
          </div>
        </div>
    );
};

export default BookDetails;