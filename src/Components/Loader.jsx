import { Image } from "@chakra-ui/react";
import { Load } from "./Style";
import './loader.css'

const Loader = () => {
    return (
        <div className="loaderrr" >
        <Load>
           <Image height = "250px" width = "400px" src="sitelogo.png" alt="logo"/>
        </Load>
        </div>
    );
};

export default Loader;