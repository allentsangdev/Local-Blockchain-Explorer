import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function HomeLogo() {
	return (
		<>
			<div className="container">
				<div className="scene">
					<div className="webpack-cube">
						<div className="outer-cube">
							<div className="face face-top"></div>
							<div className="face face-bottom"></div>
							<div className="face face-left"></div>
							<div className="face face-right"></div>
							<div className="face face-front"></div>
							<div className="face face-back"></div>
						</div>
						<div className="inner-cube">
							<div className="face face-top"></div>
							<div className="face face-bottom"></div>
							<div className="face face-left"></div>
							<div className="face face-right"></div>
							<div className="face face-front"></div>
							<div className="face face-back"></div>
						</div>
					</div>
					<div className="shadows-outer-container">
						<div className="shadow-outer"></div>
					</div>
					<div className="shadows-inner-container">
						<div className="shadow-inner"></div>
					</div>
				</div>
			</div>
		</>
	)
}

function Home() {

	return (
		<>
			<div>
				<CssBaseline />
				<Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
					<Typography variant="h4" style={{marginBottom: 10}}> Blockchain Explorer </Typography>
					<Typography variant="h5"> Welcome Back! </Typography>
					<HomeLogo />
				</Box>
			</div>
		</>
	)
}

export default Home