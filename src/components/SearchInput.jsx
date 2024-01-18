import React, { useState, useEffect } from 'react';

const SearchComponent = () => {
    const [search,setSearch]=useState('');
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const delayDebounceFn = setTimeout(() => {
//       // Perform API call or any action with the search term here
//       console.log(`Searching for: ${searchTerm}`);
//     }, 500); // Debounce time: 500 milliseconds

//     return () => clearTimeout(delayDebounceFn);
//   }, [searchTerm]);

//   const handleInputChange = (event) => {
//     const { value } = event.target;
//     setSearchTerm(value);
//   };

const handleChange= (e)=>{
    setSearch(e.target.value);
    
}

useEffect(()=>{
    const searchInterval = setTimeout(() => {
        console.log("Search",search);
    }, 1000);
    return ()=> clearTimeout(searchInterval);
},[search])

  return (
    <div>
      {/* <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
      /> */}

      <input type="text" value={search} placeholder='Search' onChange={handleChange}/>
    </div>
  );
};

export default SearchComponent;
