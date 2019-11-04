import React, { useContext } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import ActivityStore from '../../../app/stores/activityStore';
import { observer } from 'mobx-react-lite';

const ActivityDetails = () => {
  const activityStore = useContext(ActivityStore);
  const {
    selectedActivity: activity,
    openEditForm,
    cancelSelectedActivity
  } = activityStore;

  return (
    <Card fluid>
      <Image
        src={`/assets/categoryImages/${activity!.category}.jpg`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{activity!.title}</Card.Header>
        <Card.Meta>
          <span>{activity!.date}</span>
        </Card.Meta>
        <Card.Description>{activity!.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button
            onClick={() => openEditForm(activity!.id)}
            basic
            type='button'
            color='blue'
            content='Edit'
          />
          <Button
            basic
            color='grey'
            type='button'
            content='Cancel'
            onClick={cancelSelectedActivity}
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default observer(ActivityDetails);
