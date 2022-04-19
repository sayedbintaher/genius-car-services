import React from 'react';

const Expert = ({expert}) => {
    const {name, img} = expert;
    return (
        <div className="gx-5 gy-2 col-sm-12 col-md-6 col-lg-4">
            <div className="card" style={{width: "18rem"}}>
            <img src={img} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        </div>
        
    );
};

export default Expert;