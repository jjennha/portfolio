import React, { Component } from 'react';
import profile from "https://i.imgur.com/K2zj5sk.png";
type Props = {

}
export default class Cover extends Component<Props>{
    constructor(props: Props) {
        super(props);
    }
    getProfile() {
        const backgroundStyles = {
            backgroundImage: `url(${
                profile
                })`,
            backgroundSize: '15rem'
        }
        return backgroundStyles;
    }
    render() {
        return (
            <div className="cover-container">
                <div className="cover-content">
                <div className="cover-photo">
                    <div className="profile" style={this.getProfile()}></div>
                    </div>
                    <div className="cover-text">
                        
                        <h1 className="text-intro">Hello World</h1>
                        <h1 className="text-me">I'm Jenny</h1>

                    </div>
                    
                    
                </div>
            </div>
        );
    }
}
