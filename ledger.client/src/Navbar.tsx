import { useEffect } from 'react';
import './App.css';
import Row from 'react-bootstrap/Row'

function Navbar() {
    useEffect(
        () => {

        }
    );

    const contents =
        <Row style={{ listStyle: 'none' }}>
            <li>This is stuff</li>
            <li>More Stuff</li>
            <li>Stuffy</li>
            <li>Stuff</li>
        </Row>;

    return (
        <div>
            {contents}
        </div>
    );
}

export default Navbar;