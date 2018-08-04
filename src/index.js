import React from 'react';
import ReactDom from 'react-dom';

import Search_Bar from './components/search_bar';

const API_Key = 'AIzaSyCJzgn_w5v8aupGapUwXVFCYcF11KgqIQA';

const App = () => {
    return (
        <div>
            <Search_Bar />
        </div>
    );
}

ReactDom.render(<App />, document.querySelector('.container'));