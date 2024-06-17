import { type ReactElement } from 'react';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';
import { styled, useTheme } from '@mui/material/styles';
import ReactSwipeableViews from 'react-swipeable-views';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';

const BootstrapButton = styled(Button)({
	width: '55px',
	height: '24px',
	borderRadius: '80px',
	color: 'white',
	borderColor: 'white',
	'&:hover': {
		borderColor: 'white'
	},
	'&:active': {
		boxShadow: 'none',
		borderColor: '#888888',
		color: '#888888'
	}
});

const SmallAvatar = styled(Avatar)(({ theme }) => ({
	width: 16,
	height: 16,
	// border: `2px solid ${theme.palette.background.paper}`,
}));

interface StyledTabsProps {
	children?: React.ReactNode;
	value: number;
	onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabList = styled((props: StyledTabsProps) => (
	<TabList
		{...props}
	/>
))({});

interface StyledTabProps {
	label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
	<Tab disableRipple {...props} />
))(({ theme }) => ({
	textTransform: 'none',
	fontWeight: theme.typography.fontWeightRegular,
	fontSize: theme.typography.pxToRem(15),
	marginRight: theme.spacing(1),
	color: 'rgba(255, 255, 255, 0.7)',
	'&.Mui-selected': {
		color: '#fff',
	},
	'&.Mui-focusVisible': {
		backgroundColor: 'rgba(100, 95, 228, 0.32)',
	},
}));

function a11yProps(index: number) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	};
}

export default function AusChampionship(): ReactElement {
	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index: number) => {
		setValue(index);
	};

	const focusListener = (event: React.MouseEvent<HTMLButtonElement>) => {
		console.log('Button clicked!', event.target.classList);
		const class_ = 'bg-[#BFBFBF]';
		if (event.target.classList.contains(class_)) {
			event.target.classList.remove(class_)
		} else {
			event.target.classList.add(class_)
		}
	};

	const items1 = Array.from({ length: 10 }, (_, index) => (
		<ListItem alignItems="flex-start" sx={{ padding: '0' }}>
			<ListItemAvatar>
				<Badge
					overlap="circular"
					anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
					badgeContent={
						<SmallAvatar alt="Remy Sharp" src="/public/badge/1.png" sx={{ borderRadius: '0' }} />
					}
				>
					<Avatar alt="Travis Howard" src="/public/avatar/1.png" sx={{ borderRadius: '0' }} />
				</Badge>
			</ListItemAvatar>
			<ListItemText
				primary="Darlene Robertson"
				secondary=" The University of adelaide"
			/>
			<ListItemText
				sx={{ flex: 'none' }}
				primary={
					<Typography
						sx={{ fontSize: '12px' }}
					>
						23937 votes
					</Typography>
				}
				secondary={
					<BootstrapButton
						onClick={focusListener}
						variant="outlined"
						size="small"
					>
						Vote
					</BootstrapButton>
				}
			/>
		</ListItem>
	));

	const items2 = Array.from({ length: 10 }, (_, index) => (
		<ListItem alignItems="flex-start" sx={{ padding: '0' }}>
			<ListItemAvatar>
				<Badge
					overlap="circular"
					anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
					badgeContent={
						<SmallAvatar alt="Remy Sharp" src="/public/badge/1.png" sx={{ borderRadius: '0' }} />
					}
				>
					<Avatar alt="Travis Howard" src="/public/avatar/2.png" sx={{ borderRadius: '0' }} />
				</Badge>
			</ListItemAvatar>
			<ListItemText
				primary={
					<Typography sx={{ maxWidth: '150px' }}>
						The University of adelaide
					</Typography>
				}
			/>
			<ListItemText
				sx={{ flex: 'none' }}
				primary={
					<Typography
						sx={{ fontSize: '12px' }}
					>
						23937 votes
					</Typography>
				}
				secondary={
					<BootstrapButton
						onClick={focusListener}
						variant="outlined"
						size="small"
					>
						Vote
					</BootstrapButton>
				}
			/>
		</ListItem>
	));

	return (
		<div className="text-white bg-custom">
			<AppBar
				position="static"
				sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
					>
						<ArrowBackIosIcon />
					</IconButton>
					<Typography
						className="text-center w-full"
						variant="h6"
						sx={{ fontSize: '14px', float: 'left' }}>
						Leaderboards
					</Typography>
					<IconButton
						className='text-sm'
						size="large"
						edge="end"
						color="inherit"
					>
						<IosShareOutlinedIcon />
						<Typography variant='h6' sx={{ fontSize: '14px' }}>Share</Typography>
					</IconButton>
				</Toolbar>
			</AppBar>
			<TabContext value={value}>
				<Box>
					<StyledTabList onChange={handleChange} aria-label="Styled Tab List" centered>
						<StyledTab sx={{ fontSize: '17px' }} label="Debator" {...a11yProps(0)} />
						<StyledTab sx={{ fontSize: '17px' }} label="Team" {...a11yProps(1)} />
					</StyledTabList>
				</Box>
				<ReactSwipeableViews
					axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
					index={value}
					onChangeIndex={handleChangeIndex}
				>
					<TabPanel
						value={value} index={0}
						dir={theme.direction}
						sx={{ paddingTop: '0' }}>
						<List sx={{ width: '100%' }}>
							{items1}
						</List>
					</TabPanel>
					<TabPanel
						value={value} index={1}
						dir={theme.direction}
						sx={{ paddingTop: '0' }}>
						<List sx={{ width: '100%' }}>
							{items2}
						</List>
					</TabPanel>
				</ReactSwipeableViews>
			</TabContext>
		</div>
	);
}
