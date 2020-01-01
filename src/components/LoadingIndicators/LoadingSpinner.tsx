/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { em } from 'polished';

import styled from '@theme/styled';
import { ReactComponent as SpinnerIcon } from '~/icons/loading-spinner.svg';

type Props = {
  /** A size value to apply to the height and width of the spinner, Example: '18'. Will be set as pixel units */
  size?: string;
};

const Wrapper = styled.div<Props>`
  position: relative;
  width: ${({ size }) => em(size as string)};
  height: ${({ size }) => em(size as string)};

  > * {
    width: ${({ size }) => em(size as string)};
    height: ${({ size }) => em(size as string)};
  }
`;

const Spinner = styled(SpinnerIcon)`
  position: absolute;
  top: 0;
  left: 0;
  animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  will-change: transform;

  * {
    fill: currentColor;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

/**
 * A general use loading spinner. Can be used in multiple component types.
 */
const LoadingSpinner: React.FC<Props> = ({ size = '18', ...props }) => {
  return (
    <Wrapper size={`${size}px`} {...props}>
      <Spinner />
    </Wrapper>
  );
};

export default LoadingSpinner;
