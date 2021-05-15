import React from 'react';
import {Link} from 'react-router-dom';


class Navbar extends React.Component {

    render(){
        return(
            <div>
            {this.props.countries.map((country)=>{
                return <p key={country.cca3}><Link to={'/countries/'+country.cca3}>{country.name.common} {country.flag}</Link></p>
            })}    
            </div>
        )
    }



}

export default Navbar;