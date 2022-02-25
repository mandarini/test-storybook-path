import { render } from '@testing-library/react';

import Bb from './bb';

describe('Bb', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Bb />);
    expect(baseElement).toBeTruthy();
  });
});
