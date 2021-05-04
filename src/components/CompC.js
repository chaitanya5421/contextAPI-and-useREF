import React from 'react';
import {InstituteName,location} from '../App'

function CompC() {
    return (
        <div>
           <InstituteName.Consumer>
               {(insName)=>{
                   return(
                       <>
                    
                    <location.Consumer>
                        {(location)=>{
                           return (
                               <div>
                            <h1>Hii, we are {insName}</h1>
                            <h4>We are located in {location}</h4>
                            </div>
                           )
                        }}
                    </location.Consumer>
                    </>
                   ) 
               }}
           </InstituteName.Consumer>
        
           
        </div>
    )
}

export default CompC
