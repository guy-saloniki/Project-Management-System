import Modal from '../components/Modal';
import Projects from '../components/Projects';
import Clients from '../components/Clients';
import ProjectModal from '../components/ProjectModal';

const Home = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <Modal />
        <ProjectModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
};

export default Home;
