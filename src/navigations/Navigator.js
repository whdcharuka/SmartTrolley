import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Scan from '../screens/Scan';
import ForgotPassword from '../screens/ForgotPassword';

const stackNavigatorOptions = {
    headerShown:false
}
const AppNavigator = createStackNavigator({
    Register:{screen:Register},
    Login:{screen:Login}, 
    Scan:{screen:Scan},
    ForgotPassword:{screen:ForgotPassword},
    
},
{
    defaultNavigationOptions : stackNavigatorOptions
}  
);
export default createAppContainer(AppNavigator);