import React from 'react';
// import './style.css';

const OpenAPC = ({apc}) => {
  return (
      <div className="answerBox">
        <div className="box">
          <h2>Data ze služby <a href="//openapc.net/" target="_blank">OpenAPC</a></h2>
              <p>Bude doplněno</p>
              <p>APC: {apc}</p>
        </div>
      </div>
  )
};

export default OpenAPC;