import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Lenta from './screens/lenta';
import Profile from './screens/profile';
import Login from './screens/login';
import Setting from './screens/setting';
import Chat from './screens/chat';
import Like from './screens/like';
import Daniel from './screens/daniel';
import Post from './screens/post';
import Storys from './screens/storys';
import Profilesetting from './screens/profilesetting';
import Accountscenter from './screens/accountscenter';
import Direct from './screens/direct';
import Accounts from './screens/accounts';
import Changepassword from './screens/changepassword';
import Followers from './screens/followers';
import Following from './screens/following';
import Usersfollowers from './screens/usersfollowers';
import Usersfollowing from './screens/usersfollowing';
import Calculator from './screens/calculator';

const  App=()=> {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/followers' element={<Followers/>} />
            <Route path='/following' element={<Following/>} />
            <Route path='/storys/:id' element={<Storys/>} />
            <Route path='/accounts' element={<Accounts/>} />
            <Route path='/changepassword' element={<Changepassword/>} />
            <Route path='/daniel/:id' element={<Daniel/>} />
            <Route path='/like' element={<Like/>} />
            <Route path='/post/:id' element={<Post/>} />
            <Route path='/chat' element={<Chat/>} />
            <Route path='/direct' element={<Direct/>} />
            <Route path='/lenta' element={<Lenta/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/setting' element={<Setting/>} />
            <Route path='/profilesetting' element={<Profilesetting/>} />
            <Route path='/accountscenter' element={<Accountscenter/>} />
            <Route path='/usersfollowers/:id' element={<Usersfollowers/>} />
            <Route path='/usersfollowing/:id' element={<Usersfollowing/>}/>
            <Route path='/calculator' element={<Calculator/>}/>
            <Route path='/' element={<Login/>} />
          </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;

