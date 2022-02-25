import { render } from '@testing-library/react';

import Ddd from './ddd';

describe('Ddd', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ddd />);
    expect(baseElement).toBeTruthy();
  });
});
