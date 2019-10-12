import React from 'react';
import './App.css';
class LinksRow extends React.Component {
    render() {
        const TagName = this.props.obj.icon;
        return (

            <div className='linkRow'>
                <a href={this.props.obj.url} target="_blank" rel="noopener noreferrer">
                    <TagName className='linkIcons' style={{ color: this.props.obj.color }} />
                </a>
                <a href={this.props.obj.url} target="_blank" rel="noopener noreferrer">
                    <p>{this.props.obj.name}</p>
                </a>
            </div>
        );
    }
}

export default LinksRow;
