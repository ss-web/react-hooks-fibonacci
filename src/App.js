import { useState, useEffect, useMemo } from 'react';
import './App.css';

const fib = (n) => (n<=1) ? n : fib(n-1) + fib(n-2);

function App() {
  const list = ['inp1','inp2','inp3'];
  const model = list.reduce((a,v)=>(a[v]="",a),{});
  const [names, setName] = useState(model);
  const [count, setCount] = useState('');
  const [num, setNum] = useState(0);

  const update = (e) => {
    setName((v) => ({
      ...v,
      [e.name]: e.value
    }))
  }

  const fibonacci = useMemo(() => fib(num), [num])

  useEffect(() => {
    const countValues = Object.values(names).reduce((a,b) => a+' '+b);
    const countNumbers = Object.values(names).map(e=>e.length).reduce((a,b) => a+b);
    setCount(countValues)
    setNum(countNumbers)
  })

  return (
    <div className="App">
      <h1 data-testid="title">String counter</h1>
      <p data-testid="fullstring">{count}</p>
      <p data-testid="fibonacci">{fibonacci}</p>
      <div data-testid="inputs">
        {list.map(e => <input key={e} name={e} value={names[e]} onChange={(e) => update(e.target)} />)}
      </div>
    </div>
  );
}

export default App;
