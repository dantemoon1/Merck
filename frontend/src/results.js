import React, {useState , useEffect, useRef} from 'react';
import axios from 'axios';

export default function Results(showResults) {
    const resultsRef = useRef(null);
    const [res1, setRes1] = useState(null);
    const [res2, setRes2] = useState(null);
    const [res3, setRes3] = useState(null);

    useEffect(() => { //this will run when the component mounts
        // resultsRef.current.scrollIntoView({ behavior: 'smooth' }); //scroll to the results


        let url = 'https://fastapi-dantemoon1.cloud.okteto.net/search/';
        axios.get(url+'1').then((response) => {
          setRes1(response.data);
          console.log(response.data);
        });
        axios.get(url+'2').then((response) => {
          setRes2(response.data);
        });
        axios.get(url+'3').then((response) => {
          setRes3(response.data);
        });

        //wait 1 second and then scroll to the results
        setTimeout(() => {
            resultsRef.current.scrollIntoView({ behavior: 'smooth' });
            }, 1000);
    });

    return(
        <div>
            <h1>Results</h1>
            <p>This is just demo data</p>
            <h2>BP-1234</h2>
            <table>
                <tr>
                    <th>MK Number</th>
                    <th>Species</th>
                    <th>Matrix</th>
                    <th>Extraction Method</th>
                    <th>Internal Standard</th>
                    <th>Chromatography</th>
                    <th>Polarity</th>
                </tr>
                <tr>
                    <td>MK-1234 (L-000001234)</td>
                    <td>Human</td>
                    <td>Plasma</td>
                    <td>LLE</td>
                    <td>SIL-MK-1234</td>
                    <td>Normal Phase</td>
                    <td>Positive</td>
                </tr>
            </table>
            <hr></hr>
            <h2>BP-0002</h2>
            <table>
                <tr>
                    <th>MK Number</th>
                    <th>Species</th>
                    <th>Matrix</th>
                    <th>Extraction Method</th>
                    <th>Internal Standard</th>
                    <th>Chromatography</th>
                    <th>Polarity</th>
                </tr>
                <tr>
                    <td>MK-0002 (L-000000002)</td>
                    <td>Rabbit</td>
                    <td>Plasma</td>
                    <td>SPE</td>
                    <td>SIL-MK-0002</td>
                    <td>Reverse Phase</td>
                    <td>Negative</td>
                </tr>
            </table>
            <hr></hr>
            <h2>BP-0003</h2>
            <table>
                <tr>
                    <th>MK Number</th>
                    <th>Species</th>
                    <th>Matrix</th>
                    <th>Extraction Method</th>
                    <th>Internal Standard</th>
                    <th>Chromatography</th>
                    <th>Polarity</th>
                </tr>
                <tr>
                    <td>MK-0003 (L-000000003)</td>
                    <td>Dog</td>
                    <td>Serum</td>
                    <td>SPE</td>
                    <td>SIL-MK-0003</td>
                    <td>Normal Phase</td>
                    <td>Negative</td>
                </tr>
            </table>
            <hr></hr>
            <h1>Results</h1>
            <p>This is actual data retrieved from the database (unformatted for now)</p>
            {JSON.stringify(res1)}
            {JSON.stringify(res2)}
            {JSON.stringify(res3)}
            <span ref={resultsRef}></span>
        </div>
    )

}

