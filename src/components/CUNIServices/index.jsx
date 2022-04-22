import React, { useState, useEffect } from 'react';
import './style.css';

const CUNIServices = ({doi, journal_issn_l}) => {
  return (
      <div className="answerBox">
        <div className="box">
          <h2>Doplňkové služby</h2>
          <p>Níže uvedené odkazy nemusí být dostupné volně, ale pouze pro autorizované uživatele (z Univerzity Karlovy).</p>
            <ul>
                <li><strong>UKAŽ:</strong> <a href={`https://cuni.primo.exlibrisgroup.com/discovery/openurl?institution=420CKIS_INST&vid=420CKIS_INST:UKAZ&id=doi:${doi}`} target="_blank">Zkusit najít článek</a></li>
                <li><strong>Ulrichsweb:</strong> <a href={`https://ulrichsweb-serialssolutions-com.ezproxy.is.cuni.cz/api/openurl?issn=${journal_issn_l}`} target="_blank">Zkusit najít časopis</a></li>
                <li><strong>SHERPA/RoMEO:</strong> <a href={`http://www.sherpa.ac.uk/romeo/search.php?issn=${journal_issn_l}`} target="_blank">Zkusit najít časopis</a></li>
            </ul>
        </div>
      </div>
  )
};

export default CUNIServices;