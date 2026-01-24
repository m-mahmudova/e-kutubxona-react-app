import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/userSlice";

function UserInfo() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.user);

  return (
    <div>
      <button onClick={() => dispatch(fetchUser(1))}>
        Foydalanuvchini yuklash
      </button>

      {loading && <p>Yuklanmoqda...</p>}
      {error && <p>Xatolik: {error}</p>}
      {data && <p>{data.name}</p>}
    </div>
  );
}

export default UserInfo;
