import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react Alumno', () => {
  const { getByText } = render(<App />);
  const AlumnoElement = getByText(/learn react/i);
  expect(AlumnoElement).toBeInTheDocument();
});
