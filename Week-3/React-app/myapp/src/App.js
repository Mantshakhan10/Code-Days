import Header from "./components/Header";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import ProfileCard from "./components/ProfileCard";
import "./App.css";
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import UserList from "./UserList";
import Posts from "./Posts";    

function App() {
    
    // Array of users for .map()
    const users = [
        {
            id: 1,
            name: "Alex",
            role: "Frontend Developer",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            id: 2,
            name: "Deville",
            role: "UI/UX Designer",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            id: 3,
            name: "Rahul",
            role: "Backend Developer",
            image: "https://randomuser.me/api/portraits/men/77.jpg"
        }
    ];

    return (
        <>
            <Header />
            <Footer />
            <UserForm />
            <Counter />
            <UserList />
            <Posts />
            <div>
                <Greeting />
                <Greeting name="Priya" topic="React Components" />
                <Greeting name="Rohan" topic="JSX & Props" />
            </div>
              <div>
            
        </div>

            {/* Rendering Profile Cards using .map() */}
            <div style={{ display: "flex", justifyContent: "center" }}>
                {users.map(user => (
                    <ProfileCard
                        key={user.id}
                        name={user.name}
                        role={user.role}
                        image={user.image}
                    />
                ))}
            </div>
        </>
    );
}

export default App;
