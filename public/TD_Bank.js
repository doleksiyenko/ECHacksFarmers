var myInit = {
    method: 'GET',
    headers: {
      'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDQlAiLCJ0ZWFtX2lkIjoiZDkwZmYzZmEtNWQ0Mi0zMTIzLTgwZmMtMWQ4MjI1ZTdmMzZmIiwiZXhwIjo5MjIzMzcyMDM2ODU0Nzc1LCJhcHBfaWQiOiJjNDUwYWMxYS0xOGM2LTRiYzEtOTJkMS0xMGY1NTNiOTU3MDEifQ.AFOdZu0xcK57SSYCII1OBWS2fqUl4oIfQc4SWFoE1TM'
    }
  };
  

  var myRequest = new Request('https://api.td-davinci.com/api/customers/21821034-8ad8-4c00-bfd4-b74e694066ba/transactions', myInit);
  var companies = [];
  
  
  fetch(myRequest)
    .then(response => response.json())
    .then(json => {
      // the json variable contains the response from the API
      for (var i = 0; i < json['result'].length; i++){
        if (json['result'][i].categoryTags == 'Food and Dining') {
            companies.push(json['result'][i].merchantName);
         //console.log(json['result'][i].currencyAmount);
        }

      }
      
      food_companies = []
      for (var i = 0; i < companies.length; i++){
        if (companies[i] in food_companies == false) {
          //console.log(food_companies[companies[i]])
          food_companies[companies[i]] = 1; 
        } else {
          food_companies[companies[i]] = food_companies[companies[i]] + 1; 
        }
      }

      big_num = 0;
      popular_company = '';
      for (item in food_companies){
        if (big_num < food_companies[item]){
          big_num = food_companies[item];
          popular_company = item
        }
      }

      popular_place = json['result'][0].locationCity;
      console.log(popular_place);

      console.log(popular_company);
      //console.log(big_num);

    });

 


  
