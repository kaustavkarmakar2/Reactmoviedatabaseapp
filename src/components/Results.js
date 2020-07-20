import React from 'react'

import Result from './Result'

function Results ({ results, openPopup }) {

	return (
		<React.Fragment>
        <div className="results">
          
            
              {Array.isArray(results) && results.map(result=> {
                console.log(result);
                let imageURL;
                if (result!== undefined) {
                  imageURL = result.Poster
                    ? result.Poster.thumbnail 
                    : "http://via.placeholder.com/123x98";
              }return (
				<Result key={result.imdbID} result={result} openPopup={openPopup} />
                
              )})}
              
            
            
          </div>
    </React.Fragment>
		
	)
}

export default Results
