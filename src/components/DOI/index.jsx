import React, { useState, useEffect } from 'react';
import './style.css';

import Unpaywall from './../Unpaywall';
import OpenAPC from './../OpenAPC';
import CUNIServices from './../CUNIServices';

const DOI = () => {

  const [doi, setDoi] = useState('');
  const [button, setButton] = useState(false);
  const [info, setInfo] = useState([]);
  const [openApc, setOpenApc] = useState([]);
  const [openApcInst, setOpenApcInst] = useState('');
  const [bestLocation, setBestLocation] = useState({});
  const [visibility, setVisibility] = useState(false);

  const loadData = () => {
    fetch(`https://api.unpaywall.org/v2/${doi}?email=email@email.cz`)
    .then( response => response.json() )
    .then( data => {
      setInfo(data);
      setBestLocation(data.best_oa_location);
      // console.log(data);
      // console.log(data.best_oa_location);
      })
  };

  const loadData2 = () => {
    fetch(`https://olap.openapc.net/cube/openapc/aggregate?drilldown=doi&cut=doi:${doi}`)
    .then( response => response.json() )
    .then( data => {
      setOpenApc(data.summary);
      }
    )
  };

  const loadData3 = () => {
    fetch(`https://olap.openapc.net/cube/openapc/aggregate?drilldown=institution&cut=doi:${doi}`)
    .then( response => response.json() )
    .then( (json) => 
      setOpenApcInst(json.cells[0].institution))
  };

  useEffect ( 
    () => {
      loadData();
      loadData2();
      loadData3();
    }, 
    [button]
  );

  const handleOnClick = () => {
    let newVisibility

    if (doi === '') {
        newVisibility = false;
      } else {
        newVisibility = true
    }
      setButton(!button);
      setVisibility(newVisibility);
  };

  return (
    <div className="container">
      <div className="formBox">
        <form>
          <label>Zadejte DOI článku</label><br/>
          <span className="formHelp">(uvádějte pouze číselnou část DOI, bez http(s) - např. 10.1038/nature12373)</span><br/>
          <input type="text" id="myDOI" onChange={(event) => {setDoi(event.target.value)}} /><br/>
          <button type="button" onClick={handleOnClick}>Zjisti info</button>
          <button>Začít nový list!</button>
        </form>
        <p></p>
      </div>

      { visibility === true 
          ? <>
              <Unpaywall 
                doi={doi} 
                title={info.title}
                is_oa={info.is_oa}
                // url={bestLocation}
                journal_name={info.journal_name}
                journal_issns={info.journal_issns}
                journal_issn_l={info.journal_issn_l}
                journal_is_oa={info.journal_is_oa}
                oa_status={info.oa_status}
                journal_is_in_doaj={info.journal_is_in_doaj}
              /> 

              <OpenAPC 
                doi={doi}
                apc={openApc.apc_amount_avg}
                institution={openApcInst}
              /> 

              <CUNIServices 
                doi={doi} 
                journal_issn_l={info.journal_issn_l}
              /> 
            </>
          : null 
      }

    </div>
  )
};

export default DOI;