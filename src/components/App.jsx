import React, { Component } from 'react';



import PostData from './PostData';

class App extends Component {
   
    render(){
       
        return(
            <div className='App'>
                <h1>Hello World</h1>
                
                <PostData /> 
                  
            </div>
        );
    }
    
    
}

export default App;