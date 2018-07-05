import React, { Component } from 'react';
import avatar from '../img/img_avatar3.png'

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
        fetch('https://23qgfo667l.execute-api.us-west-2.amazonaws.com/DevStage')
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
                            // <div key={item.id}> {item.name} {item.age} </div>
                            <div className="card" key={item.id}>
                            <div className="card-header">EmployeeID: {item.id}</div>
                            <div className="card-body"><img className='avatar' src={avatar} /></div>
                            <div className='card-footer'>{item.name} is of age {item.age}.</div>
                            </div>
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