import React from 'react';
import queryString from 'query-string';


const About = ({location,match}) =>{
    const query = queryString.parse(location.search);
    const detail = query.detail === 'true';
    return (
        <div>
            <h2>
                공지사항
            </h2>
        
            
        </div>
    );
    
};
export default About;