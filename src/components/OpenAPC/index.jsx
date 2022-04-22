import React from 'react';
// import './style.css';

const OpenAPC = ({doi, apc, institution}) => {
  return (
      <div className="answerBox">
        <div className="box">
          <h2>Data ze služby <a href="//openapc.net/" target="_blank">OpenAPC</a></h2>
              {apc ? <p>Platba za článek {doi} <strong>je vykázána</strong> v databázi OpenAPC.</p> : <p>Článek {doi} <strong>není</strong> v databázi OpenAPC.</p> }
              {apc 
                ? <ul>
                    <li><strong>Zaplaceno:</strong> {apc} EUR</li> <li><strong>Instituce:</strong> {institution}</li> 
                  </ul>
                : null }
        </div>
      </div>
  )
};

export default OpenAPC;