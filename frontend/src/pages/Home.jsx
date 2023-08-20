import Modal from '../components/Modal';
import Projects from '../components/Projects';
import Clients from '../components/Clients';

const Home = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <Modal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
};

export default Home;
