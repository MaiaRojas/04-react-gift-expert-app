import React from 'react';
import PropTypes from 'prop-types'


export const GifGridItem = ({ title, url}) => { 
  return (
    <div className="card animate__fadeIn">
      <p>{ title }</p>
      <img src={url} alt={title} />
    </div>
  )
};

GifGridItem.protoTypes = {
  title: PropTypes.string.isRequired,

}