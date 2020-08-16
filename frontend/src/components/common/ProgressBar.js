import React from "react";



const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 18,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    marginTop: 50,
    marginBottom: 20
  }

  const fillerStyles = {
  	transition: 'width 1s ease-in-out',
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
