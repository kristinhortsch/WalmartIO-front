import React from 'react';
import PropTypes from 'prop-types';

function UserInput({ searchTerm, onChange, onClick }) {
  return (
    <>
      <form>
        <input type="text" name="searchTerm" value={searchTerm} onChange={onChange} /><br />
        <button type='submit' onClick={onClick}>Search</button>
      </form>
    </>
  );
}

UserInput.propTypes = {
  searchTerm: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default UserInput;
