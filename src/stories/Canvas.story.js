import React, { PropTypes } from 'react'
import { storiesOf } from '@storybook/react'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import { withKnobs } from '@storybook/addon-knobs';
import { Canvas } from '../components';

storiesOf('Canvas')
	.addDecorator(withSmartKnobs)
	.addDecorator(withKnobs)
	.add('Canvas values', () => {
		const drawing = {
			C: [[20,4]],
			L: [[1,2,6,2],[6,3,6,4]],
			R: [[16,1,20,3]],
			B: [[10,3,'o']],
		};

		return (
			<Canvas drawing={drawing}/>
		)}
	)
  