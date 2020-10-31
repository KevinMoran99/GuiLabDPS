import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react Alumno', () => {
  const { getByText } = render(<App />);
  const AlumnoElement = getByText(/learn react/i);
  expect(AlumnoElement).toBeInTheDocument();
});

test('renders learn react Empleado', () => {
  const { getByText } = render(<App />);
  const EmpleadoElement = getByText(/learn react/i);
  expect(EmpleadoElement).toBeInTheDocument();
});
