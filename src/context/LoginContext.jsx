import { createContext } from 'preact';
import { useContext, useState } from 'preact/hooks';

const LoginContext = createContext();

const Context = ({ children }) => {
	const [userNameContext, setUserNameContext] = useState(undefined);
	const [userTokenContext, setUserTokenContext] = useState(undefined);

	return (
		<LoginContext.Provider
			value={{
				// state
				userNameContext,
				userTokenContext,
				// set state
				setUserNameContext,
				setUserTokenContext,
			}}
		>
			{children}
		</LoginContext.Provider>
	);
};

export default Context;

export const useLogin = () => {
	return useContext(LoginContext);
};
