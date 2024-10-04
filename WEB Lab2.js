
const fetchApiData = async () => {
    try {
      const data1 = await fetchFromApi1(); 
      console.log(data1); 
  
      const data2 = await fetchFromApi2(); 
      console.log(data2); 
    } catch (error) {
      console.error(error); 
    }
  };
  
  fetchApiData();
  