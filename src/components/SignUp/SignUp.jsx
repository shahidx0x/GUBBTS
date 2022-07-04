import axios from "axios";
import { useForm } from "react-hook-form";
import { FcBusinessman } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import initializeAuthentication from "../../firebase/firebase.init";
import useAuth from "../../hooks/useAuth";
initializeAuthentication();
export const SignUp = () => {
  const MySwal = withReactContent(Swal);
  const { registerUser, SetUser, auth, updateProfile, logout } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const genRandom = (num) => {
    return Math.floor(Math.random() * num) + 1;
  };

  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    axios.post("https://project-101-doctor.herokuapp.com/users/", user);
  };
  const onSubmit = (data) => {
    console.log(data);
    const pass = data.password1;
    const pass2 = data.password2;
    const email = data.mail;
    const name = data.displayName;
    data.img_url = `https://randomuser.me/api/portraits/men/${genRandom(
      100
    )}.jpg`;
    const img_url = `https://randomuser.me/api/portraits/men/${genRandom(
      100
    )}.jpg`;
    if (pass !== pass2) {
      alert("Password Not Matched");
      return;
    }
    axios.post("https://project-101-doctor.herokuapp.com/reg-user-info", data);
    registerUser(name, email, pass)
      .then((userCredential) => {
        const updatedUser = { email, displayName: name };
        SetUser(updatedUser);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: img_url,
        }).then(() => {
          localStorage.setItem("isAuth", "true");
          saveUser(email, name);
          MySwal.fire({
            title: (
              <p>
                Signup Successfull
                <br />
                Please Login !
              </p>
            ),
            didOpen: () => {},
          }).then(() => {
            return logout();
          });
          navigate(location.state?.from || "/login");
        });
      })
      .catch((error) => {});
  };
  console.log(errors);

  return (
    <>
      <div
        class="hero min-h-screen"
        style={{
          backgroundImage: "url(https://wallpaperaccess.com/full/241312.jpg)",
        }}
      >
        <div class="hero-overlay bg-opacity-80"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="">
            <div>
              <div class="">
                <div class=" w-96 flex-col lg:flex-row-reverse">
                  <div class="text-center w-96 lg:text-left"></div>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
                  >
                    <div class="card-body">
                      <div class="form-control">
                        <p style={{ fontSize: "150px", marginLeft: "25%" }}>
                          <FcBusinessman />
                        </p>
                        <label class="label">
                          <span class="label-text">Name</span>
                        </label>
                        <input
                          type="text"
                          placeholder=""
                          class="input input-bordered"
                          {...register("displayName", {})}
                        />
                      </div>
                      <div class="form-control">
                        <label class="label">
                          <span class="label-text">Email</span>
                        </label>
                        <input
                          type="text"
                          placeholder=""
                          class="input input-bordered"
                          {...register("mail", {})}
                        />
                      </div>
                      <div class="form-control">
                        <label class="label">
                          <span class="label-text">Contact</span>
                        </label>
                        <input
                          type="text"
                          placeholder=""
                          class="input input-bordered"
                          {...register("contact", {})}
                        />
                      </div>
                      <div class="form-control">
                        <label class="label">
                          <span class="label-text">ID</span>
                        </label>
                        <input
                          type="text"
                          placeholder=""
                          class="input input-bordered"
                          {...register("ID", {})}
                        />
                      </div>
                      <div class="form-control">
                        <label class="label">
                          <span class="label-text">Password</span>
                        </label>
                        <input
                          type="text"
                          placeholder=""
                          class="input input-bordered"
                          {...register("password1", {})}
                        />
                      </div>
                      <div class="form-control">
                        <label class="label">
                          <span class="label-text">Confirm Password</span>
                        </label>
                        <input
                          type="text"
                          placeholder=""
                          class="input input-bordered"
                          {...register("password2", {})}
                        />
                      </div>
                      <div class="form-control mt-6">
                        <button type="submit" class="btn btn-primary">
                          SignUp
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
