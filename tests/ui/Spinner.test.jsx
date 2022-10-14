import { render } from '@testing-library/react';
import { Spinner } from '../../src/ui';

describe('Tests on <Spinner />', () => {
  test('should match with snapshot', () => {
    const { container } = render(<Spinner />);

    expect(container).toMatchSnapshot();
  });
});
