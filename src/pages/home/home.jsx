import './home.scss'
import Stories from '../../components/stories/stories';
import Posts from '../../components/posts/posts';
export default function Home(){
    return(
        <div className="home">
            <Stories/>
            <Posts/>
        </div>
    )
}