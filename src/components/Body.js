import React from "react";
import Form from "./Form";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PlayMovie from "./PlayMovie";
import LandingPage from "./LandingPage";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <Form />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/browse/watch/:id",
      element: <PlayMovie />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
