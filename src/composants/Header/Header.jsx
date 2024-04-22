import PageTitle from './PageTitle';
import TopTweets from './TopTweets';
import Imageetoile from '../../assets/Icons/Vector.svg';

export default function Header (){
    return <div className="header">
        <PageTitle
            titre="Home"
        />
        <TopTweets
            img={Imageetoile}
        />
    </div>
}