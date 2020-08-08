import React from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

import { Container, RangeDays } from './styles';

const ContainerChats = ({ title, children, rangeValues, fonte }) => {
  const { max, numberRange, setNumberRange } = rangeValues.active && rangeValues;

  return (
    <Container>
      <h3>{title}</h3>
      {rangeValues.active && (
        <RangeDays>
          <span>
            Selecione um intervalo:
          </span>
          <InputRange
            maxValue={max}
            minValue={2}
            value={numberRange}
            formatLabel={(value) => `${value} dias`}
            onChange={(value) => setNumberRange(value)}
          />
        </RangeDays>
      )}

      {children}

      <span>Fonte: {fonte}.</span>
    </Container>
  );
};

export default ContainerChats;

ContainerChats.defaultProps = {
  rangeValues: {
    active: false
  }
};

ContainerChats.propTypes = {
  title: PropTypes.string.isRequired,
  fonte: PropTypes.string.isRequired,
  rangeValues: PropTypes.oneOfType([PropTypes.object]),
  children: PropTypes.element.isRequired
};
