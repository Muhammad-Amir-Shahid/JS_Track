const fetchFromApi1 = () => {
    return new Promise((resolve, reject) => {
      const success = Math.random() > 0.5;
      const delay = Math.floor(Math.random() * 2000) + 1000; 
  
      setTimeout(() => {
        if (success) {
          resolve("Data from API 1");
        } else {
          reject("Error fetching data from API 1");
        }
      }, delay);
    });
  };
  
  const fetchFromApi2 = () => {
    return new Promise((resolve, reject) => {
      const success = Math.random() > 0.5;
      const delay = Math.floor(Math.random() * 2000) + 1000;
  
      setTimeout(() => {
        if (success) {
          resolve("Data from API 2");
        } else {
          reject("Error fetching data from API 2");
        }
      }, delay);
    });
  };
  

fetchFromApi1()
    .then((data) => {
      console.log(data); 
      return fetchFromApi2(); 
    })
    .then((data) => {
      console.log(data); 
    })
    .catch((error) => {
      console.error(error); 
    });
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
    
