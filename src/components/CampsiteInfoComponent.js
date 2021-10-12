import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            campsite: this.props.campsite,
        };
    }

    renderCampsite (campsite) {
        return (
            <div className = "col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                    <CardTitle>{campsite.name}</CardTitle>
                    <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    
    render () {
        if (this.state.campsite) {
            return (
                <div className = "row">
                    {this.renderCampsite(this.state.campsite)} 
                </div>
            )
        } else {
            return (
                <div>

                </div>
            )
        }
    }
};
 
export default CampsiteInfo;