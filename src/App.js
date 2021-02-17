import logo from './logo.svg';
import './App.css';
import {facebookProvider, githubProvider, googleProvider} from './config/authMethods';
import socialMediaAuth from './service/auth';
import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {
	const handleClick = async (provider) => {
		const response = await socialMediaAuth(provider);
		console.log(response, 'response');
	}
	return (
		<div className="App">
			<header className="App-header">
				<p>React authentication with social media (Facebook, Github, Google)</p>
				<img src={logo} className="App-logo" alt="logo" />
				<div>
					<span className='padding'><a href="#" onClick={() => handleClick(facebookProvider)} className="fa fa-facebook"></a></span>
					<span className='padding'><a href="#" onClick={() => handleClick(githubProvider)} className="fa fa-github"></a></span>
					<span className='padding'><a href="#" onClick={() => handleClick(googleProvider)} className="fa fa-google"></a></span>
				</div>
			</header>
			<MessengerCustomerChat
				pageId="347059026630655" // take it from ur fb page -> about section
				appId="245218217092827" //  developer fb -> create App
			/>
		</div>
	);
}

export default App;
