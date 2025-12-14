import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ViewPasteCard from "../components/paste/ViewPasteCard";

const ViewPastePage = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);

  const paste = allPastes.find((item) => item._id === id);

  if (!paste) {
    return (
      <div className="mt-5 text-center text-red-500">
        Paste not found.
      </div>
    );
  }

  return (
    <ViewPasteCard
      title={paste.title}
      content={paste.content}
    />
  );
};

export default ViewPastePage;
