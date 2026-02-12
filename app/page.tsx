
import LandingPageSwitcher from "./_landing-page/switcher";

export default function Home() {

  return (
   <LandingPageSwitcher/>
  );
}

// "use client";

// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "@/Redux/store";
// import { increment, decrement } from "@/Redux/store/slices/counterSlice";
// import { changeSwitcherVal } from "@/Redux/store/slices/landingPageSwitcherSlice";

// export default function Home() {
//   const dispatch = useDispatch();
//   const value = useSelector((state: RootState) => state.counter.value);
//   const value2 = useSelector((state: RootState) => state.landingPageSwitcher.value);
//   return (
//     <div>
//       <h1>Counter: {value}</h1>
//       <h1>Landing Page Switcher: {value2}</h1>
//       <button onClick={() => dispatch(increment())}>+</button>
//       <button onClick={() => dispatch(decrement())}>-</button>
//       <button onClick={() => dispatch(changeSwitcherVal("about"))}>Change to About</button>
//       <button onClick={() => dispatch(changeSwitcherVal("main"))}>Change to Main</button>
//     </div>
//   );
// }
