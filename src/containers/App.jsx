import React, { Component } from 'react';
import connect  from 'react-redux';
import { getData,postData,clearAll } from '../actions';
import PostData from '../components/PostData';
import { read_cookie } from 'sfcookies';
import avatar from '../img/img_avatar3.png'

class App extends Component {

    
   
    render(){
       
        return(
            <div className='App'>
                <h1>Sample ReactJS App</h1>
                
                <PostData /> 
               
            </div>
        );
    }
    
    
}

export default App;