import React from 'react';

import {Text} from '../Text';
import {Thumbnail} from '../Thumbnail';
import {TextBlock} from '../TextBlock';
import {Icon} from '../Icon';
import {InlineStack} from '../InlineStack';

import {ResourceItem, ResourceItemContent} from './ResourceItem';

const meta = {
  component: ResourceItem,
  title: 'ResourceItem',
  decorators: [
    (story: () => JSX.Element) => <div style={{margin: '1em'}}>{story()}</div>,
  ],
};

export default meta;

export const defaultState = () => {
  return (
    <ResourceItem>
      <ResourceItemContent primary>
        <Text emphasized>T-shirt</Text>
      </ResourceItemContent>
      <ResourceItemContent>
        <Text>$10.00</Text>
      </ResourceItemContent>
    </ResourceItem>
  );
};

export const withoutPrimaryContent = () => {
  return (
    <ResourceItem>
      <ResourceItemContent>
        <Text emphasized>T-shirt</Text>
      </ResourceItemContent>
      <ResourceItemContent>
        <Text>$10.00</Text>
      </ResourceItemContent>
    </ResourceItem>
  );
};

export const multipleContent = () => {
  return (
    <ResourceItem>
      <ResourceItemContent>
        <Thumbnail description="some media source" badge={1} />
      </ResourceItemContent>
      <ResourceItemContent primary>
        <TextBlock emphasized>T-shirt</TextBlock>
        <TextBlock size="small" subdued>
          Blue
        </TextBlock>
        <TextBlock appearance="success">
          <InlineStack alignment="center" spacing="xtight">
            <Icon source="checkmark" size="default" />
            <Text size="small">Available</Text>
          </InlineStack>
        </TextBlock>
      </ResourceItemContent>
      <ResourceItemContent>
        <Text emphasized>$10.00</Text>
      </ResourceItemContent>
    </ResourceItem>
  );
};
