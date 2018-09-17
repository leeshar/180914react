import React from 'react';
import './App.css';
import { storiesOf } from '@storybook/react';
import * as main from './main/';
import { linkTo } from '@storybook/addon-links';


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
storiesOf('Header', module).add('Header',()=><main.Header></main.Header>);
storiesOf('Nav', module).add('Nav', () => <main.Nav></main.Nav>);