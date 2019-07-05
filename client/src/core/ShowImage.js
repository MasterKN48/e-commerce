import React from 'react';
import {API} from '../config';
import Img from 'react-image'
const ShowImage=({item,url})=>{
    const myComponent = () =>
    <Img
        alt={item.name}
        style={{maxHeight:'40%',maxWidth:'50%'}} 
        className="mb-3"
        src={`${API}/${url}/photo/${item._id}`}
        loader={
            <div class="ui placeholder">
              <div class="image"></div>
            </div>
        }
    />
        
    return (
        <div className="product-img text-center center">
            {myComponent()}
        </div>
    )
};

export default ShowImage;