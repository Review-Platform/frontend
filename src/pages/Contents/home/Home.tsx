import MainHeader from "../../../components/mainHeader/MainHeader";
import Introduction from "../../../components/main/introduction/Introduction";
import Routine from "../../../components/main/routine/Routine";
import Record from "../../../components/main/record/Record";
import Footer from "../../../components/main/footer/Footer";

function Home() {
  return (
    <>
      <Introduction />
      <Routine />
      <Record />
      <Footer />
    </>
  );
}
export default Home;
