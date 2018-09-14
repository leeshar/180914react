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
            <h1>
            {match.params.name}
            </h1>
            {detail && 'detail : blahbalh'}
        </div>
    );
};

export default About;