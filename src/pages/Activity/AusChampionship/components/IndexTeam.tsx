import React, { type ReactElement, createContext } from 'react';

import { Trans, t } from '@lingui/macro';
import { Avatar, Box, Button, ButtonProps, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

interface indexTeamProps {
	team: object;
	debaters: Array<any>;
	teamClick: (id: string) => void;
	debaterClick: (id: string) => void;
	teamVotedMap: object;
	debaterVotedMap: object;
}

const ActivityBtn = styled(Button)<ButtonProps>(({ theme }) => ({
	'&:hover': {
		backgroundColor: '#fff',
		color: '#000'
	},
	'&.Mui-disabled': {
		backgroundColor: '#BFBFBF',
		color: '#E5E5E5'
	},
	backgroundColor: '#fff',
	color: '#000'
}));

export const IndexTeam = React.memo((props: indexTeamProps) => {
	const { team, debaters, teamVotedMap, debaterVotedMap } = props;
	return (
		<Box>
			<Box className='flex justify-between items-center'>
				<Avatar
					className='shrink-0'
					src={team.avatar}
					variant='square'
					sx={{ width: 48, height: 48 }}
				/>
				<Typography variant='h6' className='text-white font-bold w-full px-3.5'>
					{team.name}
				</Typography>
				<Box className='shrink-0'>
					<ActivityBtn
						className='text-sm px-7 leading-[14px] h-6'
						disabled={teamVotedMap[team.id]}
						onClick={() => {
							props.teamClick(team.id);
						}}
					>
						<Trans>Vote</Trans>
					</ActivityBtn>
					<Typography variant='body1' className='text-white mt-2'>
						{team.votes} <Trans>votes</Trans>
					</Typography>
				</Box>
			</Box>
			<Box
				className='border-solid border-t w-full h-[1px] my-4'
				sx={{ borderColor: 'rgba(255, 255, 255, 0.12)' }}
			/>
			<Box className='flex justify-between'>
				{debaters.map(item => {
					return (
						<Box className='flex flex-col items-center' key={item.id}>
							<Avatar
								className='shrink-0'
								src={item.avatar}
								variant='rounded'
								sx={{ width: 48, height: 48 }}
							/>
							<Typography
								variant='body1'
								className='text-white font-bold w-full px-3.5 mt-2'
							>
								{item.name}
							</Typography>
							<ActivityBtn
								className='text-sm px-7 leading-[14px] h-6 mt-2'
								disabled={debaterVotedMap[item.id]}
								onClick={() => {
									props.debaterClick(item.id);
								}}
							>
								<Trans>Vote</Trans>
							</ActivityBtn>
							<Typography variant='body2' className='text-white mt-2'>
								{item.votes} <Trans>votes</Trans>
							</Typography>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
});
