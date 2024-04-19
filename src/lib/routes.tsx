import BookBorrowPage from "@/pages/booksborrow/BookBorrowPage";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import AddNewAuthorPage from "@/pages/author/AddNewAuthorPage";
import AllAuthorsPage from "@/pages/author/AllAuthorsPage";
import AuthorPage from "@/pages/author/AuthorPage";
import EditAuthorPage from "@/pages/author/EditAuthorPage";
import AddNewBookPage from "@/pages/books/AddNewBookPage";
import AllBooksPage from "@/pages/books/AllBooksPage";
import BookPage from "@/pages/books/BookPage";
import EditBookPage from "@/pages/books/EditBookPage";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ProtectedRoute from "./authconfig/ProtectedRoute";
import BooksApprovePage from "@/pages/booksborrow/BooksApprovePage";
import ViewBookRequest from "@/pages/booksborrow/ViewBookRequest";
import AllRequestsOfUser from "@/pages/booksborrow/AllRequestsOfUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute role="Admin">
        <Layout>
          <BooksApprovePage />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/authors",
    element: (
      <ProtectedRoute role="Admin">
        <Layout>
          <AllAuthorsPage />
        </Layout>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "new",
        element: (
          <ProtectedRoute role="Admin">
            <Layout>
              <AddNewAuthorPage />
            </Layout>
          </ProtectedRoute>
        ),
      },
      {
        path: ":id",
        element: (
          <ProtectedRoute role="Admin">
            <Layout>
              <AuthorPage />
            </Layout>
          </ProtectedRoute>
        ),
      },
      {
        path: ":id/edit",
        element: (
          <ProtectedRoute role="Admin">
            <Layout>
              <EditAuthorPage />
            </Layout>
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/books",
    element: (
      <ProtectedRoute role="All">
        <Layout>
          <AllBooksPage />
        </Layout>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "new",
        element: (
          <ProtectedRoute role="Admin">
            <Layout>
              <AddNewBookPage />
            </Layout>
          </ProtectedRoute>
        ),
      },
      {
        path: ":id",
        element: (
          <ProtectedRoute  role="Admin">
            <Layout>
              <BookPage />
            </Layout>
          </ProtectedRoute>
        ),
      },
      {
        path: ":id/edit",
        element: (
          <ProtectedRoute role="Admin">
            <Layout>
              <EditBookPage />
            </Layout>
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/borrow/:id",
    element: (
      <ProtectedRoute role="Admin">
        <Layout>
          <ViewBookRequest />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/borrow",
    element: (
      <ProtectedRoute role="Admin">
        <Layout>
          <AllRequestsOfUser />
        </Layout>
      </ProtectedRoute>
    ),
    children: [
      {
        path: ":id",
        element: (
          <ProtectedRoute role="Admin">
            <Layout>
              <ViewBookRequest />
            </Layout>
          </ProtectedRoute>
        ),
      },
      {
        path: "new",
        element: (
          <ProtectedRoute role="User">
            <Layout>
              <BookBorrowPage />
            </Layout>
          </ProtectedRoute>
        ),
      }
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

export default router;
