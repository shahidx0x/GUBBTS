import useAuth from "../../hooks/useAuth";

export const Navbar = () => {
  const { user, logout, admin } = useAuth();
  console.log(user);
  return (
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">GUB Bus Tracking System</a>
      </div>
      <div class="flex-none gap-2">
        <div
          class={
            Object.keys(user).length != 0 ? "dropdown dropdown-end" : "hidden"
          }
        >
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabindex="0"
            class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a class="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a
                onClick={() => {
                  logout();
                  window.location.reload();
                }}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
