import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

import { InputContainer } from './styles';

const InputSearch = ({ onChange }) => {
  const [focusInput, setFocusInput] = useState(false);
  return (
    <InputContainer isFocus={focusInput}>
      <FaSearch />
      <input
        name="citySearch"
        placeholder="Digite o nome da cidade"
        onChange={(e) => onChange(e.target.value.toLowerCase())}
        onFocus={() => setFocusInput(true)}
        onBlur={() => setFocusInput(false)}
      />
    </InputContainer>
  );
};

InputSearch.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default InputSearch;
