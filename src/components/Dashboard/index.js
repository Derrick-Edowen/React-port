
import Home from "./home";

const Dashboard = () => {
/*
    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
            } else {
                setUser(null);
            }
        })
    }, []);

*/
    return (
       <div>
           {<Home /> }
       </div>
    )
}

export default Dashboard;