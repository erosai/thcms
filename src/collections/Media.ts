import { CollectionConfig } from "payload/types" ; 
import path from 'path' ;

const Media : CollectionConfig = {

    slug : 'media' , 
    admin : { 
        useAsTitle : 'alt', 
    },
    upload: {
        staticDir: path.resolve(__dirname, "../../media"),
      },
    fields : [
        {
            name : 'alt' ,
            type : 'text' ,
            label : 'Alt Text' ,
            required : true ,
            admin : { 
                description : 'Pershkrimi i fotos'
            }
        },

    ]
}


export default Media; 