import './Output.css';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputHandles } from '../components/HandleGroup';

const formats = [{ value: 'PNG', label: 'PNG' }];

export function OutputNode() {
    const [filename, setFilename] = useState<string>('output');
    const [format, setFormat] = useState<string>('PNG');

    return (
        <>
            <InputHandles
                handles={[
                    { id: 'r', color: 'red', label: 'Red' },
                    { id: 'g', color: 'green', label: 'Green' },
                    { id: 'b', color: 'blue', label: 'Blue' },
                    { id: 'a', color: 'white', label: 'Alpha' },
                ]}
            />

            <h2 className='node-title'>Output</h2>
            <form className='node-form' action=''>
                <FloatLabel>
                    <InputText id='filename' value={filename} onChange={(e) => setFilename(e.target.value)} />
                    <label htmlFor='filename'>Filename</label>
                </FloatLabel>
                <FloatLabel>
                    <Dropdown inputId='format' value={format} onChange={(e) => setFormat(e.value)} options={formats} />
                    <label htmlFor='format'>Format</label>
                </FloatLabel>
            </form>
        </>
    );
}
