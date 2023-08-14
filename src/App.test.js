import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe("react start app", () => {
  test('1. h1 title should be String counter', () => {
    render(<App />);
    const title = screen.getByTestId('title');
    expect(title).toBeTruthy();
    expect(title).toHaveTextContent('String counter');
  });
});

describe("add three inputs", () => {
  test('2. page have a three input', () => {
    render(<App />);
    const inputs = screen.getByTestId('inputs');
    expect(inputs).toBeTruthy();
    expect(inputs.children.length).toBe(3);
  });
});

describe("react hooks", () => {
  beforeEach(() => {
    const app = render(<App />);
    const inp1 = app.container.querySelector('[name="inp1"]');
    const inp2 = app.container.querySelector('[name="inp2"]');
    const inp3 = app.container.querySelector('[name="inp3"]');
    fireEvent.change(inp1, {'target': {'value': 'Hi'}});
    fireEvent.change(inp2, {'target': {'value': ' Simon '}});
    fireEvent.change(inp3, {'target': {'value': 'Lazarev!'}});
  });

  test('3. fullstring must be Hi Simon Lazarev!', () => {
    const fullstring = screen.getByTestId('fullstring');
    expect(fullstring).toBeTruthy();
    expect(fullstring).toHaveTextContent('Hi Simon Lazarev!');
  });

  test('4. fibonacci must be count correctly', () => {
    const fibonacci = screen.getByTestId('fibonacci');
    expect(fibonacci).toBeTruthy();
    expect(fibonacci).toHaveTextContent('1597');
  });

});
