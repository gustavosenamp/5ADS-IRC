import { useParams } from "react-router-dom";
import EditUserForm from "../components/EditUserForm";

export default function EditUserPage() {
  const { id } = useParams();

  return (
    <div className="page-container">
      <EditUserForm userId={id} />
    </div>
  );
}
