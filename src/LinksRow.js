import React from 'react';
import './App.css';
class LinksRow extends React.Component {
    render() {
        const TagName = this.props.obj.icon;
        return (
          
            <div style={{marginRight: "15px"}}>
                <a href={this.props.obj.url} target="_blank" rel="noopener noreferrer">
                <div style={{backgroundColor:'white', height:"30px",width:"30px"}}>
                    <TagName className='linkIcons' style={{ color: this.props.obj.color }} />
                    </div>
                </a>
            </div>
        );
    }
}

export default LinksRow;
