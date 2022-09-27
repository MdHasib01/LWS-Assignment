import { Provider } from 'react-redux';
import BlogList from './components/BlogList';
import BlogTop from './components/BlogTop';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SearchSection from './components/SearchSection';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Navbar/>

        <SearchSection/>

        <section
            className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8"
        >
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3"></div>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <BlogTop/>

                <div
                    className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
                >
                    <BlogList/>
                    
                </div>
            </div>
        </section>
        
        <section className="pt-6">
            <Footer/>
        </section>
    </Provider>
  );
}

export default App;
