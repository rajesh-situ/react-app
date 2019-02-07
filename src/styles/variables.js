import styled from 'styled-components';
import React from 'react';

const styles = styled.div`
/* colors */
--main-header-color: #002960;
--main-shadow-color: #0000001a;
/* fonts */
--font-size-medium: 13px;
`;
export default styles;
export const Container = (props) => (
  <styles>
    {props.children}  {/* eslint-disable-line react/prop-types */}
  </styles>
);
