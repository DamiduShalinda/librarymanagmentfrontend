import BookBorrowPage from "@/pages/BookBorrowPage";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout>
          <BookBorrowPage />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/authors",
    element: (
      <ProtectedRoute>
        <Layout>
          <AllAuthorsPage />
        </Layout>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "new",
        element: (
          <ProtectedRoute>
            <Layout>
              <AddNewAuthorPage />
            </Layout>
          </ProtectedRoute>
        ),
      },
      {
        path: ":id",
        element: (
          <ProtectedRoute>
            <Layout>
              <AuthorPage />
            </Layout>
          </ProtectedRoute>
        ),
      },
      {
        path: ":id/edit",
        element: (
          <ProtectedRoute>
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
      <ProtectedRoute>
        <Layout>
          <AllBooksPage />
        </Layout>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "new",
        element: (
          <ProtectedRoute>
            <Layout>
              <AddNewBookPage />
            </Layout>
          </ProtectedRoute>
        ),
      },
      {
        path: ":id",
        element: (
          <ProtectedRoute>
            <Layout>
              <BookPage />
            </Layout>
          </ProtectedRoute>
        ),
      },
      {
        path: ":id/edit",
        element: (
          <ProtectedRoute>
            <Layout>
              <EditBookPage />
            </Layout>
          </ProtectedRoute>
        ),
      },
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
