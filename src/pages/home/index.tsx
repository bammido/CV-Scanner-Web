import Header from "../../components/header";
import DetailsSection from "./components/detailsSection";
import UploadSection from "./components/uploadSection";

export default function Home() {
    return <div className="pt-20 flex flex-col">
    <Header />
    <div className="flex flex-col p-8 pt-20 gap-14">
        <UploadSection />
        <DetailsSection />
    </div>

  </div>
}