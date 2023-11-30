import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';


function CardApp() {
return (
    <Stack direction="horizontal" gap={3}>
        <div className="p-2">
        <Card
                    bg={'Primary'.toLowerCase()}
                    key={'Primary'}
                    text={'Primary'.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>{'Primary'} Card Title </Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
        </div>

        <div className="p-2">
                <Card
                    bg={'Secondary'.toLowerCase()}
                    key={'Secondary'}
                    text={'Secondary'.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                    <Card.Title>{'Secondary'} Card Title </Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </div>

                <div className="p-2">
                <Card
                    bg={'Warning'.toLowerCase()}
                    key={'Warning'}
                    text={'Warning'.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                    <Card.Title>{'Warning'} Card Title </Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </div>
                </Stack>
    );
}

export default CardApp;