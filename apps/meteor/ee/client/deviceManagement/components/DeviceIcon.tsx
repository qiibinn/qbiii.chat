import { Box, Icon } from '@rocket.chat/fuselage';
import React, { ComponentProps, ReactElement } from 'react';

const iconMap: Record<string, ComponentProps<typeof Icon>['name']> = {
	browser: 'desktop',
	mobile: 'mobile',
};

const DeviceIcon = ({ deviceType }: { deviceType: string }): ReactElement => (
	<Box
		is='span'
		display='inline-flex'
		alignItems='center'
		justifyContent='center'
		p='x4'
		bg='neutral-500-50'
		size='x24'
		borderRadius='full'
		mie='x8'
	>
		<Icon name={iconMap[deviceType]} size='x14' color='info' />
	</Box>
);

export default DeviceIcon;
