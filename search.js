      // JavaScript Functionality
      const searchInput = document.getElementById('searchInput');
      const searchResults = document.getElementById('searchResults');
  
      // Sample data
      const data = [

     "General Dermatology Services in Adults and Adolescents",
     "Paediatric Dermatology",
     "Treatment of Nail Disorders",
     "Phototherapy",
     "Laser Hair Removal",
    "Hair Loss Treatment",
    "Skin Phototyping",
     "Anti Aging Products",
     "Platelet-Rich Plasma (PRP) Injection",
     "Botox Injection",
     "Hyperpigmentation Diagnosis and Treatment",
     "Skin Cancer Diagnostic Services",
     "Acne Pimples in Adults and Adolescents",
     "Age Spots",
     "Skin Warts",
     "Itchy Skin",
     "Eczema",
     "Laser Skin Removal",
     "Vitiligo",
     "Excessive Sweating or Hyperhidrosis",
     "Facial Wrinkles",
     "Dry Skin",
     "Psoriasis",
     "Sunburns",
     "Treatment",
     "Skin Tightening",
     "Allergy Screening",
     "Laser Hair Removal",
     "Skin Resurfacing",
     "Mohs Surgery",
     "Annual Skin Screening",
     "Mole Treatment",
     "Scar Treatment",
     "Anti-Aging Treatment",
     "Cryotherapy",
     "Dermatology Surgery",
     "Electrocautery",
     "Fungal Screening",
     "Allergy tests"
    ];
  
       // Function to filter data based on search input
      function filterData(searchTerm) {
        return data.filter(item =>
          item.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
  
      // Function to display search results
      function displayResults(results) {
        searchResults.innerHTML = ''; // Clear previous results
  
        if (results.length === 0) {
          searchResults.innerHTML = 'No results found';
          return;
        }
  
        results.forEach(result => {
          const resultElement = document.createElement('div');
          resultElement.textContent = result;
          searchResults.appendChild(resultElement);
        });
      }
  
      // Event listener for input changes
      searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.trim();
        const filteredData = filterData(searchTerm);
        displayResults(filteredData);
      });