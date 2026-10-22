import React from 'react'
import { Card } from "@heroui/react";
import { persons } from '../data';

const PersCard = () => {
    return (
    <div className="flex flex-col gap-4">
      <Card className="w-[320px]" variant="transparent">
        <Card.Header>
          <Card.Title>{persons.name}</Card.Title>
          <Card.Description>Minimal prominence with transparent background</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>Use for less important content or nested cards</p>
        </Card.Content>
      </Card>
      </div>
    )
}

export default PersCard