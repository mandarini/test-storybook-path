import { render } from '@testing-library/react';

import Fourreact from './fourreact';

describe('Fourreact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Fourreact />);
    expect(baseElement).toBeTruthy();
  });
});
