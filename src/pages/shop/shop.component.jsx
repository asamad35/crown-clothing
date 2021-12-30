import React from "react";
import SHOP_DATA from "./082 shop.data";
import PreviewCollection from "../../component/preview-collection/preview-collection.component";
import './shop.styles.scss'


class ShopPage extends React.Component{
    constructor(props){
        super(props);
          this.state = {
             collections:  SHOP_DATA,
         }
        
    }

    render (){
        const collections = this.state.collections
        return( 
        <div className="shop-page">
            {
                collections.map(({id,...otheCollectionProps})=> <PreviewCollection key={id} {...otheCollectionProps} />)
            }
        </div>
        
        )
    }
}

export default ShopPage