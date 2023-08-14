describe("Initial Title Test", () => {
  test('1. Should display "String counter" as the initial h1 title', () => {
    render(<App />);
    const title = screen.getByTestId('title');
    expect(title).toBeTruthy();
    expect(title).toHaveTextContent('String counter');
  });
});

describe("Input Section Test", () => {
  test('2. Should have three input fields on the page', () => {
    render(<App />);
    const inputs = screen.getByTestId('inputs');
    expect(inputs).toBeTruthy();
    expect(inputs.children.length).toBe(3);
  });
});

describe("Input Value Manipulation Test", () => {
  beforeEach(() => {
    const app = render(<App />);
    const inp1 = app.container.querySelector('[name="inp1"]');
    const inp2 = app.container.querySelector('[name="inp2"]');
    const inp3 = app.container.querySelector('[name="inp3"]');
    fireEvent.change(inp1, {'target': {'value': 'Hi'}});
    fireEvent.change(inp2, {'target': {'value': ' Simon '}});
    fireEvent.change(inp3, {'target': {'value': 'Lazarev!'}});
  });

  test('3. Should concatenate inputs to form the full string "Hi Simon Lazarev!"', () => {
    const fullstring = screen.getByTestId('fullstring');
    expect(fullstring).toBeTruthy();
    expect(fullstring).toHaveTextContent('Hi Simon Lazarev!');
  });

  test('4. Should correctly calculate and display the Fibonacci number 1597', () => {
    const fibonacci = screen.getByTestId('fibonacci');
    expect(fibonacci).toBeTruthy();
    expect(fibonacci).toHaveTextContent('1597');
  });
});
