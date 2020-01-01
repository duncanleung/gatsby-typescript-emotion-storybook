/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { css } from '@emotion/core';
import { Theme } from '@theme/styled';
import { rem } from 'polished';
import { GatsbyLinkProps } from 'gatsby';
import { Link } from 'gatsby-plugin-intl';

import { LoadingSpinner } from '~/components/LoadingIndicators';

import { above, spacer } from '~/utils/styles';
import { PartialBy } from '~/@types';

type Color = 'primary' | 'secondary';
type Variant = 'default' | 'outline';
export type Size = 'large' | 'medium' | 'small';

type Props = {
  name?: string;
  tag?: 'button' | 'a' | 'link';
  size?: Size;
  color?: Color;
  variant?: Variant;
  isLoading?: boolean;
  disabled?: boolean;
  /* Strips button styles for a button that looks like a regular anchor tag */
  stripButtonStyles?: boolean;
};

// These colors are not part of the design system color palette (defined in the Theme)
const interactionColors = {
  hover: {
    primary: {
      default: '#ffD840',
      outline: '#ffcc00',
    },
    secondary: {
      default: '#40a2a6',
      outline: '#008489',
    },
  },
  active: {
    primary: {
      default: '#e6b800',
      outline: '#ffcc00',
    },
    secondary: {
      default: '#00696d',
      outline: '#00696D',
    },
  },
};

const createStyles = (
  theme: Theme,
  size: Size,
  color: Color,
  variant: Variant
) => {
  return css`
    /* Defaults (size - medium, color - primary, variant - default) */
    position: relative;
    display: inline-block;
    font-size: ${rem('18px')};
    font-weight: 400;
    text-align: center;
    padding: ${spacer(2)} ${spacer(4)};
    border-radius: ${theme.shape.borderRadius.large}px;
    color: ${theme.color.text.heading};
    background-color: ${theme.color[color]};
    transition: 150ms;
    cursor: pointer;
    line-height: 1.25;

    &:hover {
      background-color: ${interactionColors.hover[color][variant]};
    }

    &:active {
      background-color: ${interactionColors.active[color][variant]};
    }

    &:disabled {
      background-color:  ${theme.color.disabled};
    }

    ${above(
      'sm',
      css`
        padding: ${spacer(2)} ${spacer(6)};
      `
    )}

    /* Size modifiers */
    ${size === 'small' &&
      css`
        padding: ${spacer()} ${spacer(3)};
        font-size: ${rem('16px')};

        ${above(
          'sm',
          css`
            padding: ${spacer(1.5)} ${spacer(4)};
          `
        )}
      `}

    /* Color modifiers */
    ${color === 'secondary' &&
      css`
        color: #fff;
        background-color: ${theme.color.secondary};
      `}

    /* Variant - outline  */
    ${variant === 'outline' &&
      css`
        color: ${color === 'primary'
          ? theme.color.text.heading
          : theme.color.secondary};
        background-color: transparent;
        border: 1px solid
          ${color === 'primary'
            ? theme.color.text.heading
            : theme.color.secondary};

        &:hover,
        &:active {
          color: #fff;
        }
      `}
  `;
};

const loadingStyles = css`
  display: block;
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
`;

// For buttons that should look like links
const stripStyles = css`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

type GatsbyLinkPropsPartial = PartialBy<
  Omit<GatsbyLinkProps<object>, 'ref'>,
  'to'
>;

const Button: React.FC<GatsbyLinkPropsPartial & Props> = ({
  tag = 'button',
  size = 'medium',
  color = 'primary',
  variant = 'default',
  isLoading = false,
  stripButtonStyles = false,
  children,
  ...props
}) => {
  const buttonProps = {
    css: (theme: Theme) =>
      !stripButtonStyles
        ? createStyles(theme, size, color, variant)
        : stripStyles,
    ...props,
  };

  if (tag === 'link') {
    const { to } = buttonProps;

    if (!to) {
      /* eslint-disable-next-line no-console */
      console.log("Using Button with `tag='link'` requires a `to` prop.");
    }

    return (
      <Link to={to || ''} {...buttonProps}>
        {children}
      </Link>
    );
  }

  if (tag === 'a') {
    return <a {...buttonProps}>{children}</a>;
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <button {...buttonProps}>
      {children}
      {isLoading && <LoadingSpinner css={loadingStyles} />}
    </button>
  );
};

export default Button;
