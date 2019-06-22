const request = require('request');

function searchCapital(capital, callback) {

  request({
      uri: `https://restcountries.eu/rest/v2/capital/${capital}`,
      json: true
    }, (err, resp, body) => {
  
      if(resp.statusCode === 200) {

        const country = {
          name: body[0].name,
          code: body[0].currencies[0].code,
          symbol: body[0].currencies[0].symbol
        }

        return callback( { success: true, data: country })
        
      } else {
        
        return callback( { success: false, data: {} })
      }
    });
}

module.exports.getCountry = searchCapital;