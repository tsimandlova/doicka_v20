import React, { useState, useEffect } from 'react';
import './style.css';

const Unpaywall = ({
    title
    , is_oa
    , doi
    , journal_name
    , journal_issns
    , journal_is_oa
    , oa_status
    , journal_is_in_doaj
  }) => {
  return (
      <div className="answerBox">
        <div className="box">
          <h2>Data ze služby <a href="//unpaywall.org" target="_blank">Unpaywall</a></h2>
          <h3>Informace o článku</h3>
            <ul>
                <li><strong>Název:</strong> {title}</li>
                <li><strong>Je OA:</strong> {is_oa ? "TRUE" : "FALSE"}</li>
                { is_oa ? <li><strong>Plný text:</strong> <a href={`https://oadoi.org/${doi}`} target="_blank">Zobrazit plný text</a></li> : null }
            </ul>
        </div>
        <div className="box">
          <h3>Informace o časopisu</h3>
          <ul>
                <li><strong>Název:</strong> {journal_name}</li>
                <li><strong>ISSN:</strong> {journal_issns}</li>
                <li><strong>Je OA:</strong> {journal_is_oa ? "TRUE" : "FALSE"}</li>
                <li><strong>Je hybrid:</strong> {oa_status === "hybrid" ? "TRUE" : "FALSE"}</li>
                <li><strong>Je v DOAJ:</strong> {journal_is_in_doaj ? "TRUE" : "FALSE"}</li>
          </ul>
        </div>
      </div>
  )
};

export default Unpaywall;