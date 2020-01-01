/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { rgba } from 'polished';

import styled from '@theme/styled';
import { spacer } from '~/utils/styles';

const Wrapper = styled.div`
  height: 300px;
  margin-top: ${spacer(5)};

  /*
      Each linear gradient represents a placeholder element in the skeleton UI
      @link https://css-tricks.com/building-skeleton-screens-css-custom-properties/
    */
  background: linear-gradient(
        90deg,
        ${rgba('#ffffff', 0)} 0,
        ${rgba('#ffffff', 0.8)} 50%,
        ${rgba('#ffffff', 0)} 100%
      ) -100% 0,
    linear-gradient(#f3f1f0 12px, transparent) 0 0,
    linear-gradient(#f3f1f0 12px, transparent) 0 40px,
    linear-gradient(#f3f1f0 12px, transparent) 0 80px,
    linear-gradient(#f3f1f0 12px, transparent) 0 140px,
    linear-gradient(#f3f1f0 12px, transparent) 0 180px;

  background-size: 35% 100%, 33% 12px, 100% 12px, 66% 12px, 100% 12px, 50% 12px;

  background-repeat: no-repeat;
  animation: content-loading 2s infinite;

  /* Note, only first background-image values change for this animation */
  @keyframes content-loading {
    to {
      background-position: 200% 0, 0 0, 0 40px, 0 80px, 0 140px, 0 180px;
    }
  }
`;

/**
 * This component provided a general skeleton UI loading experience that can be used in
 * multiple component types to indicate asynchronous content loading.
 */
const ContentLoading: React.FC = props => {
  return <Wrapper {...props} />;
};

export default ContentLoading;
