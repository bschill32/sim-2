import React from "react"

function House(props) {
    return (
        <div>
            {/* <h2>Home Listings</h2> */}
            <p>
                Property Name: {props.name}<br/>
                Address: {props.address}<br/>
                City: {props.city}<br/>
                State: {props.state}<br/>
                Zip: {props.zip}<br/>
            </p>
        </div>
    )
}

export default House