import React, {useState , useEffect, useRef} from 'react';

export default function Results(showResults) {
    const resultsRef = useRef(null);

    useEffect(() => { //this will run when the component mounts
        resultsRef.current.scrollIntoView({ behavior: 'smooth' }); //scroll to the results
        //you can put your fetch code here or in the parent component
    }, []); //empty array means this will only run once

    return(
        <div ref={resultsRef}>
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
        </div>
    )

}

