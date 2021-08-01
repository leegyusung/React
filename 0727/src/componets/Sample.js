import React from 'react';
import PropTypes from "prop-types";

const Sample = ({ post }) => {
    return (
        <div>
            <h1>{post.title}</h1>
            <h1>{post.id}</h1>
        </div>
    );
};

Sample.prototype = {
    title: PropTypes.string,
}
export default Sample;