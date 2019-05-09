import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
  const inititialState = {
    comments: ['comment one', 'comment two'],
  };

  wrapped = mount(
    <Root inititialState={inititialState}>
      <CommentList />
    </Root>
  );
});

it('creates one LI per comment', () => {
  expect(wrapped.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
  expect(wrapped.render().text()).toContain('comment one');
  expect(wrapped.render().text()).toContain('comment two');
});
