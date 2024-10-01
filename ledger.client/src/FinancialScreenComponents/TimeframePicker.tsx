import { ButtonGroup, ButtonToolbar, Container, Button } from "react-bootstrap";
import { TimeRange, useTimeframeContext } from './TimeframeContext.tsx'

function TimeframePicker() {
    const timeframeContext = useTimeframeContext();
    const currentMonth = () => timeframeContext.updateValue(TimeRange.CurrentMonth);
    const threeMonths = () => timeframeContext.updateValue(TimeRange.ThreeMonths);
    const sixMonths = () => timeframeContext.updateValue(TimeRange.SixMonths);
    const nineMonths = () => timeframeContext.updateValue(TimeRange.NineMonths);
    const year = () => timeframeContext.updateValue(TimeRange.Year);


    const content =
        (
            <Container fluid as={ButtonToolbar}>
                <ButtonGroup>
                    <Button onClick={currentMonth}>Month</Button>
                    <Button onClick={threeMonths}>3 Months</Button>
                    <Button onClick={sixMonths}>6 Months</Button>
                    <Button onClick={nineMonths}>9 Months</Button>
                    <Button onClick={year}>Year</Button>
                </ButtonGroup>
            </Container >
        );


    return ( content );
}

export default TimeframePicker;