import { Component } from 'react';
import {connect} from 'react-redux';

class Posts extends Component {


   render(){
    const posts=[];
    for(let posts of this.props.posts){
        posts.push(<div key={posts.id}>{posts.title}</div>);

    return <div>
           
            <div>{posts}</div>
    </div>
}
}
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    }
}



export default connect(mapStateToProps)(Posts);