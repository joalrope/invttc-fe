import React from 'react';
import './text-input.scss';

export const TextInput = ({ title, name, onChange, value }) => {
  return (
    <div className={`--input-text__container --input-${name}`}>
      <label htmlFor={name}>{title}</label>
      <input id={name} name={name} type='text' onChange={onChange} value={value} />
    </div>
  );
};
