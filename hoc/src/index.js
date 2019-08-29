import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing',()=>{
    const div = document.getElementById('root')
    ReactDOM.render(<App />,div);
    expect(div.innerHTML).toContain('hi there!')
    ReactDOM.unmountComponentAtNode(div)
})


