import React from "react";
import './preview-collection.styles.scss'
import CollectionItem from "../collection-item/collection-item.component";

const PreviewCollection = ({title,items})=>{
    return (
        <div className="preview-collection">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.slice(0,4).map(({id,...otherItemProps})=>{
                        return <CollectionItem key={id} {...otherItemProps}/>
                    })
                }                   
            </div>    
        </div>
    ) 
}

export default PreviewCollection;