import React, { useState, useEffect } from 'react';
import './style.css';

const CUNIServices = ({doi, journal_issn_l}) => {
  return (
      <div className="answerBox">
        <div className="box">
          <h2>Doplňkové služby pro uživatele UK</h2>
            <ul>
                <li><strong>UKAŽ:</strong> <a href={`https://cuni.primo.exlibrisgroup.com/discovery/openurl?institution=420CKIS_INST&vid=420CKIS_INST:UKAZ&id=doi:${doi}`} target="_blank">Zkusit najít záznam</a></li>
                <li><strong>Ulrichsweb:</strong> <a href={`https://ulrichsweb-serialssolutions-com.ezproxy.is.cuni.cz/api/openurl?issn=${journal_issn_l}`} target="_blank">Zkusit najít záznam</a></li>
                <li><strong>SHERPA/RoMEO:</strong> <a href={`http://www.sherpa.ac.uk/romeo/search.php?issn=${journal_issn_l}`} target="_blank">Zkusit najít záznam</a></li>
            </ul>
        </div>
      </div>
  )
};

export default CUNIServices;