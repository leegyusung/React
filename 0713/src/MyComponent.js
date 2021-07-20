import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, team }) => {
    return (
        <div className="react">
            나의 새롭고 멋진 {name} 컴포넌트 {team}
        </div>
    );
};

MyComponent.defaultProps = {
    name: "name"
}
MyComponent.propTypes = {
    name: PropTypes.string
}

export default MyComponent;