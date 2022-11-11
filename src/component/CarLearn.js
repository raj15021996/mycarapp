import React from 'react'

export default function CarLearn(props) {
    const {val}=props;
    return (
            <div className="card-item">
         
                    <div className="card-inner" key={val.id}>
                     <p className='bodyType'>{val.bodyType}</p>
                     <div className='modalDetails'>
                    <h5>{val.modelName}</h5>
                    <p className='modalType'>{val.modelType}</p>
                </div>
                <div className="card-top">
                    <img src={process.env.PUBLIC_URL + val.imageUrl} alt={val.modelName} />
                </div>
                <div className="card-bottom">
                    <div className="card-info">
                    </div>
                </div>
            </div>
               
               
           

        </div>
        
       
    )
}
