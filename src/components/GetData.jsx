import React, { Component } from 'react';

class GetData extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: null

        }
        
        
    }

    getData(){
        fetch('https://0x1dp8xb35.execute-api.us-west-2.amazonaws.com/DevStage')
        .then( resp => resp.json() )
        .then( 
            (data) => {
                console.log('data',data);
                this.setState({isLoaded:true,items:data});
                
                
            },
            (error) => {
                console.log('error',error);
                this.setState({isLoaded:true,error});
            }
         )
    }

    renderData(){
        const { error,isLoaded,items } = this.state;
        if (error) {
            return <div> Error: {error} </div>
        } else if (!isLoaded) {
            return <div> Loading... {error} </div>
        } else if (items.length>0) {
            return(
                <div>
                    { items.map( item => {
                        return(
                            <div key={item.id}> {item.name} {item.age} </div>
                        )
                    } 
                    )}
                    
                    
                </div>
               
            );
        }
    }

    componentDidMount(){
        this.getData();
    }

    render(){
        return(
            <div>
                
                <div>
                    {
                     this.renderData()
                    }
                </div>
            </div>
        )
    }
}

export default GetData;