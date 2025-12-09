import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewPaste = () => {

  const {id} = useParams();

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
    <div>
      <div className="mt-5 flex justify-center gap-7">
        <input
          className="p-2 pl-4 bg-gray-700 rounded-2xl min-w-[500px]"
          type="text"
          readOnly
          value={paste.title}
        />
      </div>
      <div>
        <textarea
          className="p-3 bg-gray-700 rounded-2xl mt-5 min-w-[500px]"
          value={paste.content}
          readOnly
          rows={20}
        />
      </div>
    </div>
  )
}

export default ViewPaste
