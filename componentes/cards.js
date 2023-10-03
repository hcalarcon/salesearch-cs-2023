import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';


export function Cards(props) {

    const { titulo, subtitulo, rutaimg} = props

    return (
        <Card>
            <Card.Title title="Card Title" subtitle="Card Subtitle"  />
            <Card.Content>
                <Text variant="titleLarge">{titulo}</Text>
                <Text variant="bodyMedium">{subtitulo}</Text>
            </Card.Content>
            <Card.Cover source={require(rutaimg)} />
            <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
            </Card.Actions>
        </Card>
    );
}
