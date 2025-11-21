import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoreReadList } from '../Utility/Addtodv';

const ListedBooks = () => {
  const [activeTab, setActiveTab] = useState('read');
  const [readBooks, setReadBooks] = useState([]);
  const [originalReadBooks, setOriginalReadBooks] = useState([]);
  const [sort, setSort] = useState('');
  const data = useLoaderData();

  useEffect(() => {
    const sortedReadList = getStoreReadList();
    const sortedReadListInt = sortedReadList.map(id => parseInt(id));

    const allBooksArray = Array.isArray(data) ? data : data?.books || [];

    const filteredReadBooks = allBooksArray.filter(book =>
      sortedReadListInt.includes(book.id)
    );

    setOriginalReadBooks(filteredReadBooks);
    setReadBooks(filteredReadBooks);
  }, [data]);

  const handleSort = sortType => {
    setSort(sortType);

    let sortedBooks = [...originalReadBooks];

    if (sortType === 'Ratings') {
      sortedBooks.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortType === 'number of pages') {
      sortedBooks.sort((a, b) => (a.pages || 0) - (b.pages || 0));
    }

    setReadBooks(sortedBooks);
  };

  return (
    <div>
      <h3 className='text-3xl mb-4'>Read List: {readBooks.length}</h3>

      {/* Sort Dropdown */}
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          {sort ? `Sort by: ${sort}` : 'Sort by'}
        </div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li onClick={() => handleSort('Ratings')}><a>Rating</a></li>
          <li onClick={() => handleSort('number of pages')}><a>Number of pages</a></li>
        </ul>
      </div>

      {/* Tabs */}
      <div className='flex space-x-4 border-b mb-4'>
        <button
          className={`pb-2 ${activeTab === 'read' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
          onClick={() => setActiveTab('read')}
        >
          Read List
        </button>
        <button
          className={`pb-2 ${activeTab === 'wishlist' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
          onClick={() => setActiveTab('wishlist')}
        >
          Wishlist
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'read' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {readBooks.length === 0 ? (
            <p>No books marked as read.</p>
          ) : (
            readBooks.map(book => (
              <div key={book.id} className="border p-4 rounded shadow">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-48 object-cover mb-2 rounded"
                />
                <h4 className="font-bold text-lg">{book.title}</h4>
                <p>ID: {book.id}</p>
                <p>Name: {book.author || 'Unknown'}</p>
              </div>
            ))
          )}
        </div>
      )}

      {activeTab === 'wishlist' && (
        <div>
          <h2 className='text-2xl'>My Wish List</h2>
          <p>Wishlist functionality can be added here later.</p>
        </div>
      )}
    </div>
  );
};

export default ListedBooks;
