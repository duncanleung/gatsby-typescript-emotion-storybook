import React from 'react';
import { render } from 'test-utils';
import { rem } from 'polished';
import theme from '~/theme';

import Button from '../Button';
import { spacer } from '~/utils/styles';

describe('<Button />', () => {
  describe('default button with style modifiers', () => {
    test('should render default button styles', () => {
      const { getByText } = render(<Button>Click Me</Button>);

      const button = getByText('Click Me');

      expect(button).toHaveStyleRule('font-size', rem('18px'));
      expect(button).toHaveStyleRule('padding', `${spacer(2)} ${spacer(4)}`);
      expect(button).toHaveStyleRule('color', theme.color.text.heading);
      expect(button).toHaveStyleRule('background-color', theme.color.primary);
    });

    test('should render button with small modifier styles', () => {
      const { getByText } = render(<Button size="small">Click Me</Button>);

      const button = getByText('Click Me');

      expect(button).toHaveStyleRule('font-size', rem('16px'));
      expect(button).toHaveStyleRule('padding', `${spacer()} ${spacer(3)}`);
    });

    test('should render button with secondary color modifier styles', () => {
      const { getByText } = render(<Button color="secondary">Click Me</Button>);

      const button = getByText('Click Me');

      expect(button).toHaveStyleRule('background-color', theme.color.secondary);
    });
  });

  describe('outline variant button with style modifiers', () => {
    test('should render outline button styles', () => {
      const { getByText } = render(<Button variant="outline">Click Me</Button>);

      const button = getByText('Click Me');

      expect(button).toHaveStyleRule('color', theme.color.text.heading);
      expect(button).toHaveStyleRule('background-color', 'transparent');
      expect(button).toHaveStyleRule(
        'border',
        `1px solid ${theme.color.text.heading}`
      );
    });

    test('should render outline button with small modifier styles', () => {
      const { getByText } = render(
        <Button variant="outline" size="small">
          Click Me
        </Button>
      );

      const button = getByText('Click Me');

      expect(button).toHaveStyleRule('font-size', rem('16px'));
      expect(button).toHaveStyleRule('padding', `${spacer()} ${spacer(3)}`);
    });

    test('should render outline button with secondary color modifier styles', () => {
      const { getByText } = render(
        <Button variant="outline" color="secondary">
          Click Me
        </Button>
      );

      const button = getByText('Click Me');

      expect(button).toHaveStyleRule('color', theme.color.secondary);
      expect(button).toHaveStyleRule(
        'border',
        `1px solid ${theme.color.secondary}`
      );
    });
  });

  test('should render as anchor tag if type is "link"', () => {
    const { container } = render(
      <Button tag="link" css="mock-styles-string" to="/browse-all/">
        Click Me
      </Button>
    );

    const linkAsButton = container.querySelector('a');

    expect(linkAsButton).toBeInTheDocument();
  });

  test('should render as anchor tag if type is "a"', () => {
    const { container } = render(
      <Button tag="a" css="mock-styles-string" to="/browse-all/">
        Click Me
      </Button>
    );

    const linkAsButton = container.querySelector('a');

    expect(linkAsButton).toBeInTheDocument();
  });
});
